/// <reference path="../js/calculator.js" />
/// <reference path="../js/viewModel.js" />
/// <reference path="~/tests/resources/qunit.js" />
/// <reference path="~/tests/resources/qunit.js" />

var viewModel;

module("View Model Tests", {
    setup: function () {
        viewModel = new ViewModel();
    },
    teardown: function () {
        // run after each test
    }
});

test("Should have initial value as zero", function () {
    strictEqual(viewModel.Display(), "0", "Result should equal 0");
});

test("Pressing a number button appends that numeral to display number", function () {
    viewModel.PressNumber("3");
    strictEqual(viewModel.Display(), "3", "Result should equal 3");
});

test("Should display 35 if we press 3 and 5", function () {
    viewModel.PressNumber("3");
    viewModel.PressNumber("5");
    strictEqual(viewModel.Display(), "35", "Result should equal 35");
});

test("Should display 0 if we keep on pressing zero", function () {
    viewModel.PressNumber("0");
    viewModel.PressNumber("0");
    strictEqual(viewModel.Display(), "0", "Result should be 0");
});

test("Should display 3 if pressing 6, then plus, then 3 (without pressing equals)", function () {
    viewModel.PressNumber("6");
    viewModel.PressOperator("+");
    viewModel.PressNumber("3");
    strictEqual(viewModel.Display(), "3", "Result should be 3");
});

test("Should display 6 if pressing 6, then plus", function () {
    viewModel.PressNumber("6");
    viewModel.PressOperator("+");
    strictEqual(viewModel.Display(), "6", "Result should be 6");
});

test("Should display 9 if pressing 6, then plus, then 3, then equals", function () {
    performOperationOnTwoNumbers("6", "+", "3");
    strictEqual(viewModel.Display(), "9", "Result should be 9");
});

test("Should display 9 if pressing 12, then minus, then 3, then equals", function () {
    performOperationOnTwoNumbers("12", "-", "3");
    strictEqual(viewModel.Display(), "9", "Result should be 9");
});

test("Should display 9 if pressing 3, then multiply, then 3, then equals", function () {
    performOperationOnTwoNumbers("3", "*", "3");
    strictEqual(viewModel.Display(), "9", "Result should be 9");
});

test("Should display 1 if pressing 3, then divide, then 3, then equals", function () {
    performOperationOnTwoNumbers("3", "/", "3");
    strictEqual(viewModel.Display(), "1", "Result should be 1");
});

test("Should display 3 if pressing 1, then plus, then 2, then minus", function () {
    viewModel.PressNumber("1");
    viewModel.PressOperator("+");
    viewModel.PressNumber("2");
    viewModel.PressOperator("-");
    
    strictEqual(viewModel.Display(), "3", "Result should be 3");
});

test("Should display 100 if pressing 100, then plus, then plus", function () {
    viewModel.PressNumber("100");
    viewModel.PressOperator("+");
    viewModel.PressOperator("+");
    strictEqual(viewModel.Display(), "100", "Result should be 100");
});

test("Should display 300 if pressing 100, then plus, then equals then equals", function () {
    viewModel.PressNumber("100");
    viewModel.PressOperator("+");
    viewModel.PressEquals();
    viewModel.PressEquals();
    strictEqual(viewModel.Display(), "300", "Result should be 300");
});




function performOperationOnTwoNumbers(firstNumber,operator,secondNumber) {
    viewModel.PressNumber(firstNumber);
    viewModel.PressOperator(operator);
    viewModel.PressNumber(secondNumber);
    viewModel.PressEquals();
}