function increment() {
    var value = parseInt(document.getElementById("btn").value) + 1;
    document.getElementById("btn").innerHTML = value;
    document.getElementById("btn").value = value;
}