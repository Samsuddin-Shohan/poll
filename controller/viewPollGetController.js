exports.viewPollGetController = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  res.render('home');
};
