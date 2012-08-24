(function (global) {


    global.Calculator = function() {
        var operator = "";
        var result = 0;

        var operators = {
            "+": function(a, b) {
                console.log("Add " + a + "," + b);
                return a + b;
            },
            "-": function(a, b) {
                return a - b;
            },
            "*": function(a, b) {
                return a * b;
            },
            "/": function(a, b) {
                return a / b;
            },
            "": function(a, b) {
                return b;
            }
        };

        function calculate(inputNumber) {
            return operators[operator](result, inputNumber);
        }

        this.getResult = function() {
            return result;
        };

        this.setInputNumber = function(inputNumber) {
            result = calculate(inputNumber);
        };

        this.setOperator = function(inputOperator) {
            operator = inputOperator;
        };
    };
    
})(window);