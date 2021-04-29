module.exports = (sequelize, DataTypes) => {
    const parceiro2 = sequelize.define('parceiro2', {
        id_parceiro: {
            type: DataTypes.INTEGER,
            
            autoIncrement: true,
        },
        parceiro:{
            type:DataTypes.STRING, 
           
            primaryKey: true,
        },
        parceiro_cadastro:DataTypes.STRING, 
        supervisor:DataTypes.STRING, 
        empresa:DataTypes.STRING, 
        parceiro_completo:DataTypes.STRING, 
        usuario:DataTypes.STRING, 
        senha:DataTypes.STRING, 
        responsavel:DataTypes.STRING, 
        siglae:DataTypes.STRING, 
        senhasigla:DataTypes.STRING, 
        cpf:DataTypes.STRING, 
        tipo_parceiro:DataTypes.STRING, 
        usuario_master:DataTypes.STRING, 
        data_cadastro:DataTypes.DATE,
        agencia:DataTypes.STRING, 
        classificacao:DataTypes.STRING, 
        gerente:DataTypes.STRING, 
        grupo:DataTypes.STRING, 
        grupo_ativo:DataTypes.STRING, 
        status:DataTypes.STRING, 
        id:DataTypes.STRING, 
        treinamento:DataTypes.STRING, 
        senha_siglae:DataTypes.STRING, 
        cpf_sigla:DataTypes.STRING, 
        tipo_parceiro2:DataTypes.STRING, 
        email:DataTypes.STRING, 
        frase:DataTypes.STRING, 
        data_nascimento:DataTypes.STRING, 
        cpf_cadastro:DataTypes.STRING, 
        data_atualizacao:DataTypes.STRING, 
        imobiliario:DataTypes.STRING, 
        cetelem:DataTypes.STRING, 
        foto:DataTypes.STRING, 
        telefone:DataTypes.STRING, 
        status_cadastro:DataTypes.STRING, 
        id_ead:DataTypes.STRING, 
        arquivo1:DataTypes.STRING, 
        arquivo2:DataTypes.STRING, 
        f5_pan:DataTypes.STRING, 
        f5_ole:DataTypes.STRING, 
        f5_bmg:DataTypes.STRING, 
        f5_orienta:DataTypes.STRING, 
        motivo_cancelamento:DataTypes.STRING, 
        f5_itau:DataTypes.STRING, 
        f5_safra:DataTypes.STRING, 
        cadastro:DataTypes.STRING, 
        ole:DataTypes.STRING, 
        pan:DataTypes.STRING, 
        acesso_parceiro:DataTypes.STRING, 
        cpf_usuario:DataTypes.STRING, 
        perfil:DataTypes.STRING, 
        tabela:DataTypes.STRING, 
        tipo:DataTypes.STRING, 
        sim:DataTypes.STRING, 
        troca_senha:DataTypes.STRING, 
        quem_alterou:DataTypes.STRING, 
        daycoval:DataTypes.STRING, 
        safra:DataTypes.STRING, 
        bradesco:DataTypes.STRING, 
        parana:DataTypes.STRING, 
        consorcio_bb:DataTypes.STRING, 
        consorcio_itau:DataTypes.STRING, 
        consorcio_caixa:DataTypes.STRING, 
        crefisa:DataTypes.STRING, 
        email_supervisor:DataTypes.STRING, 
        email_gerente:DataTypes.STRING, 
        superintendente:DataTypes.STRING, 
        itau:DataTypes.STRING, 
        crefisa2:DataTypes.STRING,
    }, {
        tableName: 'parceiro2',
        timestamps: false
    })
    parceiro2.associate = function(models) {
        parceiro2.belongsTo(models.propostas, {foreignKey: 'id_parceiro'})
      };

    parceiro2.associate = function(models) {
    parceiro2.hasMany(models.base_parceiros, {foreignKey: 'cpf'})
    };

    return parceiro2;
};