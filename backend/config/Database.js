import { Sequelize } from "sequelize";

const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
    host: "34.71.170.158", //104.197.117.136
    dialect: "mysql",
});

export default db;