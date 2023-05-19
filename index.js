var DATEDISP = document.getElementById('monty');
const mowth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const das = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var daydat =  document.getElementById('dat');

var dog = document.getElementById('dat');

var CURY = new Date().getFullYear();

var SUR = new Date().getMonth();

 function course(val){
    if( SUR === 0 && val === -1){
        CURY +=val;
        SUR = 12
    }
    if( CURY ===11 && val === 1){
        CURY += val;
        SUR = -1;
    }

    SUR += val;

    CURDS();
 }
 CURDS();


 function CURDS(){
    DATEDISP.innerHTML = `${mowth[SUR]}  ${CURY}`;
    dog.innerHTML =''

    console.log(DATEDISP)

     let FirstDay = new Date(`${mowth[SUR]},${CURY}`).getDay()
     let LastDay = new Date(CURY, SUR+1, 0).getDay()
     let monthlength = new Date(CURY, SUR+1, 0).getDate()

     let lastmonthlength = new Date(CURY, SUR, 0).getDate();
     let nextmonthlength = new Date(CURY, SUR+2, 0).getDate();

     console.log(nextmonthlength)

     ///start
     var daysStart =[];
     for(let i = 0;i<FirstDay;i++){
         daysStart.push('<div class="grey">'+(lastmonthlength-i)+'</div>')
     }
     
     daysStart.reverse().forEach(e=>{
        dog.innerHTML += e
     })
     //// middle
     for(let i = 1;i<monthlength+1;i++){
        dog.innerHTML += '<div>'+(i)+'</div>'
     }
     //// end
      daysStart =[];
     for(let i = dog.childNodes.length;i<42;i++){
        daysStart.push('<div class="grey">'+(42 - i)+'</div>')
     }
   
     daysStart.reverse().forEach(e=>{
        dog.innerHTML += e
     })

}
