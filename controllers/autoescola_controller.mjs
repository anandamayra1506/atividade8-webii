import AutoEscola from "../models/autoescola.mjs";

const AutoEscolaController = {
    "new": async (req, res) => {
        const created = await AutoEscola.create({
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            site: req.body.site,
            email: req.body.email
        });
        res.send(created);
    },
    "one": async (req, res) => {
        const a = await AutoEscola.findOne({
            where: { id: req.params.id }
        });
        res.json(a);
    },
    "all": async (req, res) => {
        res.json(await AutoEscola.findAll());
    },
    "edit": async (req, res) => {
        const a = await AutoEscola.findOne({
            where: { id: req.body.id }
        });
        a.nome = req.body.nome;
        a.endereco = req.body.endereco;
        a.telefone = req.body.telefone;
        a.site = req.body.site;
        a.email = req.body.email;
        await a.save();
        res.json(a);
    },
    "remove": async (req, res) => {
        const a = await AutoEscola.findOne({
            where: { id: req.body.id }
        });
        await a.destroy();
        res.json(a);
    }
};

export default AutoEscolaController;
