// // Generate current url in tag with #url id
// document.getElementById("url").innerHTML = window.location.href;

// // Display success while copying URL
// function revealMessage() {
//   document.getElementById("alert-success").style.display = 'inline-block';
//   document.getElementById("alert-holder").style.float = 'left';
//   document.getElementById("alert-holder").style.marginTop = '8px';
// }
// // Function to execute copyToClipboard('#url') on button click
// function copyToClipboard(element) {
//   var $temp = $("<input>");
//   $("body").append($temp);
//   $temp.val($(element).text()).select();
//   document.execCommand("copy");
//   $temp.remove();

//   revealMessage();
// }
