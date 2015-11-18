var MyHealthClinic = MyHealthClinic || {};

MyHealthClinic.Config = function () {
    var bingMapsKey = 'YOUR_BING_MAPS_KEY',
        infobBoxCompanyAddress = 'HealthClinic.biz',
        companyLocation = {
            Latitude: 40.7197044,
            Longitude: -74.003000
        };

    return {
        bingMapsKey: bingMapsKey,
        infoBoxCompanyAddress: infobBoxCompanyAddress,
        companyLocation: companyLocation
    };
}();
