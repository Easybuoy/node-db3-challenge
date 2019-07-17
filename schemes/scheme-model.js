const db = require("../data/dbConfig.js");

const find = async () => {
  return await db("schemes");
};

const findById = async id => {
  return await db("schemes").where({ id });
};

const add = async car => {
  return await db("schemes").insert(car);
};

const remove = async id => {
  return await db("schemes")
    .where({ id })
    .delete();
};

function update(updatedCar, id ) {
    return db('schemes')
      .where({ id })
      .update(updatedCar);
  }

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};