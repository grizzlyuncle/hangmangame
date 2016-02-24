function addElement(){
    var cityArray = ["Durham", "Newcastle", "Manchester", "Edinburgh", "York"];
    var ul = document.getElementById("listContainer");
    var newListItem = document.createElement("li");
    newListItem.id = "list-item";
    newListItem.innerHTML = cityArray[Math.floor(Math.random()*cityArray.length)];
    ul.appendChild(newListItem);

    var currentDiv = document.getElementById("currentDiv");
    document.body.insertBefore(ul, currentDiv);
}
