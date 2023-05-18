const router = require("express").Router()
const selfhelpcard = require("../Models/SelfHelpCard")
const dotenv = require("dotenv")
dotenv.config()

router.post('/AddCard', (req, res) => {


    try {

        grName = req.body.grName
        grPropertiesOne = req.body.grPropertiesOne
        grPropertiesTwo = req.body.grPropertiesTwo
        participants = req.body.participants
        ManagedBy = req.body.ManagedBy
        grLink = req.body.grLink


        const card = new selfhelpcard({

            grName,
            grPropertiesOne,
            grPropertiesTwo,
            participants,
            ManagedBy,
            grLink
        }
        )

        const newCard = card.save()

        res.json("Added Successfully")

    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
})

router.get('/GetCard', async (req, res) => {


    try {

        const cards = await selfhelpcard.find({});

        res.json(cards)

    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
})

module.exports = router