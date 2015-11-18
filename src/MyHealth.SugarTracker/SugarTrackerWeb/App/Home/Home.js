/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            // JQuery UI tabs
            $("#tabs").tabs();

            // JQuery UI slider for the target range setting
            $("#slider-normal-range").slider({
                range: true,
                min: 0,
                max: 400,
                values: [60, 149],
                slide: function (event, ui) {
                    $("#normal-range-start").val(ui.values[0]);
                    $("#normal-range-end").val(ui.values[1]);
                    $("#normal-range").val(ui.values[0] + " - " + ui.values[1]);
                },
                change: function (event, ui) {
                    updateExcelRange(ui.values[0], ui.values[1]);
            }
            });
            $("#normal-range-start").val($("#slider-normal-range").slider("values", 0));
            $("#normal-range-end").val($("#slider-normal-range").slider("values", 1));
            $("#normal-range").val($("#slider-normal-range").slider("values", 0) + " - " + $("#slider-normal-range").slider("values", 1));


            $("input[name='timeslice']").change(function () {
                // Get the name of the time slice the user chose in the task pane
                var selectedTimeSlice = $('input:radio:checked').map(function () {
                    return this.value;
                }).get();
                populateBloodSugarLog(selectedTimeSlice);
            });

            // Attach click event handler for the button
            $('#sync-data').click(syncAndTrackYourResults);
        });

    };


    function updateExcelRange(rangeStart, rangeEnd) {
        // Run a batch operation against the Excel object model
        Excel.run(function (ctx) {

            // Create a proxy object for the active worksheet
            var summarySheet = ctx.workbook.worksheets.getItem("Summary");

            // Queue commands to update the cell with the most current reading:
            // Get range from a named range
            var range = summarySheet.getRange("BelowRange");
            var formulaStartStr = '">' + 0 +'"';
            var formulaEndStr = '"<' + rangeStart + '"';
            var formulaStr = '=COUNTIFS(DataTable[BLOOD SUGAR (mg/dL)],'+formulaStartStr+', DataTable[BLOOD SUGAR (mg/dL)], '+formulaEndStr+')';
            // Set to a formula representing the topmost row of the blood sugar
            range.formulas = [[formulaStr]];

            var range = summarySheet.getRange("NormalRange");
            var formulaStartStr = '">' + rangeStart + '"';
            var formulaEndStr = '"<' + rangeEnd + '"';
            var formulaStr = '=COUNTIFS(DataTable[BLOOD SUGAR (mg/dL)],' + formulaStartStr + ', DataTable[BLOOD SUGAR (mg/dL)], ' + formulaEndStr + ')';
            // Set to a formula representing the topmost row of the blood sugar
            range.formulas = [[formulaStr]];

            var range = summarySheet.getRange("AboveRange");
            var formulaStartStr = '">' + rangeEnd + '"';
            var formulaEndStr = '"<' + 1000 + '"';
            var formulaStr = '=COUNTIFS(DataTable[BLOOD SUGAR (mg/dL)],' + formulaStartStr + ', DataTable[BLOOD SUGAR (mg/dL)], ' + formulaEndStr + ')';
            // Set to a formula representing the topmost row of the blood sugar
            range.formulas = [[formulaStr]];

            // Execute all of the above queued up commands and return a promise
            return ctx.sync();
        })
         .catch(function (error) {
             // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
             app.showNotification("Error: " + error);
             console.log("Error: " + error);
             if (error instanceof OfficeExtension.Error) {
                 console.log("Debug info: " + JSON.stringify(error.debugInfo));
             }
         });
    }
    // Click event handler for the button
    function syncAndTrackYourResults() {

        // Disable the button to disallow repeated clicks until this request is fulfilled
        $('#sync-data').prop('disabled', true);

        // Get the blood sugar data
        // Request Url
        var numberOfEntriesToFetch = 60 / 5 * 24; /* 60 minutes per hour, data comes in every ~5 minutes, muliplying by 24 hours */
        var requestUrl = "https://YOUR_SERVER.azurewebsites.net/api/v1/Entries?count=" + numberOfEntriesToFetch;

        // Make the request
        $.ajax({
            url: requestUrl,
            type: "GET",
            dataType: "text"
        })
        .done(function (data) {
            // Convert the tab-separated plain text results into lines of data and populate the table
            processData(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            app.showNotification("Error calling the Blood Sugar API", "Error message: " + JSON.stringify(jqXHR) + ".");
            console.log(JSON.stringify(jqXHR));
        });
    }

    // Convert the tab-separated plain text results into lines of data
    function processData(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var lines = [];

        $.each(allTextLines, function (index, item) {
            var entries = item.split(/\t/);
            lines.push({
                dateTime: moment(entries[0]), /* dateTime */
                bloodSugar: entries[2] /* Blood sugar value */
            });

        });
        populateTable(lines);
    }

    function populateTable(lines) {

        // Run a batch operation against the Excel object model
        Excel.run(function (ctx) {

            // Create a proxy object for the active worksheet
            var dashboardSheet = ctx.workbook.worksheets.getItem("Dashboard");
            var summarySheet = ctx.workbook.worksheets.getItem("Summary");

            // Queue commands to get the BloodSugarLog table
            var table = ctx.workbook.tables.getItem("DataTable");

            // Queue a command to clear the existing rows 
            table.getDataBodyRange().getEntireRow().delete();

            // Store today's date which we'll use to compare
            var today = moment(Date()).format('MMM Do YY');
            var todayTime = moment(Date()).format('HH:mm');
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            yesterday = moment(yesterday).format('MMM Do YY');

            var timeSliceRightNow = getTimeSliceForTime(Date());


            // Queue commands to add table rows for each entry that has tody's date
            for (var i = 0; i < lines.length; i = i + 3) {
                var date = lines[i].dateTime;
                var dateString = date.format('MMM Do YY');
                var timeString = date.format('HH:mm');
                var timeSliceOfThisEntry = getTimeSliceForTime(lines[i].dateTime);

                if ((dateString == today) |  ((dateString == yesterday) & (timeSliceOfThisEntry != timeSliceRightNow) & (timeString > todayTime))) {
                        var time = lines[i].dateTime.format('LT');
                        var rowIndex = null; /* Adding to "null" index adds to the end of the table */
                        var data = [[
                            null /* First column is empty in the table */,
                            dateString,
                            null /* Third column is empty in the table */,
                            time,
                            null,
                            lines[i].bloodSugar /* Blood sugar value */,
                            '=AVERAGE(INDEX([BLOOD SUGAR (mg/dL)],1,1):[@[BLOOD SUGAR (mg/dL)]])' /* Running average */,
                            timeSliceOfThisEntry
                        ]];
                        table.rows.add(rowIndex, data);
                    }
                }
            // Queue commands to update the cell with the most current reading:
            // Get range from a named range
            var range = dashboardSheet.getRange("CurrentReading");
            // Set to a formula representing the topmost row of the blood sugar log
            range.formulas = [["=OFFSET(DataTable[BLOOD SUGAR (mg/dL)],0,0,1,1)"]];


            // Queue commands to update the cell with today's date
            var today = Date();
            var todayDate = moment(today).format('MMM Do YY');
            var range = dashboardSheet.getRange("Date");
            range.values = [[todayDate]];

            // Activate the sheet just in case it is not
            dashboardSheet.activate();

            //Enable the button 
            $('#sync-data').prop('disabled', false);

            // Execute all of the above queued up commands and return a promise
            return ctx.sync();
        })
          .then(function () {
              // Get the name of the time slice the user chose in the task pane
              var selectedTimeSlice = $('input:radio:checked').map(function () {
                  return this.value;
              }).get();
                populateBloodSugarLog(selectedTimeSlice);
            })
         .catch(function (error) {
             // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
             app.showNotification("Error: " + error);
             console.log("Error: " + error);
             if (error instanceof OfficeExtension.Error) {
                 console.log("Debug info: " + JSON.stringify(error.debugInfo));
             }
         });
    }

    function getTimeSliceForTime(dateTime) {
        var timeSlice;
        var hour = moment(dateTime).get('hour');
        if ((hour > 4) & (hour <=11)) {
            timeSlice = "Morning";
        }
        if ((hour > 11) & (hour <= 16)) {
            timeSlice = "Afternoon";
        }
        if ((hour > 16) & (hour <= 21)) {
            timeSlice = "Evening";
        }
        if ((hour > 21) | (hour <= 4)) {
            timeSlice = "Night";
        }
        return timeSlice;
    }

    function populateBloodSugarLog(selectedTimeSlice) {
        // Run a batch operation against the Excel object model
        Excel.run(function (ctx) {

            // Create a proxy object for the active worksheet
            var dashboardSheet = ctx.workbook.worksheets.getItem("Dashboard");

            // Queue commands to get the BloodSugarLog table
            var table = ctx.workbook.tables.getItem("BloodSugarLog");

            // Queue a command to clear the existing rows 
            table.getDataBodyRange().getEntireRow().delete();

            // Queue commands to get the Data Table
            var dataTable = ctx.workbook.tables.getItem("DataTable");
            var dataRange = dataTable.getDataBodyRange();
            dataRange.load("values");

            return ctx.sync()
            .then(function () {
                for (var row = 0; row < dataRange.values.length; row++) {
                    if (dataRange.values[row][7] == selectedTimeSlice) {
                        var rowIndex = null; /* Adding to "null" index adds to the end of the table */
                        var data = [[
                            null /* First column is empty in the table */,
                            dataRange.values[row][1],
                            null /* Third column is empty in the table */,
                            dataRange.values[row][3],
                            null,
                            dataRange.values[row][5] /* Blood sugar value */,
                            '=AVERAGE(INDEX([BLOOD SUGAR (mg/dL)],1,1):[@[BLOOD SUGAR (mg/dL)]])' /* Running average */ /* Running average */,
                            dataRange.values[row][7] /* Time slice */
                        ]];
                        table.rows.add(rowIndex, data);
                    }
                }
            })
            .then(ctx.sync)
            .catch(function (error) {
            	// Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
            	app.showNotification("Error: " + error);
            	console.log("Error: " + error);
            	if (error instanceof OfficeExtension.Error) {
            		console.log("Debug info: " + JSON.stringify(error.debugInfo));
            	}
            });
        })
    }
})();