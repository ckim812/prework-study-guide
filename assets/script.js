var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
console.log(topics);

var topic = "HTML";
if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic ==='CSS') {
    console.log ("Let's study CSS!");
} else if (topic ==='Git') {
    console.log ("Let's study Git!");
} else if (topic ==='JavaScript') {
    console.log ("Let's study JavaScript!");
} else {
    console.log ('Please try again!');
}

var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x])
}

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x])
    }
}

listTopics()

function selectTopic() {
    if (topics === 'HTML') {
        console.log ("Let's study HTML!");
    } else if (topics ==='CSS') {
        console.log ("Let's study CSS!");
    } else if (topics ==='Git') {
        console.log ("Let's study Git!");
    } else if (topics ==='JavaScript') {
        console.log ("Let's study JavaScript!");
    } else {
        console.log ('Please try again!');
    }
}

selectTopic()

var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];