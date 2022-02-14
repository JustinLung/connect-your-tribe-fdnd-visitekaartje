// VARIABLES
const API_URL = 'https://tribe.api.fdnd.nl/v1';
const nameEl = document.querySelector(".name");
const backName = document.querySelector(".name-surname");
const image = document.getElementById("profileImage");
const bioEl = document.getElementById("bio");
const githubHandleEL = document.getElementById("githubHandle");
const urlEL = document.getElementById("url");

const card = document.querySelector("#card");
const loader = document.querySelector(".loader");
const errorHandling = document.querySelector(".error");

getMember();
card.addEventListener("click", function () {
    this.classList.toggle("card-rotate")
})

// FUNCTIONS
async function getMember() {
    try {
        const res = await fetch(`${API_URL}/member`)
        const member = await res.json()
        render(member)
        hidePreloader();
    }
    catch (err) {
        error();
        hidePreloader();
        throw new Error(err);
    }
}

function render(data) {
    nameEl.innerText = data.data[0].name;
    backName.innerText = `${data.data[0].name} ${data.data[0].surname}`
    // githubHandleEL.href = data.data[0].githubHandle;
    githubHandleEL.href = `https://github.com/${data.data[0].githubHandle}`;
    urlEL.href = data.data[0].url;
    bioEl.innerText = data.data[0].bio;
    image.src = data.data[0].avatar;
    loaded();
}

function hidePreloader() {
    setTimeout(() => {
        loader.style.opacity = 0;
    }, 2000)
}

function loaded() {
    setTimeout(() => {
        card.style.transition = ".3s ease"
        card.style.opacity = 1;
    }, 2100)
}

function error() {
    setTimeout(() => {
        errorHandling.style.opacity = 1;
        errorHandling.style.transform = "translateX(0)";
        setTimeout(() => {
            errorHandling.style.opacity = 0
            errorHandling.style.transform = "translateX(4em)";
        }, 5000);
    }, 2100)
}