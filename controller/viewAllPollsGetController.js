const Poll = require('./../model/Poll');
exports.viewAllPollGetController = async (req, res, next) => {
  try {
    const polls = await Poll.find();
    console.log(polls);
    res.render('polls', { polls });
  } catch (e) {
    console.log(e);
  }
};
