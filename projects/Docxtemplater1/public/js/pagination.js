let pageNumber = 1
let htmlPageNum = document.querySelector(".pageNum")
let page1 = document.querySelector("#separation1")
let page2 = document.querySelector("#separation2")
let page3 = document.querySelector("#separation3")
let htmlNextPageBtn = document.querySelector(".nextPageBtn")
// let htmlDoGood = document.querySelector(".doGood")
let body = document.querySelector(".body")
let entryBlock = document.querySelector(".entry-block")
let previousPageBtn = document.querySelector(".previousPageBtn")
let weekDays = document.querySelector(".weekDays")
let mainblock1 = document.querySelector(".main-block1")
let genDate = document.querySelector("#gen-date")
let Page = document.querySelector(".Page")

function nextPage() {
    if (pageNumber == 1) {
        page1.classList.toggle("sep1")
        page2.classList.toggle("sep2")
    }
    else if (pageNumber == 2) {
        page2.classList.toggle("sep2")
        page3.classList.toggle("sep3")
        htmlNextPageBtn.classList.toggle("hide")
        mainblock1.classList.toggle("auto")
        htmlNextPageBtn.classList.toggle("zero-width")
        Page.classList.toggle("mrgn-top")
    }
    if (pageNumber < 3) {
        pageNumber += 1

    }
    htmlPageNum.innerHTML = `${pageNumber}`
    console.log(pageNumber);
}

function previousPage() {
    if (pageNumber == 3) {
        page3.classList.toggle("sep3")
        page2.classList.toggle("sep2")
        htmlNextPageBtn.classList.toggle("hide")
        mainblock1.classList.toggle("auto")
    }
    else if (pageNumber == 2) {
        page2.classList.toggle("sep2")
        page1.classList.toggle("sep1")
    }
    if (pageNumber>1) {
        pageNumber -= 1
    }
    htmlPageNum.innerHTML = `${pageNumber}`
    console.log(pageNumber);
}
function start(){    window.onkeydown = keyprogram
}
function keyprogram(e){ if (e.keyCode == 37){
    previousPage()
    }
    else if(e.keyCode == 	39){
        nextPage()
    }
}

window.onload = start

