const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const ecxelConfig = require('../config/excel');
const UserController = require('../controllers/UserController');
const CadastroController = require('../controllers/CadastroController');
const PropostaController = require('../controllers/PropostaController');
const PreencherCamposController = require('../controllers/PreencherCamposController');
const ComissaoController = require('../controllers/ComissaoController');
const SaldoDevedorController = require('../controllers/SaldoDevedorController');
const HomeController = require('../controllers/HomeController');
const MargemController = require('../controllers/MargemController');
const Service = require('../service/panService');
const ImobiliarioController = require('../controllers/ImobiliarioController');
const SaldoFerController = require('../controllers/SaldoFerController');
const CancelamentoController = require('../controllers/CancelamentoController');
const AprovacaoPropostaController = require('../controllers/AprovacaoPropostaController');
const MargemGovernoController = require('../controllers/MargemGovernoController');
const ParceirosRestritosController = require('../controllers/ParceirosRestritosController');
const AtualizacaoClienteController = require('../controllers/AtualizacaoClienteController');
const AverbacaoGoiasController = require('../controllers/AverbacaoGoiasController');
const AutorizacaoInssController =require('../controllers/AutorizacaoInssController');
const ListaNegraController = require('../controllers/ListaNegraController');
const { ConsultarContratos } = require('../service/panService');
const IntegracoesController = require('../controllers/IntegracoesController');
const MotorController = require('../controllers/MotorControlller');





//teste
router.get('/', (req, res) => {
    res.send('ok');
})
// rota para fazer login no portal
router.post('/login', UserController.Login);

//rota para envio de email de recuperação de senha/
router.post('/email', UserController.send);

//rota para alterar senha senha
router.post('/reset', UserController.update);

//Rota para buscar cpfs de gerente e supervisor
router.post('/buscar', UserController.BuscaCpf);

//pagina home 
router.post('/home', HomeController.Grafico)
router.get('/home/integracoes',IntegracoesController.Read);
router.get('/home/integracoes/naoperturbe',IntegracoesController.login);
//rotas para popular campos
router.post('/parceiros',PreencherCamposController.Parceiro);
router.post('/secundario',PreencherCamposController.Secundario);
router.post('/terceario',PreencherCamposController.Terceario)
router.get('/funcionario',PreencherCamposController.Funcionario);
router.get('/supervisor',PreencherCamposController.Supervisor);
router.get('/gerente',PreencherCamposController.Gerente);
router.get('/filial',PreencherCamposController.Filial);
router.get('/proposta/status',PreencherCamposController.Status);
router.get('/proposta/tipo',PreencherCamposController.Tipo);
router.get('/proposta/empresas',PreencherCamposController.Empresa);
router.get('/proposta/bancos',PreencherCamposController.Banco);
router.get('/proposta/substatus',PreencherCamposController.SubStatus);
router.get('/proposta/produto',PreencherCamposController.Produto);
router.get('/supervisormulti',PreencherCamposController.SupervisorMulti);
router.get('/comissao/promotor',PreencherCamposController.Promotor);
router.get('/comissao/status',PreencherCamposController.StausComissao);
router.get('/comissao/datagerente',PreencherCamposController.DataPagamentoGerente);
router.get('/comissao/datasupervisor',PreencherCamposController.DataPagamentoSupervisor);
router.get('/comissao/competencia',PreencherCamposController.Competencia);
router.get('/margem/status',PreencherCamposController.StatusMargem);
router.get('/bancoOrigi', PreencherCamposController.BancoOrigi);

// router.get('/banco',PreencherCamposController)

//pequisa de cadastros
router.post('/search', CadastroController.FullSearch);

// inclusão de cadastro 
router.post('/cadastro/inclusao', CadastroController.Create);

//cadastro de novo acesso no portal 
router.post('/cadastro/acesso', UserController.Create)
router.post('/cadastro/acesso/alterar', UserController.AlterarAceso);

//popular campos no modal de cadastro
router.post('/cadastro/modal', CadastroController.Modal)

//preencher modal de acessos
router.post('/cadastro/busca/acesso', UserController.PreencherAcesso)

//busca secundarios e tercearios


