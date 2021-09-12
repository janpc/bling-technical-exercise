import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: import.meta.env.VITE_APP_UNSPLASH_ACCES_KEY
});

export async function getUnsplashPhotos() {
  try {
    const pictures = await unsplash.photos.list({perPage: 30});
    return pictures.response.results;
  } catch (err) {
    console.error(err);
  }
}