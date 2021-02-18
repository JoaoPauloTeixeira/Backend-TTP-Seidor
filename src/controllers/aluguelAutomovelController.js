const motoristas = require('./motoristaController');
const automoveis = require('./automovelController')

const listaAutomoveisCadastrados = automoveis.listaAutomoveis;
const listaMotoristasCadastrados = motoristas.listaMotoristas;

let registros = [];

exports.get = async (req, res, next) => {
    res.status(200).send(registros);
}

exports.getByCpfMotorista = async (req, res, next) => {
    const cpf = req.params.cpf;

    const registro = registros.find(element => element.cpf === cpf);

    if(registro) {
        res.status(200).send(registro);
    } else {
        res.status(400).send("Motorista não encontrado com esse ID.")
    }
}

exports.post = async (req, res, next) => {
    const { placa, cpf, motivo } = req.body;

    const automovel = listaAutomoveisCadastrados.find(element => element.placa === placa);
    const motorista = listaMotoristasCadastrados.find(element => element.cpf === cpf);

    const verificaMotorista = await validaMotorista(cpf);
    const verificaAutomovel =  await validaCarro(placa);

    if(!automovel || !motorista) { return res.status(400).send("Erro ao criar registro, Motorista ou Automovel não encontrado.")};

    if (verificaAutomovel || verificaMotorista) { return res.status(400).send("Erro ao criar registro, Motorista ou Automovel vinculado a um registro em uso.") };

    if (placa && cpf && motivo) {
        const registro = {
            id: getRandomInt(1, 100),
            nome: motorista.nome,
            cpf: motorista.cpf,
            marca: automovel.marca,
            placa: automovel.placa,
            dataInicio: new Date(),
            emUso: true
        }

        registros.push(registro);
        res.status(200).send("Registro criado com sucesso");
    } else {
        res.status(400).send("Erro ao criar registro");
    }
}

exports.put = async (req, res, next) => {
    const { cpf } = req.body;

    const registro = registros.find(element => element.cpf === cpf);

    if (registro && registro.emUso) {
        const finalizaRegistro = {
            dataTermino: new Date(),
            emUso: false
        }

        Object.assign(registro, finalizaRegistro);

        res.status(200).send(`Registro finalizado com sucesso.`);
    } else {
        res.status(200).send("Registro não está em uso!")
    }
}

exports.delete = async (req, res, next) => {
    const cpf =  req.params.cpf;

    const index = registros.findIndex(element => element.cpf === cpf);

    if (index > -1) {
        registros.splice(index, 1);

        res.status(200).send(
            `Registro removido com sucesso!`
        )
    } else {
        res.status(400).send(`Nenhum registro encontrado com o CPF ${cpf}`);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validaCarro(value) {
    if (value) {
        const registro = registros.find(element => element.placa === value);
        if (registro && registro.emUso) {
            return true;
        } else {
            return false;
        }
    }
}

async function validaMotorista(value) {
    if (value) {
        const registro = registros.find(element => element.cpf === value);
        if (registro && registro.emUso) {
            return true;
        } else {
            return false;
        }
    }
}
