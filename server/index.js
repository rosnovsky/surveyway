const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyBarser = require('body-parser');
const passport = require("passport");

require("./models/user");
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);
const app = express();



app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);


app.use(bodyBarser.json());
app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
