// Get the chat conversation elements
var conversation = document.querySelectorAll(".items-start .markdown p");
console.log(conversation[0].textContent);

// var messages = conversation.querySelectorAll('.items-start');
// console.log(messages)

// messages.forEach(function(message) {
//   console.log(message);
// });
//
// // Create an empty string to store the formatted text
// var markdown = '';
//
// // Loop through the messages and format them as Markdown
// for (var i = 0; i < messages.length; i++) {
//   var message = messages[i];
//   var author = message.querySelector('.author').textContent;
//   var text = message.querySelector('.text').textContent;
//
//   markdown += '#### ' + author + '\n' + text + '\n\n';
// }
//
// // Log the formatted text to the console (for testing purposes)
// console.log(markdown);
