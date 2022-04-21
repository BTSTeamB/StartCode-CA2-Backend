import {ChangeEvent, useState} from "react";

interface IForm {
    username: string,
    password: string
}

const InitialState: IForm = {
    username: "",
    password: ""
}

export default function Register() {
    const [form, setForm] = useState<IForm>(InitialState);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setForm({
            ...form,
            [event.target.name]: value,
        })
    }

    async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        const response = await fetch("http://localhost:8080/api/auth/register");
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input name={"username"} type={"text"} value={form.username} onChange={handleChange}/>
                <label>username</label>
                <input name={"password"} type={"password"} value={form.username} onChange={handleChange}/>
            </form>
        </>
    )
}