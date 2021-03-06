module.exports = (sequelize, DataTypes) => {
    const FilaPreCadastro = sequelize.define("fila_precadastro", {
        status: DataTypes.STRING,
        qtd: DataTypes.INTEGER,
        valor: DataTypes.STRING,
        qtd_fora: DataTypes.DECIMAL,
        qtd_dentro: DataTypes.DECIMAL,
        data_envio: DataTypes.DATE
    }, {
        tableName: "fila_precadastro",
        timestamps: false
    })

    FilaPreCadastro.removeAttribute('id');
    return FilaPreCadastro;
}