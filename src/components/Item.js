// import PropTypes from 'prop-types';

function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
// Abaixo são duas funções que não são mais usadas hoje em dia
// Item.propTypes = {
//     marca: PropTypes.string.isRequired,
//     ano_lancamento: PropTypes.number
// }
// Item.defaultProps = {
//     marca: "Faltou a marca!",
//     ano_lancamento: 0
// }

export default Item;