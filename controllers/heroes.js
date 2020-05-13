const heroesList = require('../json/heroesList.json');

module.exports = {
  find(req, res) {
    res.json(heroesList.heroes);
  },
  get(req, res) {
    const id = Number(req.params.heroId);
    const [data] = heroesList.heroes.filter((hero) => hero.id === id);
    res.json(data);
  },
};
