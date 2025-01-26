
function buildListItem(value, name, imageVal) {
    let container = document.createElement("div");
    container.className = "row my-1";

    let input = document.createElement("input");
    input.className = "col form-control bg-light text-muted";
    input.type = 'url';
    input.readOnly = true;
    input.name = `${name}`;
    input.value = value;
    container.appendChild(input);

    if (imageVal) {
        let inputImg = document.createElement("input");
        inputImg.className = "ms-1 col form-control bg-light text-muted";
        inputImg.placeholder = 'insert image url';
        inputImg.name = 'social-image';
        inputImg.readOnly = true;
        inputImg.value = imageVal.replace("C:\\fakepath\\", "./images/");
        container.appendChild(inputImg);
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "col-1 btn link-danger";
    deleteBtn.type = "button";
    deleteBtn.onclick = () => onListItemDelete(container);
    deleteBtn.innerText = "Remove";
    container.appendChild(deleteBtn);

    return container;
}


function onListItemDelete(parent) {
    parent.remove();
}


function buildInputItem(parent, name, hasImage = false) {
    let container = document.createElement("div");
    container.className = "row my-1";
    name = name

    let input = document.createElement("input");
    input.className = "col form-control";
    input.placeholder = hasImage ? 'insert social url' : 'insert image url';
    input.type = 'url';
    container.appendChild(input);

    let inputImg = document.createElement("input");
    if (hasImage) {
        inputImg.className = "ms-1 col form-control";
        inputImg.placeholder = 'insert image url';
        inputImg.type = 'file';
        inputImg.placeholder = "choose icon";
        container.appendChild(inputImg);
    }

    let addBtn = document.createElement("button");
    addBtn.className = "col-auto ms-2 btn btn-success";
    addBtn.type = "button";
    addBtn.innerText = "Add Link";
    if (hasImage) {
        addBtn.onclick = () => addToList(name, parent, input.value, inputImg.value);
    } else {
        addBtn.onclick = () => addToList(name, parent, input.value, null);

    } container.appendChild(addBtn);

    return container;
}


function addToList(name, parent, value, imgValue) {
    let listItem, inputItem;
    if (imgValue) {
        listItem = buildListItem(value, name, imgValue);
        inputItem = buildInputItem(parent, name, true);
    } else {
        listItem = buildListItem(value, name, null);
        inputItem = buildInputItem(parent, name, false);
    }

    parent.children[parent.children.length - 1].remove();

    parent.appendChild(listItem);
    parent.appendChild(inputItem);
}



export { buildListItem, buildInputItem };