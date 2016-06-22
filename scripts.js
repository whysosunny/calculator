function Operation() {
    this.first = 0;
    this.second = 0;
    this.currentOperation = "";
    this.result = 0;
}

Operation.prototype.setFirst = function(num) {
    this.first = num;
};

Operation.prototype.setSecond = function(num) {
    this.second = num;
};

Operation.prototype.setOperator = function(operator) {
    this.currentOperator = operator;
};


Operation.prototype.calculate = function() {
    switch(this.currentOperation) {
        case "plus":
            this.result = this.first + this.second;
            return this.result;
        case "minus":
            this.result = this.first - this.second;
            return this.result;
        case "times":
            this.result = this.first * this.second;
            return this.result;
        case "divide":
            this.result = this.first / this.second;
            return this.result;
    }
};

var resultBox = {
    screen : "",
    updateScreen : function(val) {
        if(val || val === 0)
            this.screen += val;
        $("td.output-box").text(resultBox.screen);

    },
    clearScreen: function() {
        this.screen = "";
        this.updateScreen();
    }

};



var calculation = new Operation();
$("td").click(function() {
    switch(this.className) {
        case "number":
            resultBox.updateScreen(Number(this.innerText));
            break;
        case "clear":
            resultBox.clearScreen();
            break;
        case "plus":
            var symbol = this.innerText;
            $("td.operation").text(symbol);
            calculation.first =  Number(resultBox.screen);
            calculation.currentOperation = "plus";
            resultBox.screen = "";
            break;
        case "minus":
            calculation.first = Number(resultBox.screen);
            calculation.currentOperation = "minus";
            resultBox.screen = "";
            break;
        case "times":
            calculation.first = Number(resultBox.screen);
            calculation.currentOperation = "times";
            resultBox.screen = "";
            break;
        case "divide":
            calculation.first = Number(resultBox.screen);
            calculation.currentOperation = "divide";
            resultBox.screen = "";
            break;
        case "point":
            console.log(resultBox.screen);
            if(resultBox.screen.length === 0) {
                resultBox.updateScreen("0.");
            } else {
                resultBox.updateScreen(".");
            }
            break;
        case "result":
            calculation.second = Number(resultBox.screen);
            calculation.calculate();
            resultBox.clearScreen();
            resultBox.updateScreen(calculation.result);
            break;

    }
});





