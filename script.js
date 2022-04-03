let counter = 0;

const crossItem = element => {
    if (element.checked)
        return element.closest(".item").classList.add("done");
    return element.closest(".item").classList.remove("done");
};

const checkToggle = element => {
    let checkBox = element.closest(".item").getElementsByTagName("input")[0];
    checkBox.checked = !checkBox.checked;
    crossItem(checkBox);
};

const deleteItem = element => element.closest(".item").remove();

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("input");
    const addButton = document.getElementById("add");
    const resetButton = document.getElementById("clear");
    const itemList = document.getElementById("item_list");

    const addItem = () => {
        let inputItem = input.value.trim();
        if (inputItem === '')
            return
        let newItem = createItem(inputItem);
        itemList.appendChild(newItem);
        input.value = '';
    };
    const clearList = () => itemList.innerHTML = '';

    input.addEventListener("keyup", (event) => {
        if (event.keyCode === 13)
            addItem();
    })
    addButton.onclick = addItem;
    resetButton.onclick = clearList;

});


const createItem = text => {
    let item = document.createElement("div");
    item.setAttribute("class", "item");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", counter);
    checkbox.setAttribute("onChange", "crossItem(this)");
    item.appendChild(checkbox);

    let customCheckbox = document.createElement("i");
    customCheckbox.setAttribute("class", "fa-solid fa-square-check");
    customCheckbox.setAttribute("onClick", "checkToggle(this)");
    item.appendChild(customCheckbox);
    
    let content = document.createElement("label");
    content.innerText = text;
    content.setAttribute("for", counter++);
    item.appendChild(content);

    let deleteButton = document.createElement("i");
    deleteButton.setAttribute("class", "fa-solid fa-trash-can");
    deleteButton.setAttribute("onClick", "deleteItem(this)");
    item.appendChild(deleteButton);

    return item;
};