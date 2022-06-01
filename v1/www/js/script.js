/*

TO DO LIST

->L116
->


- Changer les class onglets et autre pour que elle n'intéragisse pas avec le reste
  (type : onglet-active ou onglet-tab-contents etc)
- 

*/



window.onload = function (){
/* -----------------ONGLETS------------------------ */
/**
 * 
 * @param {Element} li Bouton sur lequel on clique pour changer de menu 
 * @returns 
 */
let afficheOnglet = function (li){
    window.scroll(0, 0);
    let ul = li.parentNode
    let divContenu = document.querySelector('.tab-contents')
    
    if (li.classList.contains('active')){
        return false
    }

    let goTo = '.'+li.getAttribute('class')
    
    //on retire la class active à l'onglet actif
    //on ajoute active à l'onglet actuel
    if (ul.querySelector('.tabs .active') !== null){
        ul.querySelector('.tabs .active').classList.remove('active')
    }
    li.classList.add('active')

    //On retire la class active sur le contenu actif
    //j'ajoute la class active sur le contenu correspondant
    divContenu.querySelector('.tab-content.active').classList.remove('active')
    divContenu.querySelector(goTo +'.tab-content').classList.add('active')
}

let tabs = document.querySelectorAll('.navigation-items li')
for(let i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(e){
        
        afficheOnglet(this)
        
    })
}

//onglet bouton autre part sur la page
let buttonsOngletTab = document.querySelectorAll('.button-onglet a')
for (let i=0;i<buttonsOngletTab.length;i++){
    buttonsOngletTab[i].addEventListener('click',function(e){ 
        window.scroll(0, 0); //click sur le bouton ramène en haut

        document.querySelector('.navbar').classList.remove('show')
        document.querySelector('.navigation-button').firstChild.setAttribute('src','content/svg/menu.svg')

        let divContenu = document.querySelector('.tab-contents')
        let divOnglet = document.querySelector('.tabs')
        
        let goTo = '.'+ this.getAttribute('class')
    
        if (document.querySelector('.tabs .active') !== null){ //supprimer l'onglet actif si il existe
            document.querySelector('.tabs .active').classList.remove('active')
        }

        if (divOnglet.querySelector(goTo) !== null){ //mettre l'onglet actif si il existe
            divOnglet.querySelector(goTo).classList.add('active')
        }
        divContenu.querySelector('.tab-content.active').classList.remove('active')
        divContenu.querySelector(goTo+'.tab-content').classList.add('active')
    })    
}

/* ------------------FIN ONGLETS---------------------- */




//scroll menu
let onScroll = function(){
    //Changement header selon affichage

    //SI ON EST PAS SUR MOBILE
    if (window.innerWidth > 700){
        element = document.querySelector('.header')
        hasScrollClass = element.classList.contains('is-scrolling')
        if (window.scrollY > 1 && !hasScrollClass){ //si on est pas en haut de la page
            element.classList.add('is-scrolling')
            element.classList.remove('no-scrolling')
        } else if (window.scrollY <= 1 && hasScrollClass){ //sinon
            element.classList.remove('is-scrolling')
            element.classList.add('no-scrolling')
            
        }
    }

    //Affichage des élements caché par une transition
    elementTab = document.querySelectorAll('.hidden-transition')
    for(let i=0;i<elementTab.length;i++){
        if ((elementTab[i].getBoundingClientRect().top - document.querySelector('.header').getBoundingClientRect().height )/window.innerHeight < 0.6){ //si l'élement caché est a 60% de la hauteur de l'écran
            elementTab[i].classList.remove('hide')
        }
    }
}
window.addEventListener('scroll',onScroll) //permet de gérer l'affichage du header lors du scroll
if(window.innerWidth <= 700){ //si on est sur téléphone, met directement le petit header 
    element = document.querySelector('.header')
    element.classList.add('is-scrolling')
    element.classList.remove('no-scrolling')
    document.querySelector('.fake-header').style.height = '75px'
}

// METTRE UNE FONCTION DE RECHARGEMENT DU STYLE (A APPELER AU DEBUT POUR LE HEADER GROS MEME SI ON EST PLUS BAS AU RAFRAICHAISSEMENT
// ET POUR LE CHANGEMENT TEL/PC SANS RAFRAICHISSEMENT DE LA PAGE

/* ---------------- NAVBAR MOBILE -------------------- */



//clique sur la navbar
document.querySelector('.navigation-button').addEventListener('click',(e)=>{
    console.log("click")
    let navBar = document.querySelector('.navbar')
    let navButton = document.querySelector('.navigation-button')

    if(navBar.classList.contains('show')){
        navBar.classList.remove('show')
        navButton.firstChild.setAttribute('src','content/svg/menu.svg')
    } 
    else{
        navBar.classList.add('show')
        navButton.firstChild.setAttribute('src','content/svg/xmark.svg')
    }
    
})

}