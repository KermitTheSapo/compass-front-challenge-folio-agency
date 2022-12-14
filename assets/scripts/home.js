const btn = document.querySelector(".menu__img")
const body = document.querySelector("body")
const title = document.querySelector(".figure__title")
const nav = document.querySelector(".main__nav--open")
const socialMedia = document.querySelector(".socialMedia")
const hero = document.querySelector(".hero")
const footer = document.querySelector("footer")

Click = () => {
    if(btn.attributes.src.value === 'assets/imgs/home/header/burguer-icon.svg'){
        btn.setAttribute('src', 'assets/imgs/home/header/open-burger-icon.svg')
        body.setAttribute("style", "background-color: #232340")
        title.setAttribute("src", "assets/imgs/home/header/open-folio-title.svg")
        nav.setAttribute("style", "display: flex")
        socialMedia.setAttribute("style", "display: flex")
        footer.setAttribute("style", "display: none")
        hero.setAttribute("style", "display: none")

    } else if (btn.attributes.src.value === 'assets/imgs/home/header/open-burger-icon.svg') {
        btn.setAttribute('src', 'assets/imgs/home/header/burguer-icon.svg')
        body.setAttribute("style", "background-color: white")
        title.setAttribute("src", "assets/imgs/home/header/folio-title.svg")
        nav.setAttribute("style", "display: none")
        socialMedia.setAttribute("style", "display: none")
        footer.setAttribute("style", "display: flex")
        hero.setAttribute("style", "display: flex")
    }
}