let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request=require("request");
const cheerio=require("cheerio");
const scoredObj=require("./scored")
request(url,cb);
function cb(err,res,body){
    if(err){
        console.error("error",err)
    }else{
        handleHtml(body);
    }
}
function handleHtml(html){
    let selecTool=cheerio.load(html);
   // console.log(selecTool.html());
    let anchorElem=selecTool('a[data-hover="view all Results"]');
   // console.log(anchorElem);
    let relativeLink="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"
    let fullLink="https://www.espncricinfo.com/"+relativeLink;
    console.log(fullLink);
    scoredObj.getAllMatches(fullLink);
}
 
//href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"
//fulllik='https:"//www.espncricinfo.com/'