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
        const autoEscola = await AutoEscola.findOne({
            where: { id: req.params.id }
        });
        res.json(autoEscola);
    },
    "all": async (req, res) => {
        res.json(await AutoEscola.findAll());
    },
    "edit": async (req, res) => {
        const autoEscola = await AutoEscola.findOne({
            where: { id: req.body.id }
        });
        autoEscola.nome = req.body.nome;
        autoEscola.endereco = req.body.endereco;
        autoEscola.telefone = req.body.telefone;
        autoEscola.site = req.body.site;
        autoEscola.email = req.body.email;
        await autoEscola.save();
        res.json(autoEscola);
    },
    "remove": async (req, res) => {
        const autoEscola = await AutoEscola.findOne({
            where: { id: req.body.id }
        });
        await autoEscola.destroy();
        res.json(autoEscola);
    }
};

export default AutoEscolaController;
