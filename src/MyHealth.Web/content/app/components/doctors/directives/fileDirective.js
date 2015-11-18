class FileBase64 {
    constructor() {
        this.restrict = 'A';
        this.scope = {
            'b64' : '='
        };
    }

    link (scope, element) {

        element.on('change', () => {
            var file = element.get(0).files[0];
            var reader = new FileReader();

            reader.onloadend = function () {
                scope.$apply(function() {
                    scope.b64 = reader.result;
                });
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                scope.b64 = '';
            }
        });
    }

    static directiveFactory() {
        FileBase64.instance = new FileBase64();
        return FileBase64.instance;
    }
}

export default FileBase64.directiveFactory;