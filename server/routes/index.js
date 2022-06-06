const express = require("express");
const { getUsers, register } = require("../controllers/auth");
const router = express.Router();
const db = require("../db");
const { validationMiddleware } = require("../middleware/validation-middleware");
const { registerValidation } = require("../validators");

//get Bauteileinfo
router.get('/api/:id', async (req, res)=>{
    try {
    
        const id = req.params.id;
        const results = await db.query("select * from bauteile where id=$1", [id]) 

        res.status(200).json({
            status: "success",
            data: {
                bauteil: results.rows
            }
        })
        
    } catch (err) {
        console.error(err.message)
    }
});

//get Historie
router.get('/api/:id/historie', async (req, res)=>{
    try {
    
        const id = req.params.id;
        const results = await db.query("select * from aufgaben where bauteil_id=$1", [id]) 

        res.status(200).json({
            status: "success",
            data: {
                historie: results.rows
            }
        })
        
    } catch (err) {
        console.error(err.message)
    }
});

//get Benutzetyp zur Darstellung der Seite
router.get('/api/:benutzername/benutzertyp', async (req, res)=>{
    try {
        
        const benutzername = req.params.benutzername;
        const results = await db.query("select * from benutzer where benutzername=$1", [benutzername])
        res.status(200).json({
            status: "success",
            data: {
                benutzertyp: results.rows[0].benutzertyp
            }
        }) 
    } catch (err) {
        console.error(err.message)
    }
});



//get Benutzer

router.get('/get-benutzer', getUsers)

//Post Benuter/Passwort
router.post('/register', registerValidation, validationMiddleware, register )


module.exports = router;