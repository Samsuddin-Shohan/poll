const Poll = require('./../model/Poll');
exports.viewPollPostController = async (req, res, next) => {
  let id = req.params.id;
  let optionId = req.body.option;
  try {
    const polls = await Poll.find();
    res.render('polls', { polls });
  } catch (e) {
    console.log(e);
  }
};
