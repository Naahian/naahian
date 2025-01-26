import { buildListItem, buildInputItem } from "./list_item.js"
import { buildProjOption } from "./project_list.js"

let headline = document.getElementById("headline")
let about = document.getElementById("about")
let skills = document.getElementById("skills")
let socials = document.getElementById("socials")
let status = document.getElementById("status")
let selProjectName = document.getElementById("projectName")
let selProjectId = document.getElementById("projectId")

// on Content_Form submit
let form = document.getElementById("content_form");
form.addEventListener("change", onFormValueChange);
form.addEventListener("submit", updateContent)

// on Project_Uptdate_form submit
let update_project_form = document.getElementById("update_project");
let add_project_form = document.getElementById("add_project");

update_project_form.addEventListener("change", onFormValueChange);
add_project_form.addEventListener("change", onFormValueChange);
add_project_form.addEventListener('submit', (event) => addProject(event, add_project_form))

document.getElementById("updateProject").addEventListener("click", (event) => updateProject(event, update_project_form))
document.getElementById("deleteProject").addEventListener("click", (event) => deleteProject(event, update_project_form))

//*********** Create elements *************

function buildList(parent, content, name) {
    content.forEach(value => {
        let item = name == 'socials' ? buildListItem(value[0], name, value[1])
            :
            buildListItem(value, name)
        parent.appendChild(item);
    });
    let inputField;
    if (name == "socials") {
        inputField = buildInputItem(parent, name, true);
    } else {
        inputField = buildInputItem(parent, name);
    }
    parent.appendChild(inputField);
}

// GET ALL DATA
fetch("http://127.0.0.1:5000/get").then(async (value) => {
    let content = await value.json();
    headline.value = content["headline"];
    about.value = content["about"];
    buildList(skills, content["skills"], "skills")
    buildList(socials, content["socials"], "socials")
    buildProjOption(content["projects"])

})


// UPDATE CONTENT
function updateContent(event) {
    event.preventDefault();
    const formData = new FormData(this);

    let confirmed = confirm("Updating data. Are you sure?")
    if (confirmed) {
        fetch('http://127.0.0.1:5000/update', {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json();
        }).then(responseData => {
            alertBox(responseData)
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}

// ADD PROJECT
function addProject(event, form) {
    event.preventDefault()
    const formData = new FormData(form)

    fetch("http://127.0.0.1:5000/add_project", {
        method: 'POST',
        body: formData,
    }).then(
        response => {
            return response.json()
        }).then(data => {
            alertBox(data)
        })
}

// UPDATE PROJECT
function updateProject(event, form) {

    event.preventDefault()
    const formData = new FormData(form)

    let confirmed = confirm("Updating data. Are you sure?")
    if (confirmed) {
        fetch('http://127.0.0.1:5000/update_project', {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json()
        }).then(
            responseData => {
                alertBox(responseData)
            }
        )
    }
}

// DELETE PROJECT
function deleteProject(event, form) {
    event.preventDefault()
    const formData = new FormData(form)
    let confirmed = confirm("Deleting project. Are you sure?")
    if (confirmed) {
        fetch('http://127.0.0.1:5000/delete_project', {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json()
        }).then(
            responseData => {
                alertBox(responseData)
            }
        )
        //update form ui
        selProjectName.remove(selProjectName.selectedIndex)
        selProjectId.remove(selProjectId.selectedIndex)
    }
}


function onFormValueChange() {
    status.innerHTML = `<div class="alert alert-warning alert-dismissible fade show mb-0  shadow"         role="alert">
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            You have Unsaved Changes!
                        </div>`
}


function alertBox(responseData) {
    if (responseData.status == "success") {
        status.innerHTML = `<div class="alert alert-success alert-dismissible fade show mb-0  shadow" role="alert">
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                ${responseData.message}
                                <a href="/content_manager/content_manager.html" >Reload Page</a>
                            </div>`
    }
    else {
        status.innerHTML = `<div class="alert alert-danger alert-dismissible fade show mb-0 " role="alert">
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                ${responseData.message}
                                <a href="/content_manager/content_manager.html"class="icon-link icon-link-hover">Reload Page</a>
                            </div>`
    }
}



/**
 *     {
            "description": "PID controlled basic line follower.",
            "id": "02c6a367",
            "thumbnail": "/images/lfr.jpg",
            "title": "Line Follower Robot"
        },
        {
            "description": "A simple UI built using Pygame for game development.",
            "id": "7a089ada",
            "thumbnail": "/images/pygame.png",
            "title": "Pygame UI "
        },
        {
            "description": "Visualizes shortest paths with different algorithms. ",
            "id": "17536744",
            "thumbnail": "/images/shortestpah.png",
            "title": "Shortest Path Visualizer"
        }
 */