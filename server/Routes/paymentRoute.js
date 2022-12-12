import express from 'express';
import payment from '../Controllers/payment.js';

const router = express.Router();

router
  .post('/', payment.onCreatPayment)
  

export default router;