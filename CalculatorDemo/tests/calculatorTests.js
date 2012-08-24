/// <reference path="../js/calculator.js" />

var calculator;

module("Calculator Tests", {
    setup: function () {
		calculator = new Calculator();
    },
    teardown: function () {
        // run after each test
    }
});

test("Calculator should return the current total", function () {
	var result = calculator.getResult();
	equal(result, 0, "Result should equal 0");
});

test("should add the current number to the stack", function () {
	calculator.setInputNumber(14);
	var result = calculator.getResult();
	equal(result, 14, "Result should equal 14");
});

test("should be able to add 2 numbers", function() {
	var result = testTwoNumbers(14, "+", 12);
	equal(result, 26, "Result should equal 26");
});

test("should be able to subtract 2 numbers", function() {
	var result = testTwoNumbers(14, "-", 12);
	equal(result, 2, "Result should equal 2");
});

test("should be able to multiply 2 numbers", function() {
	var result = testTwoNumbers(14, "*", 10);
	equal(result, 140, "Result should equal 140");
});

test("should be able to divide 2 numbers", function () {
    var result = testTwoNumbers(140, "/", 10);
    equal(result, 14, "Result should equal 14");
});


function testTwoNumbers(firstNumber, operator, secondNumber) {
	calculator.setInputNumber(firstNumber);
	calculator.setOperator(operator);
	calculator.setInputNumber(secondNumber);
	return calculator.getResult();
}