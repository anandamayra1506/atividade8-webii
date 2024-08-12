import Locacao from "../models/locacao.mjs";

const LocacaoController = Object.create(Object.prototype);

LocacaoController.new = async (req, res) => {
    const created = await Locacao.create({
        VeiculoId: req.body.VeiculoId, 
        cliente: req.body.cliente, 
        inicio: req.body.inicio, 
        fim: req.body.fim
    });
    res.json(created);
};

LocacaoController.one = async (req, res) => {
    const l = await Locacao.findOne({
        where: { id: req.params.id }
    });
    res.json(l);
};

LocacaoController.all = async (req, res) => {
    const all = await Locacao.findAll();
    const ret = [];
    for (let i = 0; i < all.length; i++) {
        ret.push({
            ...all[i].dataValues,
            veiculo: await all[i].getVeiculo()
        });     
    }
    res.json(ret);
};

LocacaoController.edit = async (req, res) => {
    const l = await Locacao.findOne({
        where: { id: req.body.id }
    });
    l.cliente = req.body.cliente;
    l.inicio = req.body.inicio;
    l.fim = req.body.fim;
    await l.save();
    res.json(l);
};

LocacaoController.remove = async (req, res) => {
    const l = await Locacao.findOne({
        where: { id: req.body.id }
    });
    await l.destroy();
    res.json(l);
};

export default LocacaoController;
