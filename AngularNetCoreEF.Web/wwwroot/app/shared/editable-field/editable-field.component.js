(function (angular) {
    function EditableFieldController() {
        var ctrl = this;

        ctrl.editMode = false;

        ctrl.handleModeChange = function () {
            if (ctrl.editMode) {
                ctrl.onUpdate({ value: ctrl.fieldValue })
                ctrl.fieldValueCopy = ctrl.fieldValue;
            }
            ctrl.editMode = !ctrl.editMode;
        }

        ctrl.reset = function () {
            ctrl.fieldValue = ctrl.fieldValueCopy;
        }

        ctrl.$onInit = function () {
            ctrl.fieldValueCopy = ctrl.fieldValue;
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
            }
        }
    }

    angular.module("app").component("editableField", {
        templateUrl: "app/shared/editable-field/editable-field.template.html",
        controller: EditableFieldController,
        bindings: {
            fieldValue: '<',
            fieldType: '@?',
            onUpdate: '&'
        }
    });

})(window.angular);