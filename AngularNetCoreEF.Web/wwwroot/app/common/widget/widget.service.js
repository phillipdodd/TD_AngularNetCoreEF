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
                url: "http://localhost:15114/api/widget/"
            });
            return res;
        }

        function addWidget(widget) {
            return $http({
                method: 'POST',
                url: 'http://localhost:15114/api/widget/',
                data: widget
            })
        }

        function updateWidget(widget) {
            return $http({
                method: "PATCH",
                url: `http://localhost:15114/api/widget/${widget.id}`,
                data: widget
            });
        }

        function deleteWidget(widget) {
            return $http({
                method: "DELETE",
                url: `http://localhost:15114/api/widget/${widget.id}`
            });
        }
    }

    angular
        .module('widget')
        .service('WidgetService', WidgetService);
})(window.angular);