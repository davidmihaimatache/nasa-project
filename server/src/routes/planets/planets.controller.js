const { getAllPlanets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  console.log("HERE");
  return await res.status(200).json(await getAllPlanets());
}

module.exports = { httpGetAllPlanets };
