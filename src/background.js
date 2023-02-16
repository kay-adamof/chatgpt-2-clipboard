
document.body.appendChild(button);

var clipboard = new ClipboardJS(button, {
    text: function() {
        return chats[0].textContent;
    }
});

