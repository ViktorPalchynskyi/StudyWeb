const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
   req.someInfo = 'Nikita lox';
   next();
});

router.get('/', (req, res) => {
   res.send(`
      <h1>${req.someInfo}</h1>
      <img src='https://sun1-14.userapi.com/impg/O933dE14OQQ0L-PQzPvIVOK9LSyPJc5HfZ0Rtg/MmH1-zs041I.jpg?size=1968x2160&quality=95&sign=4847c0b5f672a95c7eb9c5e5d3e7ea99&type=album'>
   `)
});

module.exports = router;