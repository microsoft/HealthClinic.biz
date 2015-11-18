module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    class CapitalizeFilter {
        constructor() {
            var filter = () => {
                return (input: any) => {
                    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, (txt: any) =>
                        (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())) : '';
                };
            };
            return filter();
        }
    }

    app.filter('capitalize', CapitalizeFilter);
}
