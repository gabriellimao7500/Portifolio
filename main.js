const setas = document.querySelector(".setas");
const setasC = document.querySelector(".setasC");


var locate = "Inicio"

function Seta(){
    if(locate == "Inicio"){
        setas.href = "#sites"
        locate = "sites"
        setasC.classList.remove("none")
    }else if(locate == "sites"){
        setas.href = "#tecnologias"
        locate = "tecnologias"
        setas.classList.add("none")
    }
    console.log(locate)

}

function SetaC(){
    if(locate == "sites"){
        setasC.href = "#inicio"
        locate = "Inicio"
        setasC.classList.add("none")
    }else if(locate == "tecnologias"){
        setasC.href = "#sites"
        locate = "sites"
        setas.classList.remove("none")
    }
    console.log(locate)
}