(function (angular) {

    WidgetListController.$inject = ['WidgetService'];

    function WidgetListController(WidgetService) {
        var ctrl = this;

        ctrl.widgets = [];

        ctrl.query = undefined;
        ctrl.orderProp = "age";
        ctrl.newWidget = {
            name: undefined,
            active: undefined,
            age: undefined,
        }

        ctrl.$onInit = function () {
            ctrl.getWidgets();
        }

        ctrl.getWidgets = function () {
            console.group('widget-list.getWidgets')
            console.info('Getting widgets...')
            var res = WidgetService.getWidgets();

            res.then(function (response) {
                ctrl.widgets = response.data;
                console.info(`${ctrl.widgets.length} widgets retrieved.`)
            })
        }

        ctrl.updateWidget = function (widget) {
            console.group('widget-list.updateWidget')

            console.info(`Updating widget with id: ${widget.id}...`);

            var res = WidgetService.updateWidget(widget);

            res.then(function (response) {
                console.info(`Updated widget. HTTP Response:`);
                console.dir(response);
                console.groupEnd();
            });

            return res;
        }

        ctrl.deleteWidget = function (widget) {
            console.group('widget-list.deleteWidget')

            console.info(`Deleting widget with id: ${widget.id}`);
            var res = WidgetService.deleteWidget(widget);

            res.then(function (response) {
                console.info('Deleted widget. HTTP Response:')
                console.dir(response);
                console.groupEnd();

                var index = ctrl.widgets.indexOf(widget);
                if (index >= 0) {
                    ctrl.widgets.splice(index, 1);
                }
            });
        }
    }

    angular.module("widget")
        .component("widgetList", {
            templateUrl: "app/common/widget/widget-list/widget-list.template.html",
            controller: WidgetListController
        })

}) (window.angular);