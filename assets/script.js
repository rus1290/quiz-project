let timeRemain = document.querySelector(".time-left");
let quizContain = document.getElementById("container");
let btnNxt = document.getElementById("next-button");
let questCount = document.querySelector("number-of-question");
let displayCont = document.getElementById("display-container");
let scoreCont = document.getElementById("score-container");
let userScore = document.getElementById("user-score");
let startScrn = document.getElementById("start-screen");
let startBtn = document.getElementById("start-button");
let NumOfQues;
let scoreCount = 0;
let count = 11;
let countdown;

const quizQuest = [
    {
        id: "0",
        question: "A web browser ___________",
        options: [
            "is a program that runs on a web server",
            "starts when a web server sends a page to a client",
            "starts when an HTTP request is made",
            "is a program that runs on a client computer",
        ],
        correct: "is a program that runs on a client computer",
    },
    {
        id: "1",
        question: "An HTTP response is sent from ___________",
        options: [
            "the web server to the application server",
            "the client to the web server",
            "the application server to the web server",
            "the web server to the client",
        ],
        correct: "the web server to the client",
    },
    {
        id: "2",
        question: "When a browser makes a request for a static web page, the web server ___________",
        options: [
            "returns the HTML for the page and the browser renders it",
            "generates the HTML for the page and returns it to the browser",
            "renders the HTML for the page and returns it to the browser",
            "finds the HTML for the page and renders it",
        ],
        correct: "returns the HTML for the page and the browser renders it",
    },
    {
        id: "3",
        question: "When a browser makes a request for a dynamic web page _____________",
        options: [
            "the web server processes the request and returns the HTML to the browser",
            "the web server gets the data for the request from a database and returns the data to the browser",
            "the web server processes the request and returns the HTML to the browser",
            "an application server processes the request and returns the HTML to the browser",
        ],
        correct: "the web server processes the request and returns the HTML to the browser",
    },
    {
        id: "4",
        question: "HTML is used to define __________",
        options: [
            "the structure and contents of a web page",
            "the layout of a web page",
            "the formatting of a web page",
            "all of the above",
        ],
        correct: "the structure and contents of a web page",
    },
    {
        id: "5",
        question: "CSS is used to __________",
        options: [
            "define and format the HTML elements of a web page",
            "format the HTML elements of a web page",
            "define the browser settings for page layout",
            "format the browser settings for page layout",
        ],
        correct: "format the HTML elements of a web page",
    },
    {
        id: "6",
        question: "To deploy a website, you use ___________",
        options: [
            "HTML",
            "FTP",
            "CSS",
            "JavaScript",
        ],
        correct: "FTP",
    },
    {
        id: "7",
        question: "Which of the following is NOT part of an HTTP URL",
        options: [
            "protocol",
            "node",
            "path",
            "filename",
        ],
        correct: "node",
    },
    {
        id: "8",
        question: "If you right-click on a web page and select View Source or View Page Source _____________",
        options: [
            "the HTML for the page will be displayed",
            "a link to the HTML in the Developer Tools will be displayed",
            "the CSS for the page will be displayed",
            "a link to the CSS in the Developer Tools will be displayed",
        ],
        correct: "the HTML for the page will be displayed",
    },
    {
        id: "9",
        question: "Because 57% or more of all Internet traffic comes from mobile devices, a web developer needs to be concerned with _____________",
        options: [
            "search engine optimization",
            "user accessibility",
            "cross-browser compatibility",
            "responsive web design",
        ],
        correct: "responsive web design",
    },
    {
        id: "10",
        question: "Because applications like Google and Bing rank the pages of a website, a web developer needs to be concerned with ____________",
        options: [
            "search engine optimization",
            "user accessibility",
            "cross-browser compatibility",
            "responsive web design",
        ],
        correct: "search engine optimization",
    }
];
