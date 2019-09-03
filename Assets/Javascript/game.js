var defaultCookie = Cookies.get("colorTemplate");

console.log(defaultCookie);

if (defaultCookie === NaN || undefined || null) {
    Cookies.set("colorTemplate", "basic", {expires: 2});
};

var cookieTemplate = Cookies.get("colorTemplate");

if (cookieTemplate === "blue") {
    console.log("the template is blue");
};
if (cookieTemplate === "green") {
    console.log("the template is green");
};
if (cookieTemplate === "brown") {
    console.log("the template is brown");
};
if (cookieTemplate === "orange") {
    console.log("the template is orange");
};
if (cookieTemplate === "basic") {
    console.log("the template is red");
};
if (cookieTemplate === "neon") {
    console.log("the template is neon");
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
    Cookies.set("colorTemplate", "blue", {expires: 2});
    $("h1").removeClass("neon-text");
    $("h5").removeClass("neon-text");
    $("header").removeClass("neon-header");
    $(".roll-button").removeClass("neon-button");    
    $("body").css({"background": "url(./Assets/Images/deep_void.jpg)"});
    $(".bg-custom").css({"background-color": "rgb(30,144,255)"});
    $(".bg-custom").css({"background-image": "none"});
    $("h1").css({"color": "rgb(30,144,255)"});
    $(".roll-button").css({"color": "rgb(30,144,255)"});
    $(".roll-button").css({"border":"2px solid rgb(30,144,255)"});
    $("h5").css({"color": "rgb(30,144,255)"});
});

$("#green-template").on("click", function() {
    Cookies.set("colorTemplate", "green", {expires: 2});
    $("h1").removeClass("neon-text");
    $("h5").removeClass("neon-text");
    $("header").removeClass("neon-header");
    $(".roll-button").removeClass("neon-button");
    $("body").css({"background": "url(./Assets/Images/emerald_sea.jpg)"});
    $(".bg-custom").css({"background-color": "rgb(0,250,154)"});
    $(".bg-custom").css({"background-image": "none"});
    $("h1").css({"color": "rgb(0,250,154)"});
    $(".roll-button").css({"color": "rgb(0,250,154)"});
    $(".roll-button").css({"border":"2px solid rgb(0,250,154)"});
    $("h5").css({"color": "rgb(0,250,154)"});
});

$("#brown-template").on("click", function() {
    Cookies.set("colorTemplate", "brown", {expires: 2});
    $("h1").removeClass("neon-text");
    $("h5").removeClass("neon-text");
    $("header").removeClass("neon-header");
    $(".roll-button").removeClass("neon-button");
    $("body").css({"background": "url(./Assets/Images/crystal_lake.jpg)"});
    $(".bg-custom").css({"background-color": "rgb(139, 69, 19)"});
    $(".bg-custom").css({"background-image": "none"});
    $("h1").css({"color": "rgb(139, 69, 19)"});
    $(".roll-button").css({"color": "rgb(139, 69, 19)"});
    $(".roll-button").css({"border":"2px solid rgb(139, 69, 19)"});
    $("h5").css({"color": "rgb(139, 69, 19)"});
});

$("#orange-template").on("click", function() {
    Cookies.set("colorTemplate", "orange", {expires: 2});
    $("h1").removeClass("neon-text");
    $("h5").removeClass("neon-text");
    $("header").removeClass("neon-header");
    $(".roll-button").removeClass("neon-button");
    $("body").css({"background": "url(./Assets/Images/morning_dew.jpg)"});
    $(".bg-custom").css({"background-color": "rgb(204,85,0)"});
    $(".bg-custom").css({"background-image": "none"});
    $("h1").css({"color": "rgb(204,85,0)"});
    $(".roll-button").css({"color": "rgb(204,85,0)"});
    $(".roll-button").css({"border":"2px solid rgb(204,85,0)"});
    $("h5").css({"color": "rgb(204,85,0)"});
});

$("#red-template").on("click", function() {
    Cookies.set("colorTemplate", "basic", {expires: 2});
    $("h1").removeClass("neon-text");
    $("h5").removeClass("neon-text");
    $("header").removeClass("neon-header");
    $(".roll-button").removeClass("neon-button");
    $("body").css({"background": "url(./Assets/Images/crimson_tide.jpg)"});
    $(".bg-custom").css({"background-color": "rgb(255, 0, 0)"});
    $(".bg-custom").css({"background-image": "none"});
    $("h1").css({"color": "rgb(255, 0, 0)"});
    $(".roll-button").css({"color": "rgb(255, 0, 0)"});
    $(".roll-button").css({"border":"2px solid rgb(255, 0, 0)"});
    $("h5").css({"color": "rgb(255, 0, 0)"});
});

$("#neon-template").on("click", function() {
    Cookies.set("colorTemplate", "neon", {expires: 2});
    $("body").css({"background": "url(./Assets/Images/neon_wall.jpg)"});
    $(".bg-custom").css({"background-image": "linear-gradient(to right, rgb(0,255,255), rgb(128,0,128)"});
    $("h1").addClass("neon-text");
    $("h5").addClass("neon-text");
    $(".roll-button").addClass("neon-button");
    $(".roll-button").css({"border":"1px solid white"})
    $("header").addClass("neon-header");
});
