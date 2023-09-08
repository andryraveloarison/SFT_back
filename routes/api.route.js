const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'API du projet SFT 🚀' });
});

module.exports = router;
