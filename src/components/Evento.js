function Evento({ numero }) {
    function myEvent() {
        alert(`Olá, fui ativado pelo número ${numero}`)
    }
    return (
        <>
            <p>Clique aqui para disparar o evento</p>
            <button onClick={myEvent}>Ativar!</button>
        </>
    )
}
export default Evento;