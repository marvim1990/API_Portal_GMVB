const {
    calculadora
} = require('../models');

const Sequelize = require('sequelize');

const CalculadoraController = {
    Convenios: async (req, res) => {
        const banco = req.body.banco;

        const convenios = await calculadora.findAll({
            where: {
                banco
            },
            attributes: [
                // specify an array where the first element is the SQL function and the second is the alias
                [Sequelize.fn('DISTINCT', Sequelize.col('convenio')), 'convenio'],

                // specify any additional columns, e.g. country_code
                // 'country_code'
            ]
        })

        convenios.length > 0 ? res.status(200).json(convenios) : res.status(401).json({
            message: "Banco não cadastrado na base de dados"
        })
    },

    Regras: async (req, res) => {
        const convenio = req.body.convenio;

        const regras = await calculadora.findAll({
            where: {
                convenio
            },

            attributes: [
                // specify an array where the first element is the SQL function and the second is the alias
                [Sequelize.fn('DISTINCT', Sequelize.col('regra')), 'regra'],

                // specify any additional columns, e.g. country_code
                // 'country_code'
            ]
        })

        regras.length > 0 ? res.status(200).json(regras) : res.status(401).json({
            message: "Banco não cadastrado na base de dados"
        })
    }
}

module.exports = CalculadoraController;