import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'wm4z0px7',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-07', // use current date (YYYY-MM-DD) to target the latest API version
    // token: 'skegkVeuYftp1vHHUuvGdWb7oBWoCjjeC4296KyjRzaGXTqEbmbtqlM8dK7n1ux2bzsXzdtpY5yJ6msEUJeBAWNvNyUoaJ9XqnafeQh3towdLecSFu11d6PWGbXOCFQDn6d3PpKkvPY8pk6ShR57YfkUtiIGXXz8CKZN5PVOXwckmcQ5BRNC'
  })

  const builder = imageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source)
  