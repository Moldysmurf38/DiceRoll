var defaultCookie = Cookies.get("colorTemplate");

if (defaultCookie === undefined) {
    Cookies.set("colorTemplate", "basic", {expires: 365});
    location.reload();
};

var cookieTemplate = Cookies.get("colorTemplate");

if (cookieTemplate === "blue") {
    $(".dropdown-item").addClass("blue-hover");
    $("select").addClass("blue-select");
    $("nav").addClass("bg-blue");
    $("body").addClass("body-blue");
    $("h1").addClass("blue-text");
    $("h5").addClass("blue-text");
    $("#button-div").addClass("blue-button");
};
if (cookieTemplate === "green") {
    $(".dropdown-item").addClass("green-hover");
    $("select").addClass("green-select");
    $("nav").addClass("bg-green");
    $("body").addClass("body-green");
    $("h1").addClass("green-text");
    $("h5").addClass("green-text");
    $("#button-div").addClass("green-button");
};
if (cookieTemplate === "brown") {
    $(".dropdown-item").addClass("brown-hover");
    $("select").addClass("brown-select");
    $("nav").addClass("bg-brown");
    $("body").addClass("body-brown");
    $("h1").addClass("brown-text");
    $("h5").addClass("brown-text");
    $("#button-div").addClass("brown-button");
};
if (cookieTemplate === "orange") {
    $(".dropdown-item").addClass("orange-hover");
    $("select").addClass("orange-select");
    $("nav").addClass("bg-orange");
    $("body").addClass("body-orange");
    $("h1").addClass("orange-text");
    $("h5").addClass("orange-text");
    $("#button-div").addClass("orange-button");
};
if (cookieTemplate === "basic") {
    $("nav").addClass("bg-custom");
    $("#button-div").addClass("btn roll-button");
};
if (cookieTemplate === "neon") {
    $(".dropdown-item").addClass("neon-hover");
    $("select").addClass("neon-select");
    $("nav").addClass("bg-neon");
    $("body").addClass("body-neon");
    $("h1").addClass("neon-text");
    $("h5").addClass("neon-text");
    $("#button-div").addClass("neon-button");
    $("header").addClass("neon-header");
    $("#button-div").css({"border": "1px solid rgb(255,255,255)"});
};

var rollTotal = 0;
var twoTotal = 0;
var fourTotal = 0;
var sixTotal = 0;
var eightTotal = 0;
var tenTotal = 0;
var twelveTotal = 0;
var twentyTotal = 0;
var hundredTotal = 0;

$("#total-results").html(rollTotal);
$("#two-sub").html(twoTotal);
$("#four-sub").html(fourTotal);
$("#six-sub").html(sixTotal);
$("#eight-sub").html(eightTotal);
$("#ten-sub").html(tenTotal);
$("#twelve-sub").html(twelveTotal);
$("#twenty-sub").html(twentyTotal);
$("#hundred-sub").html(hundredTotal);

