import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2dqs8q27',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "sknvfhhhoNsbfOmw9bf5roGMwraOAKAHSG2IlZanBHBgOcSdzDolBWI9lYKIp4hxwManSrkmeUnMuXTzUmhh7CHyAJiu8aGvydH8pZF1HE44rVhqeyTrautMQXljAee8pwQrAf3JDlkT79lJ2wy2ED3igL8Dfnk8RnSol80GKxrOiBFsbXer"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);