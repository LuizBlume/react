function Pessoa({ photo, altName, name, age, profession}) { // Isso são props, apenas coloquei as chaves para não precisar repetir props.nome em cada lugar, assim deixa o código muito mais legível
    return (
        <div className="AppPessoa">
            <img src={photo} alt={altName}/>
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
        </div>
    )
}
export default Pessoa