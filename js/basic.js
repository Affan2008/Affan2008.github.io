function navbar() {
    const home = document.createElement("li");
    const hometext = document.createTextNode("<a href='/index.html'>Home</a>");
    home.appendChild(hometext);
    document.getElementById("winOrLose").appendChild(home);
}