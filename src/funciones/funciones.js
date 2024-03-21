import axios from "axios"

const TodosLibros = async (state) => {
    const peticion = await axios.get("http://3.95.20.120:5000/books")
    state(peticion.data)
}

export {
    TodosLibros
}
