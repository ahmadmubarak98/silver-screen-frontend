if (process.env.NODE_ENV === "production") {
  // disable redux devtools in production
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
