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

var zero = 0;

//buttons value appear in dark green box and add
function Function1() { 

    $("#secondgreenbox").html(zero + crystalNumber1);

    console.log($("#c1").valueAsNumber =crystalNumber1);

    zero = zero + crystalNumber1;
 };
 function Function2() { 
    $("#secondgreenbox").html(zero + crystalNumber2);

    console.log($("#c2").valueAsNumber =crystalNumber2);
    zero = zero + crystalNumber2;
 };
 function Function3() { 

    $("#secondgreenbox").html(zero + crystalNumber3);

    console.log($("#c3").valueAsNumber =crystalNumber3);
    zero = zero + crystalNumber3;
 };
 function Function4() { 

    $("#secondgreenbox").html(zero + crystalNumber4);

    console.log($("#c4").valueAsNumber =crystalNumber4);
    zero = zero + crystalNumber4;
 };

