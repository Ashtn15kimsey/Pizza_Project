function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].chcked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
    } else if  (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size texr1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    GetTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectTopping = [];
    var toppingArray = docuennet.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectTopping.length;
    if (toppingTotal > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping item: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showtext").innerHTML=text1;
    document.getElementById("totalprice").innerHTML="<h3>Total: <strong>$"+
         runningTotal+".00"+"</strong></h3>";
};




