// CRUD

const connectDb = require("../database/connect");

/**
 * Create a new department in db.
 * @param {String} name
 */
async function createDepartment(name) {
    // connect to db
    // (get the connection instance)
    const connection = await connectDb();

    // run a query to insert dept based on the name
    const [result] = await connection.execute(
        "INSERT INTO `departments` (`name`) VALUES (?)",
        [name]
    );

    const createdId = result.insertId;

    return getDepartment(createdId);
}

async function getDepartment(id) {
    const connection = await connectDb();

    // run a query to insert dept based on the name
    const [result] = await connection.execute(
        "SELECT * from `departments` WHERE `id` = ?",
        [id]
    );

    if(result.length === 0){
        throw new Error('Department not found!!');
    }
    return result[0];
}

/**
 * Getting all the departments from db
 */
function getDepartments() {}

// [for the future]
// function updateDepartment(id, payload) {

// }

async function deleteAllDepartments() {
    const db = await connectDb();
    await db.query("SET FOREIGN_KEY_CHECKS=0");
    const results = await db.execute("TRUNCATE `departments`");
    await db.execute("SET FOREIGN_KEY_CHECKS=1;");
    return results;
}

module.exports = {
    createDepartment,
    getDepartments,
    deleteAllDepartments,
};
