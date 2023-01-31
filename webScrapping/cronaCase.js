const request = require('request');
const cheerio = require('cheerio');
console.log("before");
request('https://www.worldometers.info/coronavirus',cb);
 
console.log("After");
function cb(error, response, html) {
    if(error){
       console.error('error:', error); // Print the error if one occurred
    }else{
       handlehtml(html); // Print the response status code if a response was 
    }
}
function handlehtml(html){
    let selTool = cheerio.load(html);
   // let h1s = selTool("h1");
   let counterArr = selTool("#maincounter-wrap span");
    //let counterArr = console.log(h1s.length);
    //for(let i=0;i<counterArr.length;i++){
        //let data = selTool(counterArr[i]).text(); 
      //  console.log("data ",data);
    //}
    let total = selTool(counterArr[0]).text(); 
    let deaths = selTool(counterArr[1]).text(); 
    let recovery = selTool(counterArr[2]).text(); 
    console.log("total cases -> "+total);
    console.log("total deaths-> "+deaths);
    console.log("total recovery-> "+recovery);
}