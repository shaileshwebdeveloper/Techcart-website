const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://saikiran11471:saikiran11471@cluster0.4vrkygp.mongodb.net/GreekBuying?retryWrites=true&w=majority");
};
