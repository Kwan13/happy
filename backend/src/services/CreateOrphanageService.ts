import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';

interface Request {
  name: string;
  about: string;
  latitude: number;
  longitude: number;
  whatsapp: string;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: Array<{
    path: string;
  }>;
}

class CreateOphanageService {
  public async execute({
    name,
    about,
    latitude,
    longitude,
    instructions,
    open_on_weekends,
    opening_hours,
    whatsapp,
    images,
  }: Request): Promise<Orphanage> {
    const orphanageRepository = getRepository(Orphanage);

    const orphanage = orphanageRepository.create({
      name,
      about,
      latitude,
      longitude,
      instructions,
      open_on_weekends,
      opening_hours,
      whatsapp,
      images,
    });

    await orphanageRepository.save(orphanage);

    return orphanage;
  }
}

export default CreateOphanageService;
