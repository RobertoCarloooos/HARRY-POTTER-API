const Personage = require(`../models/personage.model`);
const Houses = require(`../models/hogwarts_houses`);

const personageSelect = async (req, res) => {
    const allPersonage = await Personage.find().populate({path:`house`,select:`name`})
    return res.status(200).json(allPersonage);
};

const personageAdd = async (req, res) => {
    try {
        const newPersonage = new Personage(req.body)
        const createdPeronage = await newPersonage.save();
        return res.json(createdPeronage)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
};

const selectOnePersonage = async (req, res) => {
    try {
        const { id } = req.params;
        const findOnePersonage = await Personage.findOne({ _id: id })
        return res.status(200).json(findOnePersonage)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
};

const personagePut = async (req, res) => {
    try {
        const idPersonages = req.params.id;
        const idHouses = req.body._id;

        const updatePersonage = await Personage.findByIdAndUpdate(idPersonages,{$push:{house:idHouses}},{new: true });

        console.log(updatePersonage)
        if (!updatePersonage) {
            return res.status(404).json({ message: "El personaje no existe" })
        }
        return res.status(200).json(updatePersonage)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
};

const personageDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const personageDelete = await Personage.findByIdAndDelete(id);
        if (!personageDelete) {
            return res.status(404).json({ message: "El personaje no existe" })
        }
        return res.status(200).json(personageDelete)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


module.exports = { personageSelect, personageAdd, selectOnePersonage, personagePut, personageDelete };