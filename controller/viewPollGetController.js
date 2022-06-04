const Poll = require('./../model/Poll');

exports.viewPollGetController = async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const poll = await Poll.findById(id);
    // console.log(poll);
    let options = [...poll.options];
    // console.log(options);
    let result = [];
    options.forEach((option) => {
      let percantage = (option.vote * 100) / poll.totalVote;

      // result.push({
      //   option._doc,
      //   percantage
      // })
      result.push({
        ...option._doc,
        percantage: percantage ? percantage : 0,
      });
      console.log(result);
    });
    res.render('singlePoll', { poll, result });
  } catch (e) {
    console.log(e);
  }
};
