const express = require('express');

let automoveisCadastrados = [];

exports.get = async (req, res, next) => {
    res.status(200).send(automoveisCadastrados);
}

exports.getById = async (req, res, next) => {
    const id = Number(req.params.id);

    const automovel = automoveisCadastrados.find(element => element.id === id);

    if(automovel) {
        res.status(200).send(automovel);
    } else {
        res.status(400).send("Automovel não encontrado com esse ID.")
    }
}

exports.getByCor = async (req, res, next) => {
    const cor = (req.params.cor).toUpperCase();

    const automovel = automoveisCadastrados.find(element => element.cor === cor);

    if (automovel) {
        res.status(200).send(automovel);
    } else {
        res.status(400).send("Automovel não encontrado com essa cor.")
    }
}


exports.getByMarca = async (req, res, next) => {
    const marca = (req.params.marca).toUpperCase();
    const automovel = automoveisCadastrados.find(element => element.marca === marca);

    if (automovel) {
        res.status(200).send(automovel);
    } else {
        res.status(400).send("Automovel não encontrado.")
    }
}

exports.post = async (req, res, next) => {
    const { placa, marca, cor } = req.body;
    const placaValida = validaTipo(placa, 'string');

    const index = automoveisCadastrados.findIndex(element => element.placa === placa); //Se index diferente de -1 existe elemento no array

      if (!placaValida || index !== -1) {
        res.status(400).send("PLACA INVÁLIDA!");
        return;
      }
      
    if (placa && marca && cor) {
        // DESESTRUTURACAO
        const automovel = {
            id: getRandomInt(1, 100),
            placa: placa.toUpperCase(),
            marca: marca.toUpperCase(),
            cor: cor.toUpperCase()
        };

        automoveisCadastrados.push(automovel);

        return res.status(201).send(
            `Automovel cadastrado com sucesso.`
        )
    }

    res.status(400).send("Verifique se todos campos necessários foram preenchidos!");

}

exports.put = async (req, res, next) => {

    const placa = req.params.placa;
    const cor = req.body.cor;
    const marca = req.body.marca;

    const index = automoveisCadastrados.findIndex(element => element.placa === placa);

    req.body.cor ? automoveisCadastrados[index].cor = cor : null;
    req.body.marca ? automoveisCadastrados[index].marca = marca : null;

    if (index > -1 && (cor || marca)) {
        res.status(200).send(
            `Automovel atualizado com sucesso.`
        )
    } else {
        res.status(400).send("Erro ao atualizar automovel.");
    }
}

exports.delete = async (req, res, next) => {
    const placa = req.body.placa;

    const index = automoveisCadastrados.findIndex(element => element.placa === placa);

    if (index > -1) {
        automoveisCadastrados.splice(index, 1);

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

exports.listaAutomoveis = automoveisCadastrados;