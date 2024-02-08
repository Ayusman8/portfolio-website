var currentPage = window.location.pathname;;
var checkBox = document.querySelector("#click");
var header = document.querySelector(".nav-bar");
var navButtons = document.getElementsByClassName("nav-buttons");

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
        header.style.backgroundColor = "black";
        if(currentPage.includes("/feedback") || currentPage.includes("/project")){
            document.querySelector(".bar-btn").style.color = "#d8dadb";
            document.querySelector("#username").style.color = "#d8dadb";
            for (let i = 0; i < navButtons.length; i++) {
                navButtons[i].style.color = "#d8dadb";
            } 
        }
    }else{
        if(window.scrollY > 0){
            header.style.backgroundColor = "black"; 
        }else{
            header.style.backgroundColor = "transparent"; 
        }
        if(currentPage.includes("/feedback") || currentPage.includes("/project")){
            document.querySelector("#username").style.color = "black"; 
            document.querySelector(".bar-btn").style.color = "black";
            for (let i = 0; i < navButtons.length; i++) {
                navButtons[i].style.color = "black";
            } 
        }
    }
})

document.addEventListener("DOMContentLoaded", function() {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", function() {
        // Check if the scroll position is greater than 0
        if (window.scrollY > 0) {
            // If scroll position is greater than 0, change background color
            header.style.backgroundColor = "black"; // Change to the desired background color
            document.querySelector("#username").style.color = "#d8dadb";
            document.querySelector(".bar-btn").style.color = "#d8dadb";
            var navButtons = document.getElementsByClassName("nav-buttons");
            for (let i = 0; i < navButtons.length; i++) {
                navButtons[i].style.color = "#d8dadb";
            }
        } else {
            // If scroll position is 0, revert to the initial background color
            if(checkBox.checked){
                header.style.backgroundColor = "black"; // Change to the initial background color
            }else{
                header.style.backgroundColor = "transparent"; // Change to the initial background color
            }
            if((currentPage.includes("feedback") || currentPage.includes("projects")) && checkBox.checked){
                document.querySelector(".bar-btn").style.color = "#d8dadb";
                document.querySelector("#username").style.color = "#d8dadb";
                for (let i = 0; i < navButtons.length; i++) {
                    navButtons[i].style.color = "black ";
                }  
                console.log("checkbox turned it grey");
            }else if((currentPage.includes("feedback") || currentPage.includes("projects"))){
                document.querySelector(".bar-btn").style.color = "black";
                document.querySelector("#username").style.color = "black";
                var navButtons = document.getElementsByClassName("nav-buttons");
                for (let i = 0; i < navButtons.length; i++) {
                    navButtons[i].style.color = "black";
                }
            }else{
                document.querySelector("#username").style.color = "#d8dadb";
                for (let i = 0; i < navButtons.length; i++) {
                    navButtons[i].style.color = "#d8dadb";
                }
                console.log("else turned it grey");

            }
        }
    });
});

function changeHeaderElementColor(){
    if((currentPage.includes("feedback") || currentPage.includes("projects")) && checkBox.checked){
        document.querySelector(".bar-btn").style.color = "#d8dadb";
        document.querySelector("#username").style.color = "#d8dadb";
        console.log("changeHeaderElementColor checkbox turned it grey");
    }else if(currentPage.includes("feedback") || currentPage.includes("projects")){
        document.querySelector("#username").style.color = "black";
        document.querySelector(".bar-btn").style.color = "black";
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.color = "black";
        }  
    }
}

function active(){
    if(currentPage.includes("feedback")){
        document.querySelector("#feedback").style.fontWeight = '900';
        if(window.innerWidth>900){
            document.querySelector("#feedback").style.borderBottom = '2px solid black'
        }else{
            document.querySelector("#feedback").style.borderBottom = '2px solid #d8dadb'
        }
    }else if(currentPage.includes("project")){
        document.querySelector("#project").style.fontWeight = '900';
        if(window.innerWidth>900){
            document.querySelector("#project").style.borderBottom = '2px solid black'
        }else{
            document.querySelector("#project").style.borderBottom = '2px solid #d8dadb'
        }    }else{
        document.querySelector("#home").style.fontWeight = '900';
        document.querySelector("#home").style.borderBottom = '2px solid #d8dadb'
    }
}

function changeBodyColor(){
    if(currentPage.includes("feedback") || currentPage.includes("projects")){
        document.querySelector("body").style.backgroundColor = "white";
    }
}

function setDivHeight(){
    if(document.documentElement.innerHTML.includes("No Feedbacks Yet")){
        document.querySelector(".feedbacks-container").style.height = "100vh";
    }
}

window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    if(window.scrollY>=652){
        document.querySelector("#feedback-heading").style.transition = "all 0.5s ease"
        document.querySelector("#feedback-heading").style.position = "fixed";
        document.querySelector("#feedback-heading").style.top = "4.6%"
        document.querySelector("#feedback-heading").style.backgroundColor = "grey"
        document.querySelector("#feedback-heading").style.color = "black"
    }else{
        document.querySelector("#feedback-heading").style.position = "static";
        document.querySelector("#feedback-heading").style.backgroundColor = "black"
        document.querySelector("#feedback-heading").style.color = "white"
    }
});

// 652 is y axis value

window.onload = function() {
    changeHeaderElementColor();
    active();
    changeBodyColor();
    setDivHeight()
}


