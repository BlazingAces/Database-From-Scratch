//Set Dependencies==================================================================

const express = require('express');
const fs = require('fs');
const { Pool } = require('pg');
const cors = require("cors")
const app = express();
const PORT = process.env.PORT;


//MiddleWare========================================================================

app.use(express.static("static"));
app.use(express.json());
app.use(cors())

//Connect Database==================================================================

    const pool = new Pool ({
        user: '1002c',
        database: 'Metroid',
        password: 'Zelda@1002'
    })

//GET===============================================================================

app.get("/game", async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM game;')
          res.send(data.rows);
        } catch (error) {
          res.send("Data Not Found").status(400);
        }
})



//Listen for the server=============================================================

app.listen(PORT, () => {
    console.log("Listening in on PORT 8000")
});