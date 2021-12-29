'use strict';
import { hello } from './greet';

var $ = require('jquery');

$(function(){
    $('h1').css('color','red');
    $("#btnCalculate")
    .on("click", () => {
        $("#answer").val(parseFloat($("#number1").val()) + parseFloat($("#number2").val()))
    })

    hello();
})