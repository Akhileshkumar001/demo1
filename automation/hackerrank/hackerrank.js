//Puppeteer is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol
const puppeteer=require("puppeteer");
let {answer}=require("./code");
let email="";
let password="";
let cTab;
let browseOpenPromisses=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximised"],
});
browseOpenPromisses  //full fill
    .then(function(browser){
     // console.log(browser);
     //An array of all open pages inside the Browser.
     console.log("browser is open");
     let allTabsPromisses=browser.pages()
     return allTabsPromisses;
    })
    .then(function(allTabsArr){
      cTab=allTabsArr[0];
      console.log("oepn Newtab");
      let vestingLogingPagePromisses=cTab.goto("https://www.hackerrank.com/auth/login");
    //console.log("oepn Newtab");
    return vestingLogingPagePromisses;
    })
    .then(function(){
        console.log("hakerrank login page has open");
        let loginEmailwillBeTypedPromisses=cTab.type("input[name='username']",email);
        return loginEmailwillBeTypedPromisses;
     })
     .then(function(){
        console.log("email is typed");
        let passwordwillBeTypedPromisses=cTab.type("input[name='password']",password);
        return passwordwillBeTypedPromisses;
     })
     .then(function(){
        console.log("passwoered typed");
        let loginTohackerRankpomisses=cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        return loginTohackerRankpomisses;
     })
     .then(function(){
        console.log("loging in to hackerrank sucessesfull");
        let AlgortihamTabWillBeOpenedPromise=waitAndClick("div[data-automation='algorithms']");
        return AlgortihamTabWillBeOpenedPromise;
     })
     .then(function(){
        console.log("alogritham tab opened");
        let AllQuestionPromisses=cTab.waitForSelector("a[data-analytics='ChallengeListChallengeName']");
            return AllQuestionPromisses;
     })
     .then(function(){
        function getAllQuestLink(){
            let allElemntArr=document.querySelectorAll("a[data-analytics='ChallengeListChallengeName']");
            let LinkArr=[];
            for(let i=0;i<allElemntArr.length;i++){
                LinkArr.push(allElemntArr[i].getAttribute("href"));
            }
            return LinkArr;
        }
        let linksPromisses=cTab.evaluate(getAllQuestLink);
        return linksPromisses;
     })
     .then(function(LinkArr){
        console.log("link to all ques received");
        console.log(LinkArr);
                                                // link to the question, idx of the linkArr
        let questionWILLBESolvedPromise=questionSolver(LinkArr[0],0);
        for(let i=0;i<LinkArr.length;i++){
            questionWILLBESolvedPromise=questionWILLBESolvedPromise.then(function(){
                return questionSolver(LinkArr[i],i);            
            })
        }
        return questionWILLBESolvedPromise;
     })
     .then(function(){
        console.log("question solved");
     })
     .catch(function(err){
        console.log("error");
     })


      function waitAndClick(selector){
        let myPromise=new Promise(function(resolve,err){
            let WaitforSelectorPomises=cTab.waitForSelector(selector);
        WaitforSelectorPomises   
        .then(function(){
            console.log("algo btn is found");
            let ClickedPromises=cTab.click(selector);
            return ClickedPromises;
        })
        .then(function(){
            console.log("algo btn is clicked");
        })
        .then(function(){
            console.log("succses full");
            resolve();
        })
        .catch(function(err){
            reject("err");
        })
    });
    return myPromise;        
}


function questionSolver(url,idx){
    return new Promise(function(resolve,reject){
        let fullLink=`https://www.hackerrank.com${url}`;
        let gotToQuesPagesPromise=cTab.goto(fullLink);
        gotToQuesPagesPromise
        .then(function(){
            console.log("question opened");
            //salect custom input mark
            let WaitForcheckBoxClickPromise=waitAndClick(".checkbox-input");
            return WaitForcheckBoxClickPromise;
            //resolve();
        })
        .then(function(){
            //Select the box where code will be typed
            let WaitForTextBoxPromise=cTab.waitForSelector(".custominput");
            return WaitForTextBoxPromise;
        })
        .then(function(){
            let codeWillBeTypedPromise=cTab.type(".custominput",answer[idx]);
            return codeWillBeTypedPromise;
        })
        .then(function(){
            // control key is promise
            let controlPressedPromisses=cTab.keyboard.down("Control");
            return controlPressedPromisses;
        })
        .then(function(){
            let aKeypressPromise=cTab.keyboard.press("a");
            return aKeypressPromise;
        })
        .then(function(){
            let XKeyPresssPromise=cTab.keyboard.press("x");
            return XKeyPresssPromise;
        })
        .then(function(){
            let controlUnPressPromise=cTab.keyboard.up("Control");
            return controlUnPressPromise;
        })
        .then(function(){
            let CursorOnTheEditorPromis=cTab.click(".monaco-editor.no-user-select.vs");
            return CursorOnTheEditorPromis;
        })
        .then(function(){
            // control key is promise
            let controlPressedPromisses=cTab.keyboard.down("Control");
            return controlPressedPromisses;
        })
        .then(function(){
            let akeyPressPromise=cTab.keyboard.press("A",{delay:100});
            return akeyPressPromise;
        })
        .then(function(){
            let vkeyPressPromise=cTab.keyboard.press("V",{delay:100});
            return vkeyPressPromise;
        })
        .then(function(){
            let controlUnPressPromise=cTab.keyboard.up("Control");
            return controlUnPressPromise;
        })
        .then(function(){
            let SubmitButtonClickedPromise=cTab.click(".hr-monaco-submit");
            return SubmitButtonClickedPromise;
        })
        .then(function(){
            console.log("code submitted sucessfully");
            resolve();
        })
        .catch(function(err){
            reject("err");
        })
    });
}

