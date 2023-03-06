let video=document.querySelector("video");
let capturebtnCont=document.querySelector(".capture-btn-cont");
let cpatureBTN=document.querySelector(".capture-btn");
let transaprenColor="transparent";
let recoreder;
let constraints ={
    video:true,
    audio:true
}
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream)=>{
        video.srcObject=stream;
    });
capturebtnCont.addEventListener("click",() => {
    let canvas=document.createElement("canvas");
    let tool=canvas.getContext("2d");
    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;
    tool.drawImage(video,0,0,canvas.width,canvas.height);
    tool.fillStyle=transaprenColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);
    let imageURl = canvas.toDataURL();

})    