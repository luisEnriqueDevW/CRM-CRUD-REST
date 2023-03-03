



//outputs

/* export var objCliente;


function formS() {

    const formulario = document.querySelector("#formulario");
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault;

        objCliente = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa,

        }



    });
}

formS();
 */
/* 
export const asm = async (id) => {

    try {
        const resp = await fetch(`http://localhost:4000/clientes/${id}`, {
            method: "DELETE"
        })

        const r = await resp.json();

        return console.log(resp)
    }
    catch (err) {

        return console.log(err, "MAMASTE")

    }
}


export const upd = async (user) => {

    const resp = await fetch(`http://localhost:4000/clientes/3`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" }
    });

    return  await resp.json();

} */



import { postUser } from './api.js';


const form = document.querySelector("#formulario");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const email = document.querySelector("#email").value
    const telefono = document.querySelector("#telefono").value
    const empresa = document.querySelector("#empresa").value



    const obj = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        empresa: empresa
    }



    postUser(obj);



})