$(".roll-button").on("click", function () {
    $(".roll-cell").empty();
    $(".sub-roll").empty();
    $("#total-results").empty();
    var twoTotal = 0;
    var fourTotal = 0;
    var sixTotal = 0;
    var eightTotal = 0;
    var tenTotal = 0;
    var twelveTotal = 0;
    var twentyTotal = 0;
    var hundredTotal = 0;
    var rollVal = [];
    var twoRoll = $("#2-dice").val();
    var fourRoll = $("#4-dice").val();
    var sixRoll = $("#6-dice").val();
    var eightRoll = $("#8-dice").val();
    var tenRoll = $("#10-dice").val();
    var twelveRoll = $("#12-dice").val();
    var twentyRoll = $("#20-dice").val();
    var hundredRoll = $("#100-dice").val();
    rollVal.push(twoRoll, fourRoll, sixRoll, eightRoll, tenRoll, twelveRoll, twentyRoll, hundredRoll);
    for (var x = 0; x < rollVal.length; x++) {
        if (x === 0) {
            for (var i = 0; i < twoRoll; i++) {
                var y = "two";
                var diceToss = diceRoll(1, 2);
                rollDisplay(diceToss, i, y);
                var cell = $("#two-" + i + "-roll").text();
                twoTotal += parseInt(cell);
            };
            $("#two-sub").html(twoTotal);
        };
        if (x === 1) {
            for (var i = 0; i < fourRoll; i++) {
                var y = "four";
                var diceToss = diceRoll(1, 4);
                rollDisplay(diceToss, i, y);
                var cell = $("#four-" + i + "-roll").text();
                fourTotal += parseInt(cell);
            };
            $("#four-sub").html(fourTotal);
        };
        if (x === 2) {
            for (var i = 0; i < sixRoll; i++) {
                var y = "six";
                var diceToss = diceRoll(1, 6);
                rollDisplay(diceToss, i, y);
                var cell = $("#six-" + i + "-roll").text();
                sixTotal += parseInt(cell);
            };
            $("#six-sub").html(sixTotal);
        };
        if (x === 3) {
            for (var i = 0; i < eightRoll; i++) {
                var y = "eight";
                var diceToss = diceRoll(1, 8);
                rollDisplay(diceToss, i, y);
                var cell = $("#eight-" + i + "-roll").text();
                eightTotal += parseInt(cell);
            };
            $("#eight-sub").html(eightTotal);
        };
        if (x === 4) {
            for (var i = 0; i < tenRoll; i++) {
                var y = "ten";
                var diceToss = diceRoll(1, 10);
                rollDisplay(diceToss, i, y);
                var cell = $("#ten-" + i + "-roll").text();
                tenTotal += parseInt(cell);
            };
            $("#ten-sub").html(tenTotal);
        };
        if (x === 5) {
            for (var i = 0; i < twelveRoll; i++) {
                var y = "twelve";
                var diceToss = diceRoll(1, 12);
                rollDisplay(diceToss, i, y);
                var cell = $("#twelve-" + i + "-roll").text();
                twelveTotal += parseInt(cell);
            };
            $("#twelve-sub").html(twelveTotal);
        };
        if (x === 6) {
            for (var i = 0; i < twentyRoll; i++) {
                var y = "twenty";
                var diceToss = diceRoll(1, 20);
                rollDisplay(diceToss, i, y);
                var cell = $("#twenty-" + i + "-roll").text();
                twentyTotal += parseInt(cell);
            };
            $("#twenty-sub").html(twentyTotal);
        };
        if (x === 7) {
            for (var i = 0; i < hundredRoll; i++) {
                var y = "hundred";
                var diceToss = diceRoll(1, 100);
                rollDisplay(diceToss, i, y);
                var cell = $("#hundred-" + i + "-roll").text();
                hundredTotal += parseInt(cell);
            };
            $("#hundred-sub").html(hundredTotal);
        };
    };
    var totalSum = twoTotal + fourTotal + sixTotal + eightTotal + tenTotal + twelveTotal + twentyTotal + hundredTotal
    $("#total-results").html(totalSum);
});
function diceRoll(min, max) {
    var diceThrow = Math.floor(Math.random() * max) + min;
    return diceThrow;
};
function rollDisplay(diceToss, i, y) {
    $("#" + y + "-" + i + "-roll").html(diceToss);
};
$("#blue-template").on("click", function() {
    Cookies.set("colorTemplate", "blue", {expires: 365});
    location.reload();
});
$("#green-template").on("click", function() {
    Cookies.set("colorTemplate", "green", {expires: 365});
    location.reload();
});
$("#brown-template").on("click", function() {
    Cookies.set("colorTemplate", "brown", {expires: 365});
    location.reload();
});
$("#orange-template").on("click", function() {
    Cookies.set("colorTemplate", "orange", {expires: 365});
    location.reload();
});
$("#red-template").on("click", function() {
    Cookies.set("colorTemplate", "basic", {expires: 365});
    location.reload();
});
$("#neon-template").on("click", function() {
    Cookies.set("colorTemplate", "neon", {expires: 365});
    location.reload();
});