'use strict';

var $ = require('jquery');

$(function(){
    $('h1').css('color','red');
    $("#btnCalculate")
    .on("click", () => {
        $("#answer").val($("#number1").val() + $("#number2").val())
    })
})