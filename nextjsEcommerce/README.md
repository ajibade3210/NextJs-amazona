This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next Js

Provides Sever side rendering and Client side

- Great for SEO
- Super fast
- future of React?

How to Setup:-
npx create-next-app .

Explain the created folders

\_app.js -- This is the entry point of our app, the most important file in our next app

index.js -- This is the Home File of our project

Api folder --
Next.js Allows us create api in our projects...
Instead of creating a seperate Client nd Server side Next provides an inbuilt Api system for the Project

How Routes Work In Next Js
To create a new route in the next application all you have to do is create a new file in the pages folder

How to create dynamic routes...
Here you create a folder with route name and an index file to direct to the folder as a route with out params

The is no Html page in the public folder....
So in next it easier to add thing to the head of an application

## Creating Light and Dark Mode

- First create a Store (using context api)
