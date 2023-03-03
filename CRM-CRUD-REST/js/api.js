
export const postUser = async (obj) => {
    const resp = await fetch(`http://localhost:4000/clientes`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }


    })

    window.location.href = "index.html"
}


export const putUser = async (obj, id) => {
    const resp = await fetch(`http://localhost:4000/clientes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }


    })

    window.location.href = "index.html"
}

export const getUser = async () => {

    const rep = await fetch(`http://localhost:4000/clientes`)

    

   /*  setTimeout(() => {
        return console.log("esperando getuser")
    },3000) */

    console.log("PENY SEXY")

    return await rep.json();



}

export const getUserId = async (id) => {

    const rep = await fetch(`http://localhost:4000/clientes/${id}`)

    return await rep.json();



}

export const delUser = async (id) => {

    console.log("method delete")


    const resp = fetch(`http://localhost:4000/clientes/${id}`, {
        method: 'DELETE'
    })

    return resp




}



