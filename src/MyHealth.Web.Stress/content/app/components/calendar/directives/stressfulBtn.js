const TIMEOUT = new WeakMap();
const animationTime = 5000;

class StressfulBtn {

    constructor($timeout) {
        this.restrict = 'C';
        TIMEOUT.set(this, $timeout);
    }

    link(scope, element) {

        const outsideEventName = 'click.stressfulBtn';
        const $timeout = TIMEOUT.get(StressfulBtn.instance);
        var timeoutPromise;
        scope.stressfulTimeOpened = false;

        function unbindOutsideClick() {
            $(document).unbind(outsideEventName);
        }

        function bindOutsideClick() {
            $(document).bind(outsideEventName, (event) => {
                if (!scope.stressfulTimeOpened) {
                    event.stopPropagation();
                } else {
                    scope.$apply(() => {
                        $timeout.cancel(timeoutPromise);
                        scope.showPerson = false;
                        scope.stressfulTimeOpened = false;
                        unbindOutsideClick();
                    });
                }
            });
        }

        element.bind('click', (event) => {
            $timeout.cancel(timeoutPromise);
            scope.showPerson = false;
            scope.$apply(() => {
                scope.stressfulTimeOpened = true;
            });

            timeoutPromise = $timeout(() => {
                if (scope.stressfulTimeOpened) {
                    scope.showPerson = true;
                }
            }, animationTime);

            bindOutsideClick();
            event.stopPropagation();
        });
    }

    static directiveFactory($timeout) {
        StressfulBtn.instance = new StressfulBtn($timeout);
        return StressfulBtn.instance;
    }
}

StressfulBtn.directiveFactory.$inject = ['$timeout'];

export default StressfulBtn.directiveFactory;