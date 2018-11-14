//set light green box vaule
var numberComputerPicked = Math.floor((Math.random() * 102) + 19);

$(".lightgreenbox").html(numberComputerPicked);


//set crystal values
var crystalNumber1 = Math.floor((Math.random() * 12) + 1);
var crystalNumber2 = Math.floor((Math.random() * 12) + 1);
var crystalNumber3 = Math.floor((Math.random() * 12) + 1);
var crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);



//buttons value appear in dark green box and add
$("#c1").onclick = function() { 

    //$("#c1").append("#secondgreenbox")

    console.log($("#c1").valueAsNumber =crystalNumber1);
 };



