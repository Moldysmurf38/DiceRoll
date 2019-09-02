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

$("#roll-button").on("click", function () {
    $(".roll-cell").empty();
    $(".sub-roll").empty();
    $("#total-results").empty();
    //var rollTotal = 0;
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
    //Create an array with text for headers and call header array[x] to write dynamic titles?
    for (var x = 0; x < rollVal.length; x++) {
        if (x === 0) {
            for (var i = 0; i < twoRoll; i++) {
                var y = "two";
                var diceToss = diceRoll(1, 2);
                rollDisplay(diceToss, i, y);
            };
            for (var z = 0; z < twoRoll; z++) {
                var cell = $("#two-" + z + "-roll").text()
                twoTotal += parseInt(cell);
            }
            $("#two-sub").html(twoTotal);
            console.log(twoTotal)
        };
        if (x === 1) {
            for (var i = 0; i < fourRoll; i++) {
                var y = "four";
                var diceToss = diceRoll(1, 4);
                rollDisplay(diceToss, i, y);
            };
            $("#four-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    fourTotal += parseInt(cell);
                });
                $("#four-sub").html(fourTotal);
            });
        };
        if (x === 2) {
            for (var i = 0; i < sixRoll; i++) {
                var y = "six";
                var diceToss = diceRoll(1, 6);
                rollDisplay(diceToss, i, y);
            };
            $("#six-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    sixTotal += parseInt(cell);
                });
                $("#six-sub").html(sixTotal);
            });
        };
        if (x === 3) {
            for (var i = 0; i < eightRoll; i++) {
                var y = "eight";
                var diceToss = diceRoll(1, 8);
                rollDisplay(diceToss, i, y);
            };
            $("#eight-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    eightTotal += parseInt(cell);
                });
                $("#eight-sub").html(eightTotal);
            });
        };
        if (x === 4) {
            for (var i = 0; i < tenRoll; i++) {
                var y = "ten";
                var diceToss = diceRoll(1, 10);
                rollDisplay(diceToss, i, y);
            };
            $("#ten-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    tenTotal += parseInt(cell);
                });
                $("#ten-sub").html(tenTotal);
            });
        };
        if (x === 5) {
            for (var i = 0; i < twelveRoll; i++) {
                var y = "twelve";
                var diceToss = diceRoll(1, 12);
                rollDisplay(diceToss, i, y);
            };
            $("#twelve-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    twelveTotal += parseInt(cell);
                });
                $("#twelve-sub").html(twelveTotal);
            });
        };
        if (x === 6) {
            for (var i = 0; i < twentyRoll; i++) {
                var y = "twenty";
                var diceToss = diceRoll(1, 20);
                rollDisplay(diceToss, i, y);
            };
            $("#twenty-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    twentyTotal += parseInt(cell);
                });
                $("#twenty-sub").html(twentyTotal);
            });
        };
        if (x === 7) {
            for (var i = 0; i < hundredRoll; i++) {
                var y = "hundred";
                var diceToss = diceRoll(1, 100);
                rollDisplay(diceToss, i, y);
            };
            $("#hundred-row").each(function () {
                $(this).find('td').each(function () {
                    var cell = $(this).html();
                    // nanValue(cell)
                    hundredTotal += parseInt(cell);
                });
                $("#hundred-sub").html(hundredTotal);
            });
        };
    };
    //rollTotal(x)
});


function diceRoll(min, max) {
    var diceThrow = Math.floor(Math.random() * max) + min;
    return diceThrow;
};

function rollDisplay(diceToss, i, y) {
    $("#" + y + "-" + i + "-roll").html(diceToss);
};



// function rollTotal() {
//     debugger;
//     var totalRow = $("<tr>");
//     totalRow.attr("class", "total-head");
//     $("#total-head").append(totalRow);
//     var totalText = $("<td>");
//     totalText.attr("class", "total-text");
//     $(".total-head").append(totalText);
//     $(".total-text").html("Total Ammount:");
//     var totalSum = $(".0sub-result").val() + $(".1sub-result").val() + $(".2sub-result").val() + 
//     $(".3sub-result").val() + $(".4sub-result").val() + $(".5sub-result").val() + $(".6sub-result").val() + 
//     $(".7sub-result").val();
//     var diceTotal = $("<td>");
//     diceTotal.attr("class", "total-number");
//     $("#total-results").append(diceTotal);
//     $(".total-number").html(totalSum);
// };

function nanValue(cell) {
    if (cell == "NaN") {
        return 0.00;
    } else {
        return cell;
    }
}
