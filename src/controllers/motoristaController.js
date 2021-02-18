let motoristasCadastrados = [];

exports.get = async (req, res, next) => {
    res.status(200).send(motoristasCadastrados);
}

exports.getById = async (req, res, next) => {
    const id = Number(req.params.id);

    const motorista = motoristasCadastrados.find(element => element.id === id);

    if(motorista) {
        res.status(200).send(motorista);
    } else {
        res.status(400).send("Motorista não encontrado com esse ID.")
    }
}

exports.post = async (req, res, next) => {
    let { nome, cpf, id } = req.body;
    const validaNome = validaTipo(nome, 'string');
    const validaCpf = validaTipo(cpf, 'number');

    id = getRandomInt(1, 100);

    const index = motoristasCadastrados.findIndex(element => element.id === id); //Se index diferente de -1 existe elemento no array

    const existeCpfCadastrado = motoristasCadastrados.find(element => element.cpf === cpf);

    if(existeCpfCadastrado) {res.status(400).send("CPF já cadastrado")};

    index !== -1 ? id * 2 : id;

      if (!validaNome) {
        res.status(400).send("Nome Inválido");
        return;
      }
      
    if (nome && cpf) {
        const motorista = {
            id,
            nome: nome.toUpperCase(),
            cpf: cpf
        };

        motoristasCadastrados.push(motorista);

        return res.status(201).send(
            `Motorista cadastrado com sucesso.`
        )
    }

    res.status(400).send("Verifique se todos campos necessários foram preenchidos!");

}

exports.put = async (req, res, next) => {

    const id = Number(req.params.id);
    const nome = req.body.nome;

    const index = motoristasCadastrados.findIndex(element => element.id === id);

    if (index > -1 && nome) {
        req.body.nome ? motoristasCadastrados[index].nome = nome : null;

        res.status(200).send(
            `Motorista atualizado com sucesso.`
        )
        return;
    } else {
        res.status(400).send("Erro ao atualizar motorista.");
    }
}

exports.delete = async (req, res, next) => {
    const id = Number(req.params.id);

    const index = motoristasCadastrados.findIndex(element => element.id === id);

    if (index > -1) {
        motoristasCadastrados.splice(index, 1);

        res.status(200).send(
            `Automovel removido com sucesso!`
        )
    } else {
        res.status(400).send(`Nenhum automovel encontrado com a placa ${req.body.placa}`);
    }
}

function validaTipo(value, tipo) {
    switch (tipo) {
        case 'string':
        if (isNaN(Number(value))) {
            return true;
        } else {
            return false;
        }
        case 'number':
            if (!isNaN(Number(value))) {
                return true;
            } else {
                return false;
            }
        default:
            break;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.listaMotoristas = motoristasCadastrados;