import SanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: '8cl6eu7r',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)