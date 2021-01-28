const {Router} = require('express');
const Order = require('../models/order');
const router = Router();

router.get('/', async (req, res) => { 
   res.render('orders', {
      isOrder: true,
      title: 'Заказы'
   });
});

router.post('/',async (req, res) => { 
   try{
      const user = await req.user
      .populate('cart.items.courseID')
      .execPopulate();

      const courses = user.cart.items.map(i => ({
         count: i.count,
         course: {...i.courseId._doc}
      }));

      const order = new Order({
         user: { 
            name: req.user.name,
            userId: req.user
         }, 
         courses 
      });

      await order.save();
      await req.user.clearCart();

      res.redirect('/orders');
   } catch(e) { 
      console.log(e);
   }
});

module.exports = router;