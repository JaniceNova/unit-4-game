//set light green box vaule
var numberComputerPicked = Math.floor((Math.random() * 102) + 19);

$(".lightgreenbox").text(numberComputerPicked);


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
var winsStartAtZero = 0;
var losesStartAtZero = 0;
//buttons value appear in dark green box and add

function Function1() { 

    $("#secondgreenbox").text(zero + crystalNumber1);

    console.log($("#c1").valueAsNumber =crystalNumber1);

    zero = zero + crystalNumber1;

    if(zero === numberComputerPicked) {
        zero = 0;
       $("#winScore").html(winsStartAtZero + 1);
       winsStartAtZero = winsStartAtZero + 1;
       console.log("hello")


       numberComputerPicked = Math.floor((Math.random() * 102) + 19);
        
       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
    }
    if(zero > numberComputerPicked) {
   $("#loseScore").text(losesStartAtZero + 1);
    losesStartAtZero = losesStartAtZero + 1;
    console.log("hello")
    zero = 0;

    numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
    }       
 };
 function Function2() { 
    $("#secondgreenbox").text(zero + crystalNumber2);

    console.log($("#c2").valueAsNumber =crystalNumber2);
    zero = zero + crystalNumber2;
    if(zero === numberComputerPicked) {
        zero = 0;
       $("#winScore").text(winsStartAtZero + 1);
       winsStartAtZero = winsStartAtZero + 1;
       console.log("hello")



       numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
    }
       if(zero > numberComputerPicked) {
        $("#loseScore").text(losesStartAtZero + 1);
         losesStartAtZero = losesStartAtZero + 1;
         console.log("hello")
         zero = 0;


         numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
   }
 };
 function Function3() { 

    $("#secondgreenbox").text(zero + crystalNumber3);

    console.log($("#c3").valueAsNumber =crystalNumber3);
    zero = zero + crystalNumber3;
    if(zero === numberComputerPicked) {
        zero = 0;
       $("#winScore").text(winsStartAtZero + 1);
       winsStartAtZero = winsStartAtZero + 1;
       console.log("hello")

       numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
    }
       if(zero > numberComputerPicked) {
        $("#loseScore").text(losesStartAtZero + 1);
         losesStartAtZero = losesStartAtZero + 1;
         console.log("hello")


         zero = 0;
         numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
   }
 };
 function Function4() { 

    $("#secondgreenbox").text(zero + crystalNumber4);

    console.log($("#c4").valueAsNumber = crystalNumber4);
    zero = zero + crystalNumber4;
    if(zero === numberComputerPicked) {
        zero = 0;
       $("#winScore").html(winsStartAtZero + 1);
       winsStartAtZero = winsStartAtZero + 1;
       console.log("hello")


       numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").html(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);
    }
       if(zero > numberComputerPicked) {
        $("#loseScore").text(losesStartAtZero + 1);
         losesStartAtZero = losesStartAtZero + 1;
         console.log("hello")

         zero = 0;
         numberComputerPicked = Math.floor((Math.random() * 102) + 19);

       $(".lightgreenbox").text(numberComputerPicked);

        crystalNumber1 = Math.floor((Math.random() * 12) + 1);
 crystalNumber2 = Math.floor((Math.random() * 12) + 1);
 crystalNumber3 = Math.floor((Math.random() * 12) + 1);
 crystalNumber4 = Math.floor((Math.random() * 12) + 1);
$("#c1").valueAsNumber =crystalNumber1;
$("#c2").valueAsNumber =crystalNumber2;
$("#c3").valueAsNumber =crystalNumber3;
$("#c4").valueAsNumber =crystalNumber4;
console.log($("#c1").valueAsNumber =crystalNumber1);
console.log($("#c2").valueAsNumber =crystalNumber2);
console.log($("#c3").valueAsNumber =crystalNumber3);
console.log($("#c4").valueAsNumber =crystalNumber4);


       
   }
 };

 
