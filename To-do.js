var listOfData = [];
var input = document.getElementById("input"); 
var todo = document.getElementById("todo"); 


document.getElementById("button").onclick = click;


function click() {
    if (input.value.trim() === "") {
        alert("Please enter a valid task.");
        return;
    }
    listOfData.push(input.value); 
    input.value = "";
    showList(); 
}


function showList() {
    todo.innerHTML = ""; 

    listOfData.forEach(function (item, i) {
        var li = document.createElement("li"); 
        li.innerHTML = `
            ${item} 
            <a onclick="edit(${i})" style="margin-left:10px; color: blue; cursor: pointer;">Edit</a>
            <a onclick="deleteList(${i})" style="margin-right:10px; color: red; cursor: pointer;">Delete</a>
        `;
        todo.appendChild(li); 
    });
}


function edit(i) {
    var newVal = prompt("Please insert a new value", listOfData[i]);
    if (newVal !== null && newVal.trim() !== "") {
        listOfData.splice(i, 1, newVal);
        showList(); 
    }
}


function deleteList(i) {
    listOfData.splice(i, 1); 
    showList(); 
}