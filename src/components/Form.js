function Form() {
    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log("Cadastro concluído com sucesso!")
    }
    return (
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div className="formContainer">
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div className="Submit">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}
export default Form