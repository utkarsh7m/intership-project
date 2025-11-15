import express from 'express';
import { createPD, getPDReport } from '../controller/pdMaster.js';
import { createRD, getRDReport } from '../controller/rdMaster.js';

const route = express.Router();

route.post('/api/pdMaster', createPD);
route.post('/api/rdMaster', createRD);

route.get('/api/pdmReport', getPDReport);
route.get('/api/receiveReport', getRDReport);

export default route;
