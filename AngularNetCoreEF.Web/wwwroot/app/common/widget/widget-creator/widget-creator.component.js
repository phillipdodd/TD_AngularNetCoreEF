(function (angular) {

    WidgetCreatorController.$inject = ['WidgetService']
    function WidgetCreatorController(WidgetService) {
        var ctrl = this;

        ctrl.newWidget = {
            Name: '',
            Active: ''
        }

        ctrl.createWidget = function () {

            if (!!ctrl.newWidget.Name === false) {
                alert('Name is a required field');
                return;
            }
            //validation hax
            ctrl.newWidget.Active = ctrl.newWidget.Active ? true : false;

            console.group('widget-creator.createWidget');

            console.info(`Creating widget...`);
            console.dir(ctrl.newWidget);

            var res = WidgetService.addWidget(ctrl.newWidget);

            res.then(function (response) {
                console.log('Response was:');
                console.dir(response);
                console.groupEnd();

                location.reload();

                ctrl.cancel();
            });
        }

        ctrl.cancel = function () {
            for (var prop in ctrl.newWidget) {
                ctrl.newWidget[prop] = '';
            }
        }
    }

    angular.module("widget").component("widgetCreator", {
        templateUrl: "app/common/widget/widget-creator/widget-creator.template.html",
        controller: WidgetCreatorController
    })
})(window.angular);