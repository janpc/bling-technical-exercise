import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: import.meta.env.VITE_APP_UNSPLASH_ACCES_KEY
});

export async function getUnsplashPhotos({page}) {
  try {
    const pictures = await unsplash.photos.list({page: page, perPage: 30});
    return pictures.response.results;
  } catch (err) {
    console.error(err);
  }
}

export async function searchPhotos({ query, page }) {
  try {
    const pictures = await unsplash.search.getPhotos({query: query, page: page, perPage: 30});
    return pictures.response.results;
  } catch (err) {
    console.error(err);
  }
}
