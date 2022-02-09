// VARIABLES
const API_URL = 'https://tribe.api.fdnd.nl/v1';
const nameEl = document.querySelector(".name");
const backName = document.querySelector(".name-surname");
const image = document.getElementById("profileImage");
const bioEl = document.getElementById("bio");
const githubHandleEL = document.getElementById("githubHandle");
const urlEL = document.getElementById("url");
const card = document.querySelector("#card");

getMember();
card.addEventListener("click", function () {
    this.classList.toggle("card-rotate")
})

// FUNCTIONS
async function getMember() {
    const req = await fetch(`${API_URL}/member`);
    const member = await req.json();
    nameEl.innerText = member.data[0].name;
    backName.innerText = `${member.data[0].name} ${member.data[0].surname}`
    githubHandleEL.href = member.data[0].githubHandle;
    urlEL.href = member.data[0].url;
    image.src = member.data[0].avatar;

}