import express from 'express';
import { getDetails, sendDetails } from '../controllers/contactControllers.js';

const router = express.Router();

router.route('/send').post(sendDetails);
router.route('/').get(getDetails);

export default router;