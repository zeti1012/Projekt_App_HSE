const { hash } = require('bcryptjs');
const db = require('../db');
const {sign} = require('jsonwebtoken');
const {SECRET} = require('../constants')


exports.getUsers = async (req, res) =>{
  try {
    const {rows} = await db.query('Select id, benutzername,benutzertyp from benutzer')
    return res.status(200).json({
      success: true,
      benutzer: rows
    })
  } catch (error) {
    console.error(error.message)
  }
}

exports.register = async (req, res) =>{
  const {benutzername, kennwort,benutzertyp} = req.body
  try {
    const hasedPassword = await hash(kennwort, 10)
    await db.query("Insert into benutzer (benutzername, kennwort, benutzertyp) values ($1,$2,$3)",[benutzername,hasedPassword,benutzertyp])
    return res.status(201).json({
      success: true,
      message: "Die Registrierung war erfolgreich!"
    })
    
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({
      error: error.message
    })
    }
}

exports.login = async(req, res) =>{
  let benutzer = req.benutzer
  let payload = {
    id: benutzer.id,
    benutzername: benutzer.benutzername
  }
  try {
    const token = await sign(payload, SECRET)
    return res.status(200).cookie('token', token,{httpOnly: true}).json({
      success: true,
      message: 'Erfolgreich eingeloggt'
    })
  } catch (error) {
    console.error(error.message)
    
  }
}

exports.logout = async (req,res)=>{
   
  try {
    return res.status(200).clearCookie('token',{httpOnly: true}).json({
      success: true,
      message: 'Erfolgreich ausgeloggt'
    })
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({
      error: error.message
    })
    
  }
}