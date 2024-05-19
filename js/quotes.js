const quotes = [{
    quote: "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey",
},
{
    quote: "You are built not to shrink down to less but to blossom into more.",
    author: "Oprah Winfrey",
},
{
    quote: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
    author: "Oprah Winfrey",
},
{
    quote: "Happiness will never come to those who fail to appreciate what they already have.",
    author: "Siddhartha",
},
{
    quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    author: "Albert Einstein",
},
{
    quote: "The more violent the storm, the quicker it passes.",
    author: "Paulo Coelho",
},
{
    quote: "The mind is everything. What you think, you become.",
    author: "Buddha",
},
{
    quote: "The most important decision you make is to be in a good mood.",
    author: "Voltaire",
},
{
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca",
},
{
    quote: "What you think about yourself is much more important than what others think about you.",
    author: "Seneca",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;