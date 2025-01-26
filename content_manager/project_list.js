let projectName = document.getElementById("projectName")
let projectId = document.getElementById("projectId")


function buildProjOption(projects) {
    projects.forEach(project => {
        projectOptions(project["title"], project["id"])
    });
}


function projectOptions(title, id) {
    let projNameOption = document.createElement("option")
    projNameOption.value = `${id}`
    projNameOption.innerText = `${title}`
    projectName.appendChild(projNameOption)
}

export { buildProjOption }