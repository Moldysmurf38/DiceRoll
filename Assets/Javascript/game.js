$("#roll-button").on("click", function () {
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
        $("#" + x + "-row").remove();
        var diceRow = $("<tr>");
        diceRow.attr("id", x + "-row");
        $("#" + x + "-results").append(diceRow);
        if (x === 0) {
            for (var i = 0; i < twoRoll; i++) {
                var diceToss = diceRoll(1,2)
                rowBuild(diceToss, x)
            };
        }
        if (x === 1) {
            for (var i = 0; i < fourRoll; i++) {
                var diceToss = diceRoll(1,4)
                rowBuild(diceToss, x)
            };
        }
        if (x === 2) {
            for (var i = 0; i < sixRoll; i++) {
                var diceToss = diceRoll(1,6)
                rowBuild(diceToss, x)
            };
        }
        if (x === 3) {
            for (var i = 0; i < eightRoll; i++) {
                var diceToss = diceRoll(1,8)
                rowBuild(diceToss, x)
            };
        }
        if (x === 4) {
            for (var i = 0; i < tenRoll; i++) {
                var diceToss = diceRoll(1,10)
                rowBuild(diceToss, x)
            };
        }
        if (x === 5) {
            for (var i = 0; i < twelveRoll; i++) {
                var diceToss = diceRoll(1,12)
                rowBuild(diceToss, x)
            };
        }
        if (x === 6) {
            for (var i = 0; i < twentyRoll; i++) {
                var diceToss = diceRoll(1,20)
                rowBuild(diceToss, x)
            };
        }
        if (x === 7) {
            for (var i = 0; i < hundredRoll; i++) {
                var diceToss = diceRoll(1,100)
                rowBuild(diceToss, x)
            };
        }
    };
    
});

function diceRoll(min, max) {
    var diceThrow = Math.floor(Math.random() * max) + min;
    return diceThrow;
}

function rowBuild(diceToss, x) {
    var diceResult = $("<td>");
    diceResult.attr("class", x + "-value");
    $("#" + x + "-row").append(diceResult);
    $("." + x + "-value").html(diceToss);
    $("td").removeClass(x + "-value")
}