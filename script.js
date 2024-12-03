// Even number  by loop
function printEvenNumber()
{
    
for(let num=1; num<=100; num++){
      
    if(num%2==0){
        console.log(num);
        var even= document.getElementById("demo");
      even.innerHTML=num;
    }
    
}

}
printEvenNumber();

// odd number
function printOddNumber(){
    for(let i=1; i<=100;++i){
        if(i%2!==0){
            console.log(i);
            document.getElementById("demo").innerHTML=i;
        }
    }
}
printOddNumber();
// 1 to 10 

let a=1;
for(a=1; a<=10;a++){
  text=`number=${a}`;
  console.log(text);
  document.getElementById("demo").innerHTML=text;
}
