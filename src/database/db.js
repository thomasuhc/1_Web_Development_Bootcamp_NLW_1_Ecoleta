const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");



module.exports = db;

/*   db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    
    `)
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);

    `

    const values = [
        "https://www.aparasmacedo.com.br/wp-content/uploads/2018/12/venda_de_papelao_para_reciclagem_aparas_macedo.jpg",
        "Papersider",
        "Rua: Miracena, Chácaras Reunidas",
        "Numero 274",
        "Sao Paulo",
        "Sao Jose dos Campos",
        "Papeis e Papelao"
    ]

    function afterInsertData(err) {

        if(err) {
            return console.log(err);
        }

        console.log("Add to DB");
        console.log(this);

    }

    db.run(query, values, afterInsertData);


     db.all("SELECT * FROM places", function(err, rows){

        if(err) {
            return console.log(err);
        }

        console.log("Erro");
        console.log(rows);

    }) 

      db.run("DELETE FROM places WHERE id = ?", [11], function(err, rows){

        if(err) {
            return console.log(err);
        }

    console.log("Delete ok");
    console.log(rows);
    })

}) */


db.run("DELETE FROM places WHERE id = ?", [24], function(err, rows){

    if(err) {
        return console.log(err);
    }

console.log("Delete ok");
console.log(rows);
})