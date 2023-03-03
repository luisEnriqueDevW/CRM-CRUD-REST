import { getUserId, putUser } from "./api.js";

const url = new URLSearchParams(window.location.search)

console.log(url.get("id"))



getUserId(Number(url.get("id")))
    .then((e) => pintarUser(e))

function pintarUser(e) {

    const nombre = document.querySelector("#nombre")
    const email = document.querySelector("#email")
    const telefono = document.querySelector("#telefono")
    const empresa = document.querySelector("#empresa")

    nombre.value = e.nombre;
    email.value = e.email;
    telefono.value = e.telefono;
    empresa.value = e.empresa;




    enviarU()

    /* nombre.innerHTML = e.nombre */


}


function enviarU() {
    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value
        const email = document.querySelector("#email").value
        const telefono = document.querySelector("#telefono").value
        const empresa = document.querySelector("#empresa").value

        const obj = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa,


        }



        await putUser(obj, url.get("id"))



    })
}

