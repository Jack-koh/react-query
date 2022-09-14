const names = [
  "Frozen yoghurt",
  "Ice cream sandwich",
  "Eclair",
  "Cupcake",
  "Gingerbread",
];
const todos = Array.from(new Array(100), (v, i) => ({
  id: i,
  name: names[i % 5] + " " + i,
  calories: (Math.random() * 10).toFixed(1),
  fat: (Math.random() * 10).toFixed(1),
  carbs: (Math.random() * 10).toFixed(1),
  protein: (Math.random() * 10).toFixed(1),
}));

module.exports = {
  todos,
};
