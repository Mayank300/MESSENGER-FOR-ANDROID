var message = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
}

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});