let cursor = document.querySelector('.cursor-effect');
let light = document.querySelector('.cursor-effect')
let headline = document.getElementById("headline")
let about = document.getElementById("about")
let skills = document.getElementById("skills")
let socials = document.getElementById("socials")
let projects = document.getElementById("projects")

//fetch data
fetch("./data.json").then(async (value) => {
    content = await value.json();
    headline.innerText = content["headline"];
    about.innerText = content["about"];

    content["skills"].forEach(link => {
        skills.appendChild(buildImgBadge(link))
    })
    content["socials"].forEach(link => {
        let icon = buildSocialLinks(link[0], link[1]);
        socials.appendChild(icon);
    })
    content["projects"].forEach(project => {
        let projectCard = buildProjectCard(project);
        projects.appendChild(projectCard);
    })

})


function buildImgBadge(url) {
    let img = document.createElement('img')
    img.src = `${url}`
    img.className = "icon m-1"
    return img
}

function buildSocialLinks(url, imgSrc) {
    let link = document.createElement('a')
    link.href = `${url}`
    let image = document.createElement('img')
    image.src = `${imgSrc}`
    image.width, image.height = 30, 30;
    image.className = "icon m-1"
    link.appendChild(image)
    return link
}

function buildProjectCard(project) {
    let card = document.createElement('div');
    card.className = "card dark-bg";
    card.style = "width: 100%; max-width: 420px; height: 460px; overflow: hidden;";
    let content = `
            <img class="card-img-top object-fit-cover" style="height: 60%;" src=".${project["thumbnail"]}"
              alt="Line Follower Robot">
            <div class="card-body" style="box-shadow: #111 0 -15px 100px;">
              <a href="${project["link"]}" target="_blank">
              <h4 class="card-title">${project["title"]}</h4>
              </a>
              <p class="card-text" style="text-overflow:ellipsis;">
               ${project["description"]}
              </p>
             </div>`
    card.innerHTML = content
    return card
}
