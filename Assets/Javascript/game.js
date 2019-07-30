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
        if (x === 0) {
            for (var i = 0; i < twoRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,2);
                $("#two-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 1) {
            for (var i = 0; i < fourRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,4);
                $("#four-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 2) {
            for (var i = 0; i < sixRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,6);
                $("#six-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 3) {
            for (var i = 0; i < eightRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,8);
                $("#eight-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 4) {
            for (var i = 0; i < tenRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,10);
                $("#ten-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 5) {
            for (var i = 0; i < twelveRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,12);
                $("#twelve-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 6) {
            for (var i = 0; i < twentyRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,20);
                $("#twenty-" + i + "-roll").html(diceToss);
            };
        };
        if (x === 7) {
            for (var i = 0; i < hundredRoll; i++) {
                $("#two-" + i + "-roll").html("");
                var diceToss = diceRoll(1,100);
                $("#hundred-" + i + "-roll").html(diceToss);
            };
        };
    };
});

function diceRoll(min, max) {
    var diceThrow = Math.floor(Math.random() * max) + min;
    return diceThrow;
};