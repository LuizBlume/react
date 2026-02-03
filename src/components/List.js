import Item from "./Item";
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1960} />
                <Item marca="Fiat" ano_lancamento={1967} />
                <Item marca="BMW" ano_lancamento={2026} />
            </ul>
        </>
    )
}
export default List;