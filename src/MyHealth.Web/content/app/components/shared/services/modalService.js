function ModalService($modal) {
    'use strict';

    return {
        showConfirmModal
    };

    function showConfirmModal(opts) {
        return $modal.open({

            templateUrl: '/app/components/shared/views/confirmModal.html',

            controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

                $scope.messages = opts.messages;

                $scope.ok = function () {
                    $modalInstance.close();
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }]

        }).result;
    }
}

export default ModalService;