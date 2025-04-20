import { Sequelize } from "sequelize";

const db = new Sequelize("notes_tara", "root", "", {
    host: "34.55.111.115", //104.197.117.136
    dialect: "mysql",
});

export default db;