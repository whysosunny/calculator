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

Operation.prototype.clearValues = function() {
    this.first = 0;
    this.second = 0;
    this.currentOperation = "";
    this.result = 0;
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
    var that = this;
    var opDisplay = $("td.operation-display");
    switch(this.className) {
        case "number":
            resultBox.updateScreen(Number(this.innerText));
            break;
        case "clear":
            resultBox.clearScreen();
            opDisplay.text("");
            break;
        case "operation":
            if(resultBox.screen !== "") {
                calculation.first = Number(resultBox.screen);
                console.log(calculation.first);
                calculation.currentOperation = this.getAttribute("id") ;
                resultBox.screen = "";
                opDisplay.text(that.innerText);
            }
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
            if(calculation.first) {
                calculation.second = Number(resultBox.screen);
                calculation.calculate();
                resultBox.clearScreen();
                resultBox.updateScreen(calculation.result);
                opDisplay.text("");
                calculation.clearValues();
            }

            break;
    }
});





