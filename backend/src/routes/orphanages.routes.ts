import { Router } from 'express';

import { getRepository } from 'typeorm';
import multer from 'multer';

import Orphanage from '../models/Orphanage';
import AppError from '../errors/AppError';

import CreateOphanageService from '../services/CreateOrphanageService';
import uploadConfig from '../config/upload';
import orphanagesView from '../views/orphanagesView';

const orphanagesRouter = Router();
const upload = multer(uploadConfig);

orphanagesRouter.post(
  '/',
  upload.array('images'),
  async (request, response) => {
    const {
      name,
      about,
      latitude,
      longitude,
      whatsapp,
      instructions,
      open_on_weekends,
      opening_hours,
    } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const createOrphanage = new CreateOphanageService();

    const orphanage = await createOrphanage.execute({
      name,
      about,
      latitude,
      longitude,
      whatsapp,
      instructions,
      open_on_weekends,
      opening_hours,
      images,
    });

    return response.status(201).json(orphanage);
  },
);

orphanagesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = await orphanagesRepository.findOne(id);

  if (!orphanage) {
    throw new AppError('this orphanage does not exist.');
  }

  return response.status(200).json(orphanagesView.render(orphanage));
});

orphanagesRouter.get('/', async (request, response) => {
  const orphanagesRepository = getRepository(Orphanage);

  const orphanages = await orphanagesRepository.find();

  return response.status(200).json(orphanagesView.renderMany(orphanages));
});

export default orphanagesRouter;
