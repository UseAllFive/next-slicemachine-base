This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prismic Setup

1. First, run the following in the root of the project. This will log you into Prismic and allow you to create a new repository or use an existing one. The repositories it creates for you are kind of special in that it won't work with legacy repositories that didn't setup with Slice Machine.

```
npx @slicemachine/init
```

2. Add all of the following content types in Prismic that are located in the `customtypes` directory. You can just copy and paste the JSON into the JSON editor in Prismic. If you fail to do this then you might get some errors that

- `header`: Singleton with links and social icons
- `footer`: Singleton with links
- `page`: Repeatable content type for creating custom pages

## Getting Started

First, run the development server:

```bash
yarn install
```

The following will concurrently run Slice Machine UI and Storybook together.

```
yarn dev
```

Development Site: [http://localhost:3000](http://localhost:3000)
Slice Machine UI: [http://localhost:9999](http://localhost:9999)
Storybook: [http://localhost:6006](http://localhost:6006)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
