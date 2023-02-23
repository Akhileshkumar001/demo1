var uid = new ShortUniqueId();
const modlCont=document.querySelector(".model-cont")
const addbtn=document.querySelector(".add-btn")
const allPriorityColor=document.querySelectorAll(".priority-color");
let colors = ["lightpink" , "lightgreen" , "lightblue" , "black"];
let modalapriorityColor=colors[colors.length-1];
let textArea=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-containt");
let ticketArr=[];
let toolticketColor=document.querySelectorAll(".color");
let removebtn=document.querySelector(".remove-btn");
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";


//to open close modal container
let isModalPresent= false;

addbtn.addEventListener('click',function(){
   if(!isModalPresent){  
    modlCont.style.display="flex"; // modal added on the screen
    }else{
        modlCont.style.display="none";
    }
    isModalPresent=!isModalPresent; //toggling effect
});

// to remove  and add active class from each priority color of modal container
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

// to generate and display a ticket
modlCont.addEventListener("keydown",function (e) {
    let key = e.key;
    if(key == "Shift"){
        console.log(modalapriorityColor);
        console.log(textArea.value);
        createTicket(modalapriorityColor,textArea.value);
        modlCont.style.display = "none";
        isModalPresent = false;
        textArea.value ="";
        allPriorityColor.forEach(function(elmentColor){
            elmentColor.classList.remove("active");
        });
    }
});

//function to create new ticket 
function createTicket(ticketColor , data ,ticketId){
    let id = ticketId || uid();
    let ticketCont=document.createElement("div");   //just like <div></div>
    ticketCont.setAttribute("class" , "ticket-cont");
    ticketCont.innerHTML=`
    <div class="ticket-color ${ticketColor}"></div>     
    <div class="ticket-id"> ${id}</div>
    <div class="ticket-text">${data}</div>
    <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        `;
        mainCont.appendChild(ticketCont);
        handaleRemoval(ticketCont,id);
        handleColor(ticketCont,id);
        handalLock(ticketCont,id);
    if(!ticketId){
        ticketArr.push(
           {
                ticketColor,
                data,
                ticketId:id
            }
        );
        localStorage.setItem("tickets",JSON.stringify(ticketArr)); //,JSON.stringify(ticketArr) it is use for convert object in to string
    }
} 
// get all tickets from local storage   
if(localStorage.getItem("tickets")){
    ticketArr=JSON.parse(localStorage.getItem("tickets"));//JSON.parse(localStorage.getItem("tickets")); IT IS USE FOR convert string into object
    ticketArr.forEach(function(ticketObj){
        createTicket(ticketObj.ticketColor,ticketObj.data,ticketObj.ticketId);
    });
}
//console.log(uid());/
// filter on the besis of ticket color
for(let i=0;i<toolticketColor.length;i++){
    toolticketColor[i].addEventListener("click",function(){
       let curentcolortool=toolticketColor[i].classList[0];

       let filterTicket=ticketArr.filter(function(ticketObj){
        return curentcolortool == ticketObj.ticketColor;
        //if(curentcolortool == ticketObj.ticketColor);
        //return ticketObj ;
       });
       // remove all the tickets
       let allticket=document.querySelectorAll(".ticket-cont");
       for(let i=0;i<allticket.length;i++){
            allticket[i].remove();
       }
       // displa all the tickets
       filterTicket.forEach(function (ticketObj){
        createTicket(
            ticketObj.ticketColor,
            ticketObj.data,
            ticketObj.ticketId
            );
       });
       
    });
    // to display all the tickets of all colors on duble clicking
    toolticketColor[i].addEventListener("dblclick",function(){
        // remove all the  color specific tickets
     allticket=document.querySelectorAll(".ticket-cont");
       for(let i=0;i<allticket.length;i++){
            allticket[i].remove();
       }
       // dispalay all ticket
       ticketArr.forEach(function(ticketObj){
        createTicket(
            ticketObj.ticketColor,
            ticketObj.data,
            ticketObj.ticketId
            );
       });

    });
}
//on clicking removeBtn, make color red and amke color white in clicking again
let removeBtnActive=false;
removebtn.addEventListener("click",function(){
    if(removeBtnActive){
        removebtn.style.color = "white";
    }else{
        removebtn.style.color = "red";
    }
    removeBtnActive=!removeBtnActive;
});
// removes ticket from local storage and UI
function handaleRemoval(ticket,id){
    ticket.addEventListener("click",function(){
        if(!removeBtnActive) return;
         //local storage remove 
        //->get idx of the ticket to be deleted
        let Idx=getTicketIdx(id);
        let deleteTicket=ticketArr.splice(Idx,1);
        let ticketsArr=JSON.stringify(ticketArr);
        //removed from browser storage and set updated arr
        localStorage.setItem("tickets",ticketsArr);
        //frontend remove
        ticket.remove();
    });
}
//returns index of the ticket inside Local Storage's array
function getTicketIdx(id){
    let ticketIDX=ticketArr.findIndex(function(ticketObj){
        return ticketObj.ticketArr==id;
    });
    return ticketIDX;
}
//change priority color of the tickets
function handleColor(ticket,id){
    let ticketcolorStrip=ticket.querySelector(".ticket-color")
    ticketcolorStrip.addEventListener("click",function(){
        let  currTicketColor=ticketcolorStrip.classList[1];
        //["lightpink", "lightgreen", "lightblue", "black"];
        let currTicketColorIdx =colors.indexOf(currTicketColor);
        let newTicketColorIdx=currTicketColorIdx+1;
        newTicketColorIdx=newTicketColorIdx%colors.length;
        let newTicketColor=colors[newTicketColorIdx];
        ticketcolorStrip.classList.remove(currTicketColor);
        ticketcolorStrip.classList.add(newTicketColor);
        //local storage update 
        let ticketIdx=getTicketIdx(id);
        ticketArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem("tickets",JASON.stringify(ticketArr));
    });
}

// lock nad unlock to make content editable true or false
function handalLock(ticket,id){
     let ticketLOCKELE=ticket.querySelector(".ticket-lock")
        let ticketlock=ticketLOCKELE.children[0];
        let ticketTaskARea=ticket.querySelector(".ticket-text");

        // toggle of icons and containeditable propery
        ticketlock.addEventListener("click",function(){
            let ticketIDX=getTicketIdx(id);
            if(ticketlock.classList.contains(lockClass)){
                ticketlock.classList.remove(lockClass);
                ticketlock.classList.add(unlockClass);
                ticketTaskARea.setAttribute("contenteditable","true");
            }
            else{
                ticketlock.classList.remove(unlockClass);
                ticketlock.classList.add(lockClass);
                ticketTaskARea.setAttribute("contenteditable","flase");

            }
            ticketArr[ticketIDX].data=ticketTaskARea.innerText;
            localStorage.setItem("ticketItem",JASON.stringify(ticketArr));
        });
}
