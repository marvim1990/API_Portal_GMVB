module.exports = (sequelize, DataTypes) => {
    const Acesso = sequelize.define('acessos', {
      id_acesso:{
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey:true,
        
        },
        cnpj_matriz:DataTypes.STRING,
        nome:DataTypes.STRING,
        empresa:DataTypes.STRING,
        perfil:DataTypes.STRING, 
        usuario:DataTypes.STRING,
        senha:DataTypes.STRING,
        responsavel:DataTypes.STRING,
        cpf_usuario:DataTypes.STRING,
        tipo_parceiro:DataTypes.STRING,
        usuario_master:DataTypes.STRING,
        classificacao:DataTypes.STRING, 
        status:DataTypes.STRING,
        tipo_parceiro2:DataTypes.STRING, 
        email:DataTypes.STRING, 
        data_cadastro: DataTypes.DATE,
        data_nascimento:DataTypes.STRING, 
        data_atualizacao:DataTypes.STRING, 
        foto:DataTypes.STRING,
        telefone:DataTypes.STRING,
        arquivo1:DataTypes.STRING, 
        arquivo2:DataTypes.STRING, 
        tipo:DataTypes.STRING, 
        motivo_cancelamento:DataTypes.STRING,
        cetelem:DataTypes.STRING,
        f5_ole:DataTypes.STRING, 
        f5_pan:DataTypes.STRING, 
        f5_bmg:DataTypes.STRING, 
        f5_orienta:DataTypes.STRING, 
        f5_itau:DataTypes.STRING, 
        f5_safra:DataTypes.STRING, 
        ole:DataTypes.STRING, 
        pan:DataTypes.STRING, 
        sim:DataTypes.STRING, 
        daycoval:DataTypes.STRING, 
        safra:DataTypes.STRING, 
        bradesco:DataTypes.STRING, 
        parana:DataTypes.STRING, 
        consorcio_bb:DataTypes.STRING, 
        consorcio_itau:DataTypes.STRING, 
        consorcio_caixa:DataTypes.STRING, 
        crefisa:DataTypes.STRING,
        itau:DataTypes.STRING, 
        token:DataTypes.STRING
      },{
          tableName: 'acessos',
          timestamps:false
      })
    return Acesso;
  };