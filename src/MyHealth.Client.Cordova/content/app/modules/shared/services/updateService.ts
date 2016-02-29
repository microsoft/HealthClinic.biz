module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    export class UpdateService {

        private $rootScope: any;
        private configService: ConfigService;
        constructor($rootScope: any, configService: ConfigService) {
            this.$rootScope = $rootScope;
            this.configService = configService;
        }

        private pluginIsAvailable() {
            if (device.platform === 'windows') {
                return false;
            }
            if (window.codePush) {
                return true;
            } else {
                console.warn('CodePush plugin is not available');
                return false;
            }
        }

        private alert(title, message, callback = () => { /*...*/ }) {
            navigator.notification.alert(
                message,
                callback,
                title,
                'Ok'
            );
        }

        private confirm(title, message, callback) {
            navigator.notification.confirm(
                message,
                (i) => { callback(i === 1 ? true : false); },
                title,
                ['Yes', 'No']
            );
        }

        private applyUpdate(remotePackage) {
            this.$rootScope.$broadcast('updateStatusChanged', { status: 'downloading_update' });
            remotePackage.download((localPackage) => {
                this.$rootScope.$broadcast('updateStatusChanged', { status: 'installing_update' });
                localPackage.install(() => {
                    // Done!
                }, (err) => {
                    this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                    this.alert('Update Error', 'There was an error while installing the update');
                }, {installMode: InstallMode.IMMEDIATE});
            }, (err) => {
                this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                this.alert('Update Error', 'There was an error while downloading the update');
            });
        }

        public checkForUpdate(silent = false) {
            // If plugin is not available, return and don't do nothing
            if (!this.pluginIsAvailable()) { return; }
            // Check if there's an update
            this.$rootScope.$broadcast('updateStatusChanged', { status: 'checking_for_updates' });
            window.codePush.checkForUpdate((remotePackage) => {
                if (!remotePackage) {
                    this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                    // There isn't any update, so, tell that to the user
                    if (!silent) {
                        this.alert('No updates', 'There isn\'t any update available');
                    }
                } else {
                    this.confirm(
                        'Update Available',
                        'There\'s a new version available, Would you like to install it?',
                        (result) => {
                            if (result) {
                                this.applyUpdate(remotePackage);
                            } else {
                                this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                            }
                        });
                }
            }, (error) => {
                this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                this.alert('Update Error', 'There was an error while checking for updates');
            });
        }

        public init() {
            if (this.configService.Update.AUTO) {
                this.checkForUpdate(true);
            }
        }

    }

    app.service('updateService', UpdateService);
}
