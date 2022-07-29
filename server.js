//Set Dependencies==================================================================

const express = require('express');
const fs = require('fs');
const { Pool } = require('pg');
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();
const {DATABASE_URL, NODE_ENV, PORT } = process.env;


//MiddleWare========================================================================

app.use(express.static("static"));
app.use(express.json());
app.use(cors())
dotenv.config();

//Connect Database==================================================================

// const dbConfig= {
//   connectionString: process.env.DATABASE_URL,
// }
//  if(process.env.NODE_ENV === 'production') {
//   dbConfig.ssl = {
//     rejectUnauthorized: false,
//   }
// }

    const pool = new Pool ({
        connectionString: process.env.DATABASE_URL,
        user: '1002c',
        database: 'Metroid',
        password: 'Zelda@1002',
        ssl: NODE_ENV === "production" ? {rejectUnauthorized: false} : false
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