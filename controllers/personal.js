const personalList = require('../json/personalList.json');
let personals = personalList.personals;

module.exports = {
  find(req, res) {
    res.json(personals);
  },
  get(req, res) {
    const id = Number(req.params.personalId);
    const [data] = personals.filter((personal) => personal.id === id);
    res.json(data);
  },
  add(req, res) {
    const last = personals.slice().reverse();
    const nextId = last[0].id + 1;
    const newWorkout = {
      id: nextId,
      workout: req.body.workout,
    };
    personals.push(newWorkout);
    res.json(personals);
  },
  update(req, res) {
    const id = Number(req.params.personalId);
    const [personal] = personals.filter((list) => list.id === id);
    personal.workout = req.body.workout;
    res.json(personals);
  },
  delete(req, res) {
    const id = Number(req.params.personalId);
    const newPersonals = personals.filter((list) => list.id !== id);
    personals = newPersonals;
    res.json(personals);
  },
};
