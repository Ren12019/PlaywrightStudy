"use strict";
// import { hello } from "./greet";

import $ from "jquery";
// var $ = require("jquery");

const calculateNumber = () => {
  const number1 = parseFloat($("#number1").val());
  const number2 = parseFloat($("#number2").val());
  if (isNaN(number1) || isNaN(number2)) {
    $("#message").text("Please enter a number.");
    return;
  }

  const method = $("#method-select option:selected").val();
  switch (method) {
    case "plus":
      return number1 + number2;
    case "minus":
      return number1 - number2;
    case "multiplication":
      return number1 * number2;
    case "division":
      return number1 / number2;
    default:
      $("#message").text("Illegal operation is selected.");
      return;
  }
};

$(function () {
  $("#message").css("color", "red");
  $("#btnCalculate").on("click", () => {
    $("#answer").val(calculateNumber());
  });

  // hello();
});
