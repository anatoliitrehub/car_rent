
document.querySelector('.form-range').oninput = (event) => document.querySelector('.inp-sp').innerHTML = event.target.value;

document.querySelector('.mob-menu').onclick = () => {

    document.querySelector('.left-menu').classList.remove("hide-mobile");
    document.querySelector('.left-menu').classList.add("dropdown-content");
}

document.querySelector('.butok').onclick = () => {
    document.querySelector('.left-menu').classList.add("hide-mobile");
    document.querySelector('.left-menu').classList.remove("dropdown-content");
}

document.querySelector('.views-small').onclick = (event) =>
    document.querySelector('.view-large').src = event.target.src;
