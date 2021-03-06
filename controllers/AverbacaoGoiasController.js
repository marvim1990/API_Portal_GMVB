const {
    averbacao_goias
} = require('../models');
const Sequelize = require('sequelize');
const { where } = require('sequelize');
const Op = Sequelize.Op;

const AverbacaoGoiasController = {
    Filtro: async (req, res) => {
        const {
            userTipousuario,
            userPerfil,
            userCpf,
            parceiro,
            status,
            cpf,
            data_atualizacao,
            data_cadastro
        } = req.body;

        let where = {};
        if (status) where.status = status;
        if (parceiro) where.parceiro = parceiro;
        if (cpf) where.cpf = cpf;
        if (data_atualizacao) where.data_atualizacao = data_atualizacao;
        if (data_cadastro) where.data_cadastro = data_cadastro
        if (userTipousuario === 'PARCEIRO' && userPerfil === 'MATRIZ' || userTipousuario === 'PARCEIRO' && userPerfil === 'SUB ACESSO') where.cnpj = userCpf;

        try {
            const alreadyFiltroExists = await averbacao_goias.findAll({
                where
            })

            if (alreadyFiltroExists) {
                return res.status(200).json(alreadyFiltroExists);
            }

            return res.json({
                message: "Filtro inexistente"
            })
        } catch (error) {
            console.log(error)
        }

    },

    Modal: async (req, res) => {
        const codigo = req.body;

        const alreadyExists = await averbacao_goias.findOne({
            where: codigo
        })

        if (alreadyExists) {
            return res.status(201).json(alreadyExists)
        }

        return res.json({
            message: "Codigo inexistente na base de dados"
        })
    },

    Inserir: async (req, res) => {
        const {
            data_envio,
            parceiro,
            tipo,
            valor_solicitado,
            parcela,
            prazo,
            senha,
            validade_senha,
            parcela_original,
            matricula,
            status,
            supervisor,
            gerente,
            data_inclusao,
            id_acesso,
            cpf_supervisor,
            cpf_gerente,
            cpf_parceiro,
            id_parceiro
        } = req.body;

        const averbacaoGoiasInserir = await averbacao_goias.create({
            data_envio,
            parceiro,
            tipo,
            valor_solicitado,
            parcela,
            prazo,
            senha,
            validade_senha,
            parcela_original,
            matricula,
            status,
            supervisor,
            gerente,
            data_inclusao,
            id_acesso,
            cpf_supervisor,
            cpf_gerente,
            cpf_parceiro,
            id_parceiro
        })

        return res.status(201).json(averbacaoGoiasInserir)
    },

    Anexo: async (req, res) => {
        const {
            codigo
        } = req.query;

        const {
            anexo_print_margem
        } = req.file;

        const arquivo1 = req.file.originalname;

        const averbacaoGoias = await averbacao_goias.findOne({
            where: {
                codigo
            }
        })

        if (averbacaoGoias) {
            averbacaoGoias.arquivo1 = arquivo1;
            averbacaoGoias.save();

            return res.status(200).json(averbacaoGoias)
        }

        return res.json({
            message: "C??digo para inserir arquivo n??o existe"
        })
    },

    Atualizar: async (req, res) => {
        const {
            codigo,
            status,
            responsavel,
            data_atualizacao
        } = req.body

        const averbacaoExists = await averbacao_goias.findOne({
            where: {
                codigo: codigo
            }
        })

        if(averbacaoExists) {
            averbacaoExists.status = status;
            averbacaoExists.responsavel = responsavel;
            averbacaoExists.data_atualizacao = data_atualizacao;

            averbacaoExists.save();

            return res.status(200).json(averbacaoExists)
        }

        return res.json({message: "C??digo de Averba????o Goi??s"});

    }
}

module.exports = AverbacaoGoiasController;