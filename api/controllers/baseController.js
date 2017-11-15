module.exports.currentTime = (req, res) => {
  let d = (new Date());
  let currentTime = d.getHours() + ":" + d.getMinutes();
  res.json(currentTime);
}

module.exports.currentMonth = (req, res) => {
  let currentMonth = (new Date()).getMonth()+1;
  res.json(currentMonth);
}

module.exports.currentYear = (req, res) => {
  let currentYear = (new Date()).getFullYear();
  res.json(currentYear);
}