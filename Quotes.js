const quotes = [
    {
        quote: "Life is what happens when you are busy making get rid of your best opportunity",
        author : "Frankline",
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * 10)]);

-----------------------------------------------------------------------------------------------------------
const quotes = [
    {
        quote: "Life is what happens when you are busy making get rid of your best opportunity",
        author : "Frankline",
    },
    {
        quote: "Fuck off FIB",
        author : "Traver",
    },
    {
        quote: "I am gonna fucked up your mind and your every single proverty to be taken",
        author : "Laechael",
    },
    {
        quote: "Fuck you hommie",
        author : "Mikle",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;  
