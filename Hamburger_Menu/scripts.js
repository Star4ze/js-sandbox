const btn = document.querySelector("#menu")
const sidePanal = document.querySelector(".side_panal")


btn.addEventListener('click', (e) => {
    sidePanal.classList.toggle('side_panal_visibility')
    e.target.innerText = "X"
})