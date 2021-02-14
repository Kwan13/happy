import React, { useState, useRef, useCallback, ChangeEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useMapEvents, Marker } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
import happyMapIcon from '../../components/Map/happyIcon';
import InputText from '../../components/InputText';
import TextArea from '../../components/TextArea';
import InputFile from '../../components/InputFile';
import Button from '../../components/Button';

import { Container, Content, MapContainer } from './styles';

interface FormData {
  name: string;
  about: string;
  whatsapp: string;
  images: File[];
  instructions: string;
  opening_hours: string;
}

const CreateOrphanage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [open_on_weekends, setOpen_on_weekends] = useState(true);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleSubmit = useCallback(
    (data: FormData, { reset }) => {
      console.log({
        ...data,
        images,
        position,
        open_on_weekends,
      });
      reset();
    },
    [position, images, open_on_weekends],
  );

  function HandleMapClick() {
    useMapEvents({
      click: e => {
        const { lat, lng } = e.latlng;

        setPosition({
          latitude: lat,
          longitude: lng,
        });
      },
    });
    return null;
  }

  function handleSelecImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <MapContainer>
              <Map style={{ width: '100%', height: 280 }}>
                <Marker
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
                <HandleMapClick />
              </Map>
              <span>Clique no mapa para adicionar a localização</span>
            </MapContainer>

            <label htmlFor="">Nome</label>
            <InputText name="name" />

            <label htmlFor="about">
              Sobre <span>Máximo de 300 caracteres</span>
            </label>
            <TextArea name="about" id="about" maxLength={300} />

            <label htmlFor="whatsapp">Número de Whatsapp</label>
            <InputText name="whatsapp" id="whatsapp" />

            <label>Fotos</label>
            <div className="images-container">
              {previewImages.map(image => {
                return <img key={image} src={image} alt="test" />;
              })}
              <label htmlFor="images[]" className="content-input-file">
                <FiPlus size={24} color="#15b6d6" />
              </label>
            </div>
            <InputFile
              name="images"
              id="images[]"
              onChange={handleSelecImages}
            />
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <label htmlFor="instructions">Instruções</label>
            <TextArea name="instructions" id="instructions" />

            <label htmlFor="opening_hours">Horário de visitas</label>
            <InputText name="opening_hours" id="opening_hours" />

            <label htmlFor="">Atende fim de semana?</label>
            <div className="content-button-group">
              <button
                type="button"
                onClick={() => setOpen_on_weekends(true)}
                className={
                  open_on_weekends ? 'content-button-group-active' : ''
                }
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => setOpen_on_weekends(false)}
                className={
                  open_on_weekends ? '' : 'content-button-group-active'
                }
              >
                Não
              </button>
            </div>
          </fieldset>

          <Button type="submit">Confirmar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateOrphanage;
