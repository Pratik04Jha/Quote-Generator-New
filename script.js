let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    "The way to get started is to quit talking and begin doing.", 
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
    "The future belongs to those who believe in the beauty of their dreams.", 
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    "You must be the change you wish to see in the world",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "Your life is your story, and the adventure ahead of you is the journey to fulfill your own purpose and potential.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "Happiness is not something you postpone for the future; it is something you design for the present.",
    "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    "Life isn’t about finding yourself. Life is about creating yourself.",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "It always seems impossible until it's done.",
    "Dream big and dare to fail.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Act as if what you do makes a difference. It does.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Believe you can and you're halfway there.",
    
];

let trail = document.querySelector(".dot");
let trail2 = document.querySelector(".dot2");
let dot = document.querySelector(".trail");
let dot2 = document.querySelector(".trail2");
let quoteText = document.querySelector(".p");
let generateNewQuote = document.querySelector("button");
let music = new Audio("Music.mp3");
let musicBtn = document.querySelector(".mf");
let musicPlaying = false;

musicBtn.addEventListener("click", ()=>{
    if(!musicPlaying){
        music.play();
        musicBtn.innerHTML = "MUSIC ON"
        musicPlaying = true;
    } else if(musicPlaying){
        music.pause();
        musicBtn.innerHTML = "MUSIC OFF"
        musicPlaying = false;
    };
});

generateNewQuote.addEventListener("click", () => {
    let newQuote = Math.floor( Math.random()*quotes.length );
    quoteText.textContent = quotes[newQuote];
})

window.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;
    dot.animate({
        top: `${posY}px`,
        left: `${posX}px`,
    }, {
        duration: 1500,
        fill: "forwards",
    });
    dot2.animate({
        top: `${posY}px`,
        left: `${posX}px`,
    }, {
        duration: 2000,
        fill: "forwards",
    });
});

window.addEventListener("mousemove", (e)=>{
    let posXX = e.clientX;
    let posYY = e.clientY;
    trail.animate({
        top: `${posYY}px`,
        left: `${posXX}px`,
    }, {
        duration: 1500,
        fill: "forwards",
    });
    trail2.animate({
        top: `${posYY}px`,
        left: `${posXX}px`,
    }, {
        duration: 2000,
        fill: "forwards",
    });
});