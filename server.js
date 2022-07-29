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
        connectionString: process.env.DATABASE_URL,
        user: '1002c',
        database: 'Metroid',
        password: 'Zelda@1002',
        ssl: {
          rejectUnauthorized: false
        }
    })

//GET===============================================================================

app.get("/game", async (req, res) => {
    try {
        const client = await pool.connect();
        const data = await client.query('SELECT * FROM game;')
          res.send(data.rows);
        } catch (error) {
          console.error(error);
          res.send("Error" + error);
        }
})



//Listen for the server=============================================================

app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
});