const Poll = require('./../model/Poll');
exports.viewAllPollGetController = async (req, res, next) => {
  try {
    const polls = await Poll.find();
    console.log(polls[0].options);
    res.render('home');
  } catch (e) {
    console.log(e);
  }
};
