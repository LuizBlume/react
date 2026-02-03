import { useState } from "react"

function Form() {
    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`Cadastro concluído com sucesso! Nome: ${name} e Senha: ${password}`)
    }
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    return (
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div className="formContainer">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="formContainer">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="Submit">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}
export default Form