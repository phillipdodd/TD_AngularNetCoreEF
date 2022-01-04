(function (angular) {

    function WidgetEditableCardController() {
        var ctrl = this;

        ctrl.widgetCopy = {}

        ctrl.editMode = false;

        ctrl.toggleEditMode = function () {
            ctrl.editMode = !ctrl.editMode;
        };

        ctrl.save = function () {
            ctrl.editMode = false;
            console.log('Doing save stuff to this widget')
            Object.assign(ctrl.widgetCopy, ctrl.widget);
            ctrl.onSave({ widget: ctrl.widget });
        }

        ctrl.cancel = function () {
            ctrl.editMode = false;
            Object.assign(ctrl.widget, ctrl.widgetCopy)
        }

        ctrl.delete = function () {
            ctrl.onDelete({ widget: ctrl.widget });
        }

        ctrl.$onInit = function () {
            Object.assign(ctrl.widgetCopy, ctrl.widget)
        };

    }

    angular.module("widget").component("widgetEditableCard", {
        templateUrl: "app/common/widget/widget-editable-card/widget-editable-card.template.html",
        controller: WidgetEditableCardController,
        bindings: {
            widget: "<",
            onSave: "&",
            onDelete: "&"
        }
    })

})(window.angular);