//busca cadastros para preencher acessos vinculados no cpf
router.post('/cadastro/buscar', UserController.BuscarAcesso)
router.post('/cadstro/alterar', CadastroController.Update);



router.post('/proposta/filtro', PropostaController.Interface);
router.post('/proposta/identificacao/filtro', PropostaController.FiltroPropostaIdentificacao)
router.post('/proposta/identificacao/inclusao', PropostaController.PropostaIdentificacaoCreate)
router.post('/proposta/identificacao/atualizar', PropostaController.UpdateIdentificacaoPropostaCampos)
router.post('/proposta/identificacao/modal', PropostaController.PropostaIdentificacaoModal)
router.post('/proposta/identificacao/atualizar/arquivos', multer(multerConfig).fields([{
        name: 'proposta',
        maxCount: 1
    },
    {
        name: 'identificacao',
        maxCount: 1
    },
    {
        name: 'endereco',
        maxCount: 1
    },
    {
        name: 'renda',
        maxCount: 1
    },
    {
        name: 'outros1',
        maxCount: 1
    },
    {
        name: 'outros2',
        maxCount: 1
    },
    {
        name: 'outros3',
        maxCount: 1
    },
    {
        name: 'outros4',
        maxCount: 1
    },
    {
        name: 'gravacao',
        maxCount: 1
    },
]), PropostaController.UpdateIdentificacaoPropostaFiles)
// router.post('/proppos')


router.post('/proposta/inclusao', PropostaController.CreateProposta);
router.post('/proposta/inclusao/arquivos', multer(multerConfig).fields([{
        name: 'proposta',
        maxCount: 1
    },
    {
        name: 'identificacao',
        maxCount: 1
    },
    {
        name: 'endereco',
        maxCount: 1
    },
    {
        name: 'renda',
        maxCount: 1
    },
    {
        name: 'identificacao',
        maxCount: 1
    },
    {
        name: 'extratoInss',
        maxCount: 1
    },
    {
        name: 'outros1',
        maxCount: 1
    },
    {
        name: 'outros2',
        maxCount: 1
    },
    {
        name: 'outros3',
        maxCount: 1
    },
    {
        name: 'outros4',
        maxCount: 1
    },

]), PropostaController.PropostaArquivos);



//perquisar comissao
router.post('/comissao/pesquisa', ComissaoController.Pesquisar);
router.post('/comissao/modal', ComissaoController.PreecherModal);

//incluir comissao
router.post('/comissao/incluir', multer(ecxelConfig).single('incluir_propostas'), ComissaoController.Incluir);
//alterar comissao
router.post('/comissao/alterar',multer(ecxelConfig).single('alterar_propostas'),ComissaoController.Alterar);


 router.post('/solicitacoes/saldoDevedor',SaldoDevedorController.SaldoDevedor);
 router.get('/statusSaldo/saldoDevedor',SaldoDevedorController.StatusSaldo);
 router.post('/incluirSaldo/saldoDevedor',SaldoDevedorController.IncluirSaldo);
 router.post('/alterarSaldo/saldoDevedor',SaldoDevedorController.AlterarSaldo);
 router.post('/alterar/modal',SaldoDevedorController.Modal);
 router.post('/margem/pesquisa',MargemController.Pesquisar);
 router.post('/margem/incluir',MargemController.Incluir);
 router.post('/margem/incluir/anexo',multer(multerConfig).single('anexo_print_margem'),MargemController.Anexo)
 router.post('/margem/alterar',MargemController.Update);
 router.post('/margem/modal', MargemController.Modal);
 router.post('/saldofer/incluir',SaldoFerController.IncluirSaldoFer);
 router.post('/saldofer/atualizar', SaldoFerController.Atualizar);
 router.post('/saldofer/modal', SaldoFerController.Modal);
 router.post('/saldofer/filtro', SaldoFerController.Filtro)
 router.post('/saldofer/incluir/arquivos',multer(multerConfig).single('anexo_print_fer'),SaldoFerController.Anexo)

 //Solicitação cancelamento
 router.post('/cancelamento/incluir',CancelamentoController.IncluirCancelamento);
 router.post('/cancelamento/filtro', CancelamentoController.Filtro);
 router.post('/cancelamento/modal', CancelamentoController.Modal);
 router.post('/cancelamento/alterar', CancelamentoController.Alterar);

 //Aprovação proposta digittal
 router.post('/aprovacaoproposta/incluir', AprovacaoPropostaController.IncluirAprovacao);
 router.post('/aprovacaoproposta/filtro', AprovacaoPropostaController.Filtro);
 router.post('/aprovacaoproposta/modal', AprovacaoPropostaController.Modal);
 router.post('/aprovacaoproposta/alterar', AprovacaoPropostaController.Alterar);

 //Margem governo gov sp
 router.post('/margemgoverno/incluir', MargemGovernoController.IncluirMargemGoverno);
 router.post('/margemgoverno/filtro', MargemGovernoController.Filtro);

