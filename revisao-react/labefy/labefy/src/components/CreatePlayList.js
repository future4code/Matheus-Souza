import axios from "axios"
import { Authorization } from "../constants/urls/Auth"
import { BASE_URL } from "../constants/urls/Urls"
import useForm from "./hooks/useForm"

export const CreatePlayList = () => {

    const [form, onChange, clear] = useForm({ name: "" })

    const onSubmitForm = (e) => {
      createPlayList()
        e.preventDefault()
        clear()
    }

    const createPlayList = () => {
        axios.post(BASE_URL,form,Authorization)
            .then(res => console.log(res.data))
            .catch((err) => {
                console.log('Authorization que  NÃO funciona',Authorization)
                console.log(err.response.data)})
    }

    console.log(Authorization)
    return (
        <>
            <form onSubmit={onSubmitForm}>

                <input
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <button
                onClick={console.log('Authorization',Authorization)}
                    type={"submit"}>Save</button>
            </form>
        </>
    )
}