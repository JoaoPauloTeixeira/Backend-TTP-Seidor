exports.post = async (req, res, next) => {
    res.status(201).send(
        req.body
    )
}

exports.put = async (req, res, next) => {
    const id = req.params.id;

    res.status(200).send({
        id: id,
        item: req.body
    })
}

exports.delete = async (req, res, next) => {
    res.status(200).send(
        req.body
    )
}