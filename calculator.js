
function display(value){
    console.log(value);
   document.getElementById("screen").value += value;
}

function result(){
  var result= document.getElementById("screen").value;
  if(result.startsWith('-')){
        result=result.substring(1);
        console.log(result);
        if(result.includes('+')){
          add_minus();
        }
        if(result.includes('-')){
          sub_minus();
        }
        if(result.includes('x')){
            mul_minus();
        }
        if(result.includes('/')){
          div_minus();
        }
  }else{
    if(result.includes('+')){
      add();
    }
    if(result.includes('-')){
      sub();
    }
    if(result.includes('x')){
        mul();
    }
    if(result.includes('/')){
      div();
    }
  }
}

function add(){
  let resultarr=document.getElementById("screen").value.split("+");
  let a=Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a+b);
  document.getElementById("screen").value=(a+b);
}
function sub(){
  let resultarr=document.getElementById("screen").value.split("-");
  let a=Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a-b);
  document.getElementById("screen").value=(a-b);
}
function mul(){
  let resultarr=document.getElementById("screen").value.split("x");
  let a=Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a*b);
  document.getElementById("screen").value=(a*b);
}
function div(){
  let resultarr=document.getElementById("screen").value.split("/");
  let a=Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a/b);
  document.getElementById("screen").value=(a/b);
}

function add_minus(){
  let sub=document.getElementById("screen").value.substring(1);
  let resultarr=sub.split("+");
  let a=-Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a+b);
  document.getElementById("screen").value=(a+b);
}
function sub_minus(){
  let sub=document.getElementById("screen").value.substring(1);
  let resultarr=sub.split("-");
  let a=-Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a-b);
  document.getElementById("screen").value=(a-b);
}
function mul_minus(){
  let sub=document.getElementById("screen").value.substring(1);
  let resultarr=sub.split("x");
  let a=-Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a*b);
  document.getElementById("screen").value=(a*b);
}
function div_minus(){
  let sub=document.getElementById("screen").value.substring(1);
  let resultarr=sub.split("/");
  let a=-Number(resultarr[0]);
  let b=Number(resultarr[1]);
  console.log(a/b);
  document.getElementById("screen").value=(a/b);
}


function remove(){
  let value=document.getElementById("screen").value;
  console.log(value);
  document.getElementById("screen").value="";
}