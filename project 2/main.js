var text=['I Love My Bangladesh','Allah Mohan','software Enginnerimg','Web Developer','Thanks'];
var count=0;
var index=0;
var currentText=0;
var letter=0;

setInterval(type,200);
function type(){
    currentText=text[count];
    letter= currentText.slice(0,index++); 
    // console.log(letter)
    var h1=document.querySelector('h1').innerHTML=letter;
    if(letter.length==currentText.length){
        count++;
        index=0;
    }
    if(count==text.length){
        count=0;
    }
}
    
