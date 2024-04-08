// Change the body tag's style
document.body.style.fontFamily = "Arial, sans-serif";

// Replace each span with your information
document.getElementById("nickname").innerText = "Your Nickname";
document.getElementById("favorites").innerText = "Your Favorites";
document.getElementById("hometown").innerText = "Your Hometown";

// Iterate through each li and change class to "listitem" and style color to red
var listItems = document.querySelectorAll("li");
listItems.forEach(function(item) {
    item.className = "listitem";
});

// Create and append an image element
var img = document.createElement("img");
img.src = "me1.png";
img.addEventListener("click", changePic); // Call ChangePic function when clicked
document.querySelector("h1").appendChild(img);

// ChangePic function to change the image source to a random picture
function changePic() {
    var picNum = Math.floor(Math.random() * 3) + 1; // Assuming you have 3 images named me1.jpg, me2.jpg, me3.jpg
    this.src = "me" + picNum + ".png";
}
