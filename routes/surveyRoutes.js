const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');

const Survey = mongoose.model('survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

module.exports = app =>{

  app.get('/api/surveys/thanks', (req, res) => {
    res.send("Thanks for voting!");
  })

  app.post(
    '/api/surveys', requireLogin, requireCredits, async (req, res) => {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey ({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });
    
      const mailer = new Mailer(survey, surveyTemplate(survey));
      try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      req.send(user);
      } catch (err) {
        res.status(422).send(err);
      }

    });
  };

  