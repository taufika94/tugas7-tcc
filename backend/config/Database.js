import { Sequelize } from "sequelize";

// production
// const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
//     host: "104.197.117.136",
//     dialect: "mysql",
// });

// development
const db = new Sequelize("RECOVER_YOUR_DATA", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
