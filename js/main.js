var newdate=new Date();
// console.log(newdate);

var dates=document.getElementById("dates");
// console.log(dates);
var mohths=document.querySelector("#mohths");
// console.log(mohths);
var years=document.querySelector("#years");
// console.log(years);
//var noofday=["sunday","monday","tuesday","wednesday","thusday","friday","saturday"];
// console.log(dates);

function printyear(){
    var dates=document.querySelector("#dates");
    var newdate=new Date();
    var dat=newdate.getDate();
    var mont=newdate.getMonth()+1;
    var yea=newdate.getFullYear();
    //  console.log(dat);
    //  console.log(dates);
    if(dat<=9){
        dates.innerHTML="0"+dat;
        console.log(dates);
    }
    else{
        dates.innerHTML=dat;
        console.log(dates);
    }
     if(mont<=9){
        mohths.innerHTML="0"+mont;
     }
     else{
        mohths.innerHTML=mont;
     }
     
     years.innerHTML=yea;
}
 printyear();



                    /*time*/

var onehover=document.getElementById("onehover"); 
var onemeints=document.getElementById("onemeints");
var onescound=document.getElementById("onescound");                  


        /*AM/PM*/
        var oneam=document.getElementById("oneam");
        console.log(oneam);
        var onepm=document.getElementById("onepm");
        console.log(onepm);
 
        
var hover=0;
var meinest=0;
var scound=0;
goodtime=setInterval(timer,0);
function timer(){
    var newdate=new Date();
    var scound=newdate.getSeconds();
    // console.log(scound);

    var meinest=newdate.getMinutes();
    // console.log(meinest);

    var hover=newdate.getHours();
    // console.log(hover);
    
        if(scound<=9){
            onescound.innerHTML="0"+scound; 
            scound++;
        }
        else{
            onescound.innerHTML= scound; 
        }
        if(meinest<=9){
            onemeints.innerHTML="0"+meinest;
        }
        else{
            onemeints.innerHTML=meinest;
        }
        if(hover<=9){
            onehover.innerHTML="0"+hover;
        }
        else{
            onehover.innerHTML=hover;
        }

}
timer()

// let namme=hover>=12?"PM":"AM";
// console.log(namme);       

function peintampm(){
    var date=new Date();
    // var oneam=document.getElementById("oneam");
    // var onepm=document.getElementById("onepm");

    if(hover>12){
        
        oneam.style.color="white";
        
    }
    else{
    //    onepm.style.text-shadow -"0px 0px 5px rgb(255, 6, 6)";
       onepm.style.color="white";
    }

}
peintampm();



var oneday=document.getElementsByClassName("oneday");
console.log(oneday);

var sunday=document.getElementById("sunday");
var monday=document.getElementById("monday");
var tudaye=document.getElementById("tueday");
console.log(tudaye);
var sweday=document.getElementById("sweday");
var thuday=document.getElementById("thuday");
var friday=document.getElementById("friday");
var satday=document.getElementById("satday");



function peintday(){
    var date=new Date();
    var today=date.getDay();
    console.log(today,"today");
    
    // oneday.style.backgroundColor="red";

    if(today==0){
        sunday.style.color="white";   
    }
    else if(today==1){
        monday.style.color="white";
    }
    else if(today==2){
        tudaye.style.color="white";
        tudaye.style.textShadow=" 0px 0px 5px red,0px 0px 25px red,0px 0px 55px red;";
    }
    else if(today==3){
        sweday.style.color="white";
    }
    else if(today==4){
        thuday.style.color="white";
    }
    else if(today==5){
        friday.style.color="white";
    }
    else if(today==6){
        satday.style.color="white";
    }
}
peintday();         