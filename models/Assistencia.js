module.exports = (sequelize, DataTypes) => {
    const Assistencia = sequelize.define('assistencia', {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_contrato: DataTypes.STRING,
        id_cliente: DataTypes.STRING,
        cliente_nome: DataTypes.STRING,
        cliente_cpf: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        cep: DataTypes.STRING,
        rua: DataTypes.STRING,      
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        tipo_contratacao: DataTypes.STRING,
        banco: DataTypes.STRING,
        agencia: DataTypes.STRING,
        conta: DataTypes.STRING,
        digito: DataTypes.STRING,
        tipo_conta: DataTypes.STRING,
        status: DataTypes.STRING,
        tipo_assistencia: DataTypes.STRING,
        forma_contratacao: DataTypes.STRING,
        parceiro: DataTypes.STRING,
        id_parceiro: DataTypes.STRING,
        cpf_parceiro: DataTypes.STRING,
        supervisor: DataTypes.STRING,
        gerente: DataTypes.STRING,
        data_inclusao: DataTypes.STRING,
        data_vencimento: DataTypes.STRING,
        responsavel_alteracao: DataTypes.STRING,
        data_alteracao: DataTypes.STRING,
        valor_assistencia: DataTypes.STRING
    },{
        tableName: 'assistencia',
        timestamps: false
    })
    return Assistencia
};