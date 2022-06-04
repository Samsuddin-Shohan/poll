const Poll = require('./../model/Poll');
exports.viewPollPostController = async (req, res, next) => {
  let id = req.params.id;
  let optionId = req.body.option;
  // console.log(id, optionId);
  try {
    let poll = await Poll.findById(id);
    let options = [...poll.options];

    let index = options.findIndex((o) => o.id === optionId);
    options[index].vote = options[index].vote + 1;
    console.log(poll);

    let totalVote = parseInt(poll.totalVote) + 1;
    console.log('helllllo', totalVote);

    await Poll.findOneAndUpdate(
      { _id: poll._id },
      { $set: { options, totalVote } }
    );
    res.redirect('/polls/' + id);
  } catch (e) {
    console.log(e);
  }
};
