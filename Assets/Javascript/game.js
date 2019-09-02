$("#roll-button").on("click", function () {
    $(".roll-cell").empty();
    $(".total-head").remove();
    $(".total-number").remove();
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
        $("." + x + "-sub").remove();
        $("#" + x + "-row").remove();
        $("#" + x + "-headrow").remove();
        var diceHeader = $("<tr>");
        diceHeader.attr("id", x + "-headrow");
        $("#" + x + "-head").append(diceHeader);
        var diceRow = $("<tr>");
        diceRow.attr("id", x + "-row");
        $("#" + x + "-results").append(diceRow);
        if (x === 0) {
            for (var i = 0; i < twoRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 2);
                rowBuild(diceToss, x);
            };
            if (twoRoll > 0) {
                subTotal();
                subTotal(x);
            };
        };
        if (x === 1) {
            for (var i = 0; i < fourRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 4);
                rowBuild(diceToss, x);
            };
            if (fourRoll > 0) {
                subTotal(x);
            };
        };
        if (x === 2) {
            for (var i = 0; i < sixRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 6);
                rowBuild(diceToss, x);
            };
            if (sixRoll > 0) {
                subTotal(x);
            };
        };
        if (x === 3) {
            for (var i = 0; i < eightRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 8);
                rowBuild(diceToss, x);
            };
            if (eightRoll > 0) {
                subTotal(x);
            };
        };
        if (x === 4) {
            for (var i = 0; i < tenRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 10);
                rowBuild(diceToss, x);
            };
            if (tenRoll > 0) {
                subTotal(x);
            };
        };
        if (x === 5) {
            for (var i = 0; i < twelveRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 12);
                rowBuild(diceToss, x);
            };
            if (twelveRoll > 0) {
                subTotal(x);
            };
        };
        if (x === 6) {
            for (var i = 0; i < twentyRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 20);
                rowBuild(diceToss, x);
            };
            if (twentyRoll > 0) {
                subTotal(x);
            };
        };
        if (x === 7) {
            for (var i = 0; i < hundredRoll; i++) {
                //tableHead(i, x);
                var diceToss = diceRoll(1, 100);
                rowBuild(diceToss, x);
            };
            if (hundredRoll > 0) {
                subTotal(x);
            };
        };
    };
    rollTotal(x)
});

// function tableHead(i, x) {
//     var diceHead = $("<td>");
//     diceHead.attr("class", x + "-dice");
//     $("#" + x + "-headrow").append(diceHead);
//     $("." + x + "-dice").html("D" + (i+1) + ":");
//     $("td").removeClass(x + "-dice");
// };

function diceRoll(min, max) {
    var diceThrow = Math.floor(Math.random() * max) + min;
    return diceThrow;
};

function rowBuild(diceToss, x) {
    var diceResult = $("<td>");
    diceResult.attr("class", x + "-value");
    $("#" + x + "-row").append(diceResult);
    $("." + x + "-value").html(diceToss);
    $("td").removeClass(x + "-value");
};

function subTotal(x) {
    var subRow = $("<tr>");
    subRow.attr("class", x + "-sub");
    $("#" + x + "-results").append(subRow);
    var subText = $("<td>");
    subText.attr("class", x + "sub-text");
    $("." + x + "-sub").append(subText);
    $("." + x + "sub-text").html("Subtotal:");

    $("#" + x + "-row").each(function () {
        var sum = 0;
        $(this).find('td').each(function () {
            var cell = $(this).html();
            // nanValue(cell)
            sum += parseInt(cell);
        });
        
        var subTotal = $("<td>");
        subTotal.attr("class", x + "sub-result");
        $("." + x + "-sub").append(subTotal);
        $("." + x + "sub-result").html(sum);
    });
};

function rollTotal() {
    debugger;
    var totalRow = $("<tr>");
    totalRow.attr("class", "total-head");
    $("#total-head").append(totalRow);
    var totalText = $("<td>");
    totalText.attr("class", "total-text");
    $(".total-head").append(totalText);
    $(".total-text").html("Total Ammount:");
    var totalSum = $(".0sub-result").val() + $(".1sub-result").val() + $(".2sub-result").val() + 
    $(".3sub-result").val() + $(".4sub-result").val() + $(".5sub-result").val() + $(".6sub-result").val() + 
    $(".7sub-result").val();
    var diceTotal = $("<td>");
    diceTotal.attr("class", "total-number");
    $("#total-results").append(diceTotal);
    $(".total-number").html(totalSum);
};

function nanValue(cell) {
    if(cell=="NaN") {
        return 0.00;
    } else {
        return cell;
    }
}
