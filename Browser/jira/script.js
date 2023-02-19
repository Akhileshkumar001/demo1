const modlCont=document.querySelector(".model-cont")
const addbtn=document.querySelector(".add-btn")
const allPriorityColor=document.querySelectorAll(".priority-color");
let colors = ["lightpink" , "lightgreen" , "lightblue" , "black"];
let modalapriorityColor=colors[colors.length-1];
let textArea=document.querySelector(".textarea-cont");

let isModalPresent= false;

addbtn.addEventListener('click',function(){
   if(!isModalPresent){  
    modlCont.style.display="flex"; // modal added on the screen
    }else{
        modlCont.style.display="none";
    }
    isModalPresent=!isModalPresent; //toggling effect
});
  allPriorityColor.forEach(function(elmentColor){
    elmentColor.addEventListener("click",function(){
        allPriorityColor.forEach(function(priorityColorElm){
            priorityColorElm.classList.remove("active");
        })
        elmentColor.classList.add("active");
        modalapriorityColor=elmentColor.classList[0];
        //console.log(modalapriorityColor);
        //console.log(textArea.value);
    });    
});

modlCont.addEventListener("keydown",function (e) {
    let key = e.key;
    if(key == "Shift"){
        console.log(modalapriorityColor);
        console.log(textArea.value);
        createTicket(modalapriorityColor,textArea.value);
        modlCont.style.display="none";
        isModalPresent = false;
        textArea.value ="";
        allPriorityColor.forEach(function(elmentColor){
            elmentColor.classList.remove("active");
        })
    }
});

function createTicket(ticketColor , data ,ticketId){
    let ticketCont=document.createAttribute("div");   //just like <div></div>
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id ${id}"></div>
        <div class="ticket-text ${data}"></div>`
}