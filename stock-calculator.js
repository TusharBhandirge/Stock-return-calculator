
var buyPrice = document.querySelector("#buy-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var outputDiv = document.querySelector("#output");


checkButton.addEventListener("click", function onCheckClicked(){

    clearOutput();

    if(buyPrice.value >0 && stockQuantity.value > 0 && currentPrice.value>0){

        calculateReturn(buyPrice.value, stockQuantity.value, currentPrice.value);
    }else{
        setOutput("Please enter values greater than 0 (only numbers are allowed in above fields)");
    }

});



function calculateReturn(buyPrice, quantity, currentPrice){

    var investedMoney = parseFloat(buyPrice) * parseFloat(quantity);
    var returnMoney = parseFloat(currentPrice) * parseFloat(quantity);

    console.log(investedMoney);
    console.log(returnMoney);

    if(returnMoney >= investedMoney){
        var profit = returnMoney - investedMoney;
        var gain = calculatePercentage(profit, investedMoney);

        setOutput("You gained "+gain+"%. Your total profit is ₹"+profit);
    }else{

        var loss = investedMoney - returnMoney;
        var perLoss = calculatePercentage(loss, investedMoney);
        setOutput("You lost "+perLoss+"%. Your total loss is ₹"+loss);
    }

}

function calculatePercentage(amt, principle){

    var per = (amt / principle) *100;
    return per;
}

function clearOutput(){
    outputDiv.innerText = "";
}

function setOutput(msg){
    outputDiv.innerText = msg;
}