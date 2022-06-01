const Poll = require('./../model/Poll');
exports.createPollPostController = async (req, res, _next) => {
  let { title, description, options } = req.body;
  console.log(options);

  options = options?.map((opt) => {
    return {
      name: opt,
      vote: 0,
    };
  });
  // console.log(option);
  let poll = new Poll({
    title,
    description,
    options,
  });
  console.log(poll);
  try {
    await poll.save();
    res.redirect('/');
  } catch (e) {
    console.log(e);
  }
};
