import Button from "./Button";
function Evento({ numero }) {
    function myEvent() {
        alert(`Olá, fui ativado pelo número ${numero}`)
    }
    return (
        <>
            <p>Clique aqui para disparar o evento</p>
            <Button event={myEvent} text="Primeiro evento" />
        </>
    )
}
export default Evento;