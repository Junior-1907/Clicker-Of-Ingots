//ingots
var ingotDisplay = document.getElementById('ingot-display');
var ingotCounter = document.getElementById('makeButton');
var ingotCounter = 0;

//money
var moneyDisplay = document.getElementById('money-display');
var moneyCounter = document.getElementById('sellButton')
var moneyCounter = 0;
 

//upgrades
var clickPowerDisplay = document.getElementById('click-power-display');
var clickPowerQtd = 1;
var clickPower = 75;

var cooperFurnaceDisplay = document.getElementById('cooper-furnace-display');
var cooperFurnaceValue = 350;
var cooperFurnaceQtd = 0;

var ironFurnaceDisplay = document.getElementById('iron-furnace-display');
var ironFurnaceValue = 3000;
var ironFurnaceQtd = 0;

var autoSeller = document.getElementById('auto-seller-display');
var autoSellerValue = 5000;
var sellertrue = false;

var goldFurnaceDisplay = document.getElementById('gold-furnace-display');
var goldFurnaceValue = 50000;
var goldFurnaceQtd = 0;

var click = 1; 

contagem(1);

function atualizaCounter(){
    ingotDisplay.innerHTML = ingotCounter;
    moneyDisplay.innerHTML = moneyCounter;
}

function clickIngot(){
    ingotCounter += click;
    atualizaCounter();
}

function clickMoney(){
    moneyCounter += ingotCounter;
    ingotCounter = 0;
    atualizaCounter();
}

function clickPowerAdd(){
    if(moneyCounter >= clickPower){
        click += 1;
        clickPowerQtd += 1;
        moneyCounter = moneyCounter - clickPower;
        clickPower = clickPower * 2 ;
        if(clickPowerQtd >= 3){
            clickPower = clickPower * 3;
        }
        clickPower = Math.round(clickPower);
        clickPowerDisplay.innerHTML = clickPower + ' (' + clickPowerQtd + ')';
        atualizaCounter();
    }
}

function contagem(tempo){
    intervalo = setInterval(function(){
        var rendimentoCooperFurnace = cooperFurnaceQtd * 5;
        var rendimentoIronFurnace = ironFurnaceQtd * 65;
        var rendimentoGoldFurnace = goldFurnaceQtd * 1250;
        ingotCounter += rendimentoCooperFurnace;
        ingotCounter += rendimentoIronFurnace;
        ingotCounter += rendimentoGoldFurnace;
        if(sellertrue == true){
            moneyCounter += ingotCounter;
            ingotCounter = 0;
        }
        atualizaCounter();
    }, tempo * 1000);
    
}
function autoSelling(){
    if(moneyCounter >= autoSellerValue){
        if(sellertrue === true){
            alert("Você já tem esse upgrade");
            return;
        }
        moneyCounter = moneyCounter - autoSellerValue;
        sellertrue = true;
        autoSeller.innerHTML = "MAXED OUT (1)"
        
    }
}

function cooperFurnaceAdd(){
    if(moneyCounter >= cooperFurnaceValue){
        moneyCounter = moneyCounter - cooperFurnaceValue;
        cooperFurnaceValue = cooperFurnaceValue * 1.3;
        cooperFurnaceValue = Math.round(cooperFurnaceValue);
        cooperFurnaceQtd ++;
        cooperFurnaceDisplay.innerHTML = cooperFurnaceValue + ' (' + cooperFurnaceQtd + ')';
        atualizaCounter();
    } 
}
function ironFurnaceAdd(){
    if(moneyCounter >= ironFurnaceValue){
        moneyCounter = moneyCounter - ironFurnaceValue;
        ironFurnaceValue = ironFurnaceValue * 1.3;
        ironFurnaceValue = Math.round(ironFurnaceValue);
        ironFurnaceQtd ++;
        ironFurnaceDisplay.innerHTML = ironFurnaceValue + ' (' + ironFurnaceQtd + ')';
        atualizaCounter();
    } 
}

function goldFurnaceAdd(){
    if(moneyCounter >= goldFurnaceValue){
        moneyCounter = moneyCounter - goldFurnaceValue;
        goldFurnaceValue = goldFurnaceValue * 1.3;
        goldFurnaceValue = Math.round(goldFurnaceValue);
        goldFurnaceQtd ++;
        goldFurnaceDisplay.innerHTML = goldFurnaceValue + ' (' + goldFurnaceQtd + ')';
    } 
}

// se está lendo deixe seu joinha

