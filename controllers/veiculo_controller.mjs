import Veiculo from "../models/veiculo.mjs";

const VeiculoController = {
    "new": async (req, res) => {
        // console.log(req.body);
        const created = await Veiculo.create({
            quantidade: req.body.quantidade,
            modelo: req.body.modelo,
            fabricante: req.body.fabricante,
            preco: req.body.preco,
            ano: req.body.ano,
            placa: req.body.placa,
            km: req.body.km,
            cor: req.body.cor,
            descricao: req.body.descricao
        });
        res.send(created);
    },
    "one": async (req, res) => {
        const v = await Veiculo.findOne({
            where: { id: req.params.id }
        });
        res.json(v);
    },
    "all": async (req, res) => {
        res.json(await Veiculo.findAll());
    },
    "edit": async (req, res) => {
        const v = await Veiculo.findOne({
            where: { id: req.body.id }
        });
        v.quantidade = req.body.quantidade;
        v.modelo = req.body.modelo;
        v.fabricante = req.body.fabricante;
        v.preco = req.body.preco;
        v.ano = req.body.ano;
        v.placa = req.body.placa;
        v.km = req.body.km;
        v.cor = req.body.cor;
        v.descricao = req.body.descricao;
        
        await v.save();
        res.json(v);
    },
    "remove": async (req, res) => {
        const v = await Veiculo.findOne({
            where: { id: req.body.id }
        });
        await v.destroy();
        res.json(v);
    }
};

export default VeiculoController;
