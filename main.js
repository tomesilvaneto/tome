let nomeUusuario =  "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUusuario == ""){
    nomeUusuario =  prompt("Qual o seu nome?");
}
if (nomeUusuario == null) {
    elemento.textContent = "Seja muito bem vindo";
}else{
    elemento.textContent = nomeUusuario;
}

