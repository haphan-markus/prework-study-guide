var topics = ['HTML','CSS','Git','JavaScript'];

function listTopics() {
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

var randomTopic = topics[Math.floor(Math.random()*topics.length)];

function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git'){
       console.log("Let's study Git!") ;
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!")
    }
}

console.log("Here are the list of topics we learned through Prework:")
listTopics();
console.log("Which topic should we study first?")
selectTopic();

/*
var shapes = ["triangle","square","pentagon","circle"];
for (var x=0; x < shapes.length; x++) {
    console.log(shapes[x]);
}

function HelloWorld() {
    console.log("Hello, world, I am a function!")
}*/