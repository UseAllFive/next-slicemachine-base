## Prerequisites

- [Next.js React Framework](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Slice Machine](https://www.slicemachine.dev/)
- [Storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/) (Optional)

## Prismic Setup

1. First, run the following in the root of the project. This will log you into Prismic and allow you to create a new repository or use an existing one. The repositories it creates for you are kind of special in that it won't work with legacy repositories that didn't setup with Slice Machine.

```
npx @slicemachine/init
```

2. Content types should be added automatically via the `customtypes` directory when you first start up Slice Machine UI. Once you're setup after the next few steps, visit the Slice Machine UI and ensure that the follwing content types are added to the UI. You must then click "Push to Prismic" from the UI to ensure those get deployed.

- `header`: Singleton with repeatable links and social links
- `footer`: Singleton with repeatable links
- `page`: Repeatable content type with uid for page creation

## Getting Started

First, run the development server:

```bash
yarn install
```

The following will concurrently run Slice Machine UI and Storybook together.

```
yarn dev
```

- Development Site: [http://localhost:3000](http://localhost:3000)
- Slice Machine UI: [http://localhost:9999](http://localhost:9999)
- Storybook: [http://localhost:6006](http://localhost:6006)

## Caveats

There are a few caveats that you should be aware of before creating a Slice Machine project.

1. Storybook Controls are missing from Slice Machine UI generation. Anytime you create a new slice or content type in Slice Machine it will generate a new story with mock data. _You must make sure that if you manually add controls to the stories, you shouldn't resave that component via Slice Machine's UI or it will be overwritten_ I [reached out to them](https://github.com/prismicio/slice-machine/issues/441) about fixing this but they're choosing not too.

2. Mock Data could be handled better and is automatically generated from Slice Machine UI whether you like it or not. It would be nice to be able to control what mock data gets added. You can only really add custom mock text on "Key Text" fields which is annoying. I hope they improve the controlability of mock data in later versions.

3. Every field/content type must be added in Slice Machine UI and cannot be updated in the Prismic repository.

4. You don't have the option to open links in a new window if it's an external link. Instead an `externalLinkComponent` must be set on the `PrismicProvider` in `_app.js`. This contains the global link component but will open it in a new window instead.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
