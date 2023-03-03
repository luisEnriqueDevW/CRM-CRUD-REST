/* import { obtenerClientes, eliminarCliente } from './API.js';
 */


/* 

const ur = new URL(`./editar-cliente.html/?id="ksdjdskn"`)


window.location.href = ur */


/* import {  upd} from './nuevocliente.js'; */


/* asm(1) */


/* 
upd({
    "nombre": "LUISI",
    "email": "laton@laton",
    "telefono": "000011",
    "empresa": "lataland"
})  */



import { getUser, delUser } from './api.js';





async function pintarUsuarios() {

    const r = await getUser();


    console.log(r, "RR")

    
        const list = document.querySelector("#listado-clientes");
        list.innerHTML = ""
    
        for (let i of r) {
    
            let div = document.createElement("tr");
            div.innerHTML = `
            
                
                    <th>
                        ${i.nombre}
                    </th>
                    <th>
                        ${i.telefono}
                    </th>
                    <th>
                        ${i.empresa}
                    </th>
                    <th>
                    <a href="#" class="delbtn"  data="${i.id}">Eliminar</a>
                    <a href="editar-cliente.html?id=${i.id}" >Editar</a>
                    </th>
                
            `
    
            list.appendChild(div)
    
    
    
        }
    
        deleteClient() 
}







function deleteClient() {


    const delbtn = document.querySelectorAll(".delbtn");
    const delbtn1 = Array.from(delbtn)

    delbtn1.map(function (el) {
        el.addEventListener("click", async function (e) {


           const r = await delUser(e.target.attributes[2].value)
           /* setTimeout(function () {
            
           },1000) */
           pintarUsuarios()
            



        })
    })



}







/* 
window.addEventListener("DOMContentLoaded", () => {
    pintarUsuarios();
    deleteClient();

}) */

function start() {
    pintarUsuarios()


}

start();














