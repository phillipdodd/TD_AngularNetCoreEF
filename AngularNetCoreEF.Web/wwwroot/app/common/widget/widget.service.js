//todo make env variable or import from constants file
var API_PORT = 5000;

(function (angular) {
    'use strict';

    WidgetService.$inject = ['$http'];

    function WidgetService($http) {
        this.getWidgets = getWidgets;
        this.addWidget = addWidget;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        function getWidgets() {
            var res = $http({
                method: "GET",
                url: `http://localhost:${API_PORT}/api/widget/`
            });
            return res;
        }

        function addWidget(widget) {
            return $http({
                method: 'POST',
                url: `http://localhost:${API_PORT}/api/widget/`,
                data: widget
            })
        }

        function updateWidget(widget) {
            return $http({
                method: "PATCH",
                url: `http://localhost:${API_PORT}/api/widget/${widget.id}`,
                data: widget
            });
        }

        function deleteWidget(widget) {
            return $http({
                method: "DELETE",
                url: `http://localhost:${API_PORT}/api/widget/${widget.id}`
            });
        }
    }

    angular
        .module('widget')
        .service('WidgetService', WidgetService);
})(window.angular);