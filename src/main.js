document.addEventListener("DOMContentLoaded", function () {
  var conversation = document.querySelector("main");
  var chats = conversation.querySelectorAll(".items-start");
  console.log(chats[0].textContent);
});

var button = document.createElement("button");
button.innerHTML = "Copy";
document.body.appendChild(button);

var clipboard = new ClipboardJS(button, {
    text: function() {
        return chats[0].textContent;
    }
});

