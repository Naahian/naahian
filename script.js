let cursor = document.querySelector('.cursor-effect');
let torch = document.getElementById('torch')
let light = document.querySelector('.cursor-effect')
let headline = document.getElementById("headline")
let about = document.getElementById("about")
let skills = document.getElementById("skills")
// let socials = document.getElementById("socials")

//fetch data
fetch("./data.json").then(async (value) => {
    content = await value.json();
    headline.innerText = content["headline"];
    about.innerText = content["about"];
    content["skills"].forEach(link => {
        skills.appendChild(buildImgBadge(link))
    })
    content[""].forEach()

})


function buildImgBadge(url) {
    img = document.createElement('img')
    img.src = `${url}`
    img.className = "icon m-1"
    return img
}



// useless torch
let torchOn = false

torch.addEventListener("mousedown", () => {
    torchOn = !torchOn
    torchMove()
    if (torchOn) {
        light.style.opacity = 1;
        torch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
        <path
        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>`
    }
    else {
        light.style.opacity = 0;
        torch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>`
    }
})

function torchMove() {
    document.addEventListener("mousemove", (e) => {
        if (document.body.offsetWidth >= (e.pageX + cursor.offsetWidth / 4))
            cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
        if (document.body.offsetHeight >= (e.pageY + cursor.offsetHeight / 4))
            cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    })
}



