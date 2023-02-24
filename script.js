const orderList=[
    {
        photo:"Classic_burger.jpg",
        title:"Classic Burger",
        price:200+" Rs"
    },
    {
        photo:"Choclate_milkshake.jpg",
        title:"Choclate Milkshake",
        price:300+" Rs"
    },
    {
        photo:"Classic_Fries.jpg",
        title:"Classic Fries",
        price:205+" Rs"
    },
    {
        photo:"Pancake.jpg",
        title:"Pancakes",
        price:370+" Rs"
    },
    {
        photo:"Ice_cream.jpg",
        title:"Ice Cream",
        price:150+" Rs"
    },
    {
        photo:"Chicken_burger.jpg",
        title:"Chicken Burger",
        price:300+" Rs"
    },
    {
        photo:"Egg_toast.jpg",
        title:"Egg toast",
        price:150+" Rs"
    },
    {
        photo:"Regular_Soda.jpg",
        title:"Regular Soda",
        price:80+ " Rs"
    },
]

function onload(){
    let temp="<div id='newDiv'>"
    for(i=0;i<orderList.length/2;i++){

   temp +=`<img src=${orderList[i].photo} >` 

   temp +="<div id='div2'>"
   temp +="<h4>"+orderList[i].title+"</h4>"
   temp +="<h2>"+orderList[i].price+"</h2>"
   temp +=`<input type='number' id='input${i}'>`
   temp +=`<button id='button${i}' onclick='btnClick${i}()'>`+"+"+"</button>"
   temp +="</div>"

   
    }
    temp+="</div>"
   document.getElementById("products").innerHTML=temp;


    temp="<div id=newDiv2>"

   for(i=4;i<orderList.length;i++){

    temp +=`<img src=${orderList[i].photo} >` 
 
    temp +="<div id='div3'>"
    temp +="<h4>"+orderList[i].title+"</h4>"
    temp +="<h2>"+orderList[i].price+"</h2>"
 
    temp +=`<input type='number' id='input${i}'>`
    temp +=`<button id='button${i}' onclick='btnClick${i}()'>`+"+"+"</button>"
    temp +="</div>"
 
    
     }
     temp+="</div>"
    document.getElementById("products2").innerHTML=temp;

    
}

let create="<ol id='cartol'>"

  let counter =0;
  let total=0;
function btnClick0(){
    let input0=document.getElementById("input0").value;
    let sbc=orderList[0].price.substring(0,3);
    let str = input0+"x "+orderList[0].title+" price:"+(sbc*input0);

    
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input0;
    document.getElementById("items").innerHTML=create;
    document.getElementById("input0").value=" ";
    
    document.getElementById("counter").innerText=counter;
}
function btnClick1(){
    let input1=document.getElementById("input1").value;
    let sbc=orderList[1].price.substring(0,3);
    let str= input1+"x "+orderList[1].title+" price:"+(sbc*input1);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input1;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input1").value=" ";
     document.getElementById("counter").innerText=counter;
}
function btnClick2(){
    let input2=document.getElementById("input2").value;
    let sbc=orderList[2].price.substring(0,3);
    let str= input2+"x "+orderList[2].title+" price:"+(sbc*input2);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input2;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input2").value=" ";
     document.getElementById("counter").innerText=counter;
}
function btnClick3(){
    let input3=document.getElementById("input3").value;
    let sbc=orderList[3].price.substring(0,3);
    let str= input3+"x "+orderList[3].title+" price:"+(sbc*input3);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input3;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input3").value=" ";
     document.getElementById("counter").innerText=counter;
}
function btnClick4(){
    let input4=document.getElementById("input4").value;
    let sbc=orderList[4].price.substring(0,3);
    let str= input4+"x "+orderList[4].title+" price:"+(sbc*input4);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input4;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input4").value=" ";
     document.getElementById("counter").innerText=counter;
}
function btnClick5(){
    let input5=document.getElementById("input5").value;
    let sbc=orderList[5].price.substring(0,3);
    let str= input5+"x "+orderList[5].title+" price:"+(sbc*input5);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input5;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input5").value=" ";
     document.getElementById("counter").innerText=counter;
}
function btnClick6(){
    let input6=document.getElementById("input6").value;
    let sbc=orderList[6].price.substring(0,3);
    let str= input6+"x "+orderList[6].title+" price:"+(sbc*input6);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input6;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input6").value=" ";
     document.getElementById("counter").innerText=counter;
}
function btnClick7(){
    let input7=document.getElementById("input7").value;
    let sbc=orderList[7].price.substring(0,3);
    let str= input7+"x "+orderList[7].title+" price:"+(sbc*input7);
     create+="<li class='cartli'>"+str+"</li>"
     counter++;
     total +=sbc*input7;
     document.getElementById("items").innerHTML=create;
     document.getElementById("input7").value=" ";
     document.getElementById("counter").innerText=counter;
}



function oncart(){
    document.getElementById("cartItem").style.visibility="Visible";
    document.getElementById("overlay").style.visibility="Visible";
    
    document.getElementById("cartvalue").innerHTML=`Your Cart (${counter} Items)`;

    if(counter>0){
        document.getElementById("amount").style.visibility="Visible";
        document.getElementById("amount1").innerText=`Total amount : ${total} Rs`;
    }
    
    
  }
  
  function onClose(){
      document.getElementById("cartItem").style.visibility="hidden";
      document.getElementById("overlay").style.visibility="hidden";
      document.getElementById("amount").style.visibility="hidden";
      
  }


  function reset(){
    counter=0;
    total=0;
    create="<ol id='cartol'>";
    document.getElementById("items").innerHTML=" ";
    
    document.getElementById("amount").style.visibility="hidden";
    document.getElementById("cartvalue").innerHTML=`Your Cart (${0} Items)`
    document.getElementById("counter").innerText=0;
    
    
    
  }
  
