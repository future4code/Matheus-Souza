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
            .then(res =>alert('play list criada'))
            .catch((err) => {
               alert(err.response.data.message)})
    }
    return (
        <>
            <form onSubmit={onSubmitForm}>

                <input
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Play name"
                />
                <button
                    type={"submit"}>Save</button>
            </form>
        </>
    )
}