//Parceiros restritos
 router.post('/parceirosrestritos/incluir', ParceirosRestritosController.InluirParcRest);
 router.post('/parceirosrestritos/filtro', ParceirosRestritosController.Filtro);
 router.post('/parceirosrestritos/modal', ParceirosRestritosController.Modal);
router.post('/parceirosrestritos/alterar', ParceirosRestritosController.Alterar);

router.post('/atualizacao/cliente/filtro', AtualizacaoClienteController.Filtro)
router.post('/atualizacao/cliente/inserir', AtualizacaoClienteController.Inserir)
router.post('/atualizacao/cliente/anexo', multer(multerConfig).fields([
    {
        name: 'identificacao',
        maxCount: 1
    },

    {
        name: 'renda',
        maxCount: 1
    },

    {
        name: 'endereco',
        maxCount: 1
    }
]), AtualizacaoClienteController.Anexo)

router.post('/atualizacao/cliente/modal', AtualizacaoClienteController.Modal);
router.post('/atualizacao/cliente/atualizar/campos', AtualizacaoClienteController.Atualizar)

//averbacao goias
router.post('/averbacao/goias/filtro', AverbacaoGoiasController.Filtro)
router.post('/averbacao/goias/modal', AverbacaoGoiasController.Modal)
router.post('/averbacao/goias/inserir', AverbacaoGoiasController.Inserir)
router.post('/averbacao/goias/anexo', multer(multerConfig).single("anexo_print_margem"), AverbacaoGoiasController.Anexo)
router.post('/averbacao/goias/atualizar', AverbacaoGoiasController.Atualizar)

router.post('/autorizacao/inss/filtro', AutorizacaoInssController.Filtro)
router.post('/autorizacao/inss/modal', AutorizacaoInssController.Modal)
router.post('/autorizacao/inss/inserir', AutorizacaoInssController.Inserir)
router.post('/autorizacao/inss/anexo', multer(multerConfig).single('anexo_print_margem') ,AutorizacaoInssController.Anexo)
router.post('/autorizacao/inss/atualizar', AutorizacaoInssController.Atualizar)

//Lista negra
router.post('/lista/negra/inserir', ListaNegraController.inclusao)

 //service pan 
 router.get('/pan',Service.Auth);
 router.post('/pan/consulta',Service.FindUser);
 router.post('/pan/consultar/contratos',ConsultarContratos);


 //imobiliario
router.post('/imobiliario/pesquisar',ImobiliarioController.Pesquisar);
router.post('/imobiliario/inclusao',ImobiliarioController.Incluir)
router.post('/imobiliario/inclusao/arquivos', multer(multerConfig).fields([{
    name: 'minuta',
    maxCount: 1
},
{
    name: 'comprovanteEstadoCivil',
    maxCount: 1
},
{
    name: 'comprovanteResidencia',
    maxCount: 1
},
{
    name: 'extratobancario1',
    maxCount: 1
},
{
    name: 'extatobancario2',
    maxCount: 1
},
{
    name: 'extratobancario3',
    maxCount: 1
},
{
    name: 'outros5',
    maxCount: 1
},
{
    name: 'outros6',
    maxCount: 1
},
{
    name: 'outros7',
    maxCount: 1
},

]), ImobiliarioController.IncluirArquivos);

router.post('/motor/calculo',MotorController.index)

module.exports = router;