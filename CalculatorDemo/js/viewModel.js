/// <reference path="../js/calculator.js" />

(function (global) {

    global.ViewModel = function () {
        var calculator = new Calculator();
        var justPressedOperator = false;
        var previousInputNumber = 0;
        this.Display = ko.observable("0");

        this.PressNumber = function (number) {
            this.Display((this.Display() == "0" || justPressedOperator)
                    ? number
                    : this.Display() + number);
            justPressedOperator = false;
            previousInputNumber = parseInt(this.Display(), 10);
        };

        this.PressOperator = function (operator) {
            if (justPressedOperator == false) {
                calculator.setInputNumber(parseInt(this.Display(), 10));
                calculator.setOperator(operator);
                this.Display(calculator.getResult().toString(10));
            }
            justPressedOperator = true;
        };

        this.PressEquals = function () {
            calculator.setInputNumber(previousInputNumber);
            this.Display(calculator.getResult().toString(10));
        };
    };

})(window);