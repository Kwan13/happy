import express from 'express';

import orphanagesRouter from './orphanages.routes';

const routes = express();

routes.use('/orphanages', orphanagesRouter);

export default routes;
