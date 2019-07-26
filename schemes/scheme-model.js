const db = require("../data/dbConfig.js");

const find = async () => {
  return await db("schemes");
};

const findById = async id => {
  return await db("schemes").where({ id });
};

findSteps = async id => {
  return await db("schemes")
    .select("schemes.id", "scheme_name", "step_number", "instructions")
    .join("steps", "schemes.id", "scheme_id")
    .where({ scheme_id: id });
};

const add = async car => {
  return await db("schemes").insert(car);
};

const remove = async id => {
  return await db("schemes")
    .where({ id })
    .delete();
};

function update(updatedCar, id) {
  return db("schemes")
    .where({ id })
    .update(updatedCar);
}

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findSteps
};
