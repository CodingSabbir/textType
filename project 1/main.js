// var h1=document.querySelector('h1');
// var text='I Love My Bangladesh';

// var count=0;

// setInterval(fun,100);
// function fun(){
//     h1.innerHTML=text.slice(0,count++);
//   if(count>text.length){
//     count=0;
//   }
// }



var title=document.querySelector("h1");
var text='I Love My Bangladesh';

var index=0;

var run=setInterval(time,100);
function time(){
    title.textContent=text.slice(0,index++)
    if(index>text.length){
        index=0; 
    }
}


// function stop(){
//     clearInterval(run)
// }
// stop();



