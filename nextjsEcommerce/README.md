## Next Js Get Started

### Provides Sever side rendering and Client side

- Great for SEO
- Super fast
- future of React?

### How to Setup:-

npx create-next-app .

### Explain the created folders

`_app.js` -- This is the entry point of our app, the most important file in our next app

`index.js` -- This is the Home File of our project

### API folder --

Next.js Allows us create api in our projects.

Instead of creating a seperate Client nd Server side Next provides a built-in API system for the Project

### How Routes Work In Next Js

To create a new route in the next application all you have to do is create a new file in the pages folder

### How to create dynamic routes...

Here you create a folder with route name and an index file which directs defaultly to the folder as a route with out params.

There is no Html page in the public folder.
So in next it easier to add thing to the head of an application

## Add MaterialUI Theme

## Creating Light and Dark Mode

- First create a Store (using context api)
- Create Initial State
- create a reducer function
- create a StoreProvider Function using a useReducer and call its initial state and reducer function
- In the `_app` the application entry point store your component in a StoreProvider
- in the Layout file use a useContext to call the state and dispatch function
- and a condition to switch the theme colors
- save the store state as cookies using `js-cookie` to make the state persistance

## Connect Next to MongoDB

- Create DB file in utils folder -- `DB.js`
- connect to MongoDB using mongoose ORM
- `.env` to hid important connection details information
- Create Model Schema
- create a new api/product route using next-connect dependency
- save local data in mongodb `seed.js`

## Fetching DB in NextJs App

- using inbuilt getServerSideProps to fetch data from server side t client.
- And mongoose Lean to convert mongodb document into plain javascript

```
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products,
    },
  };
}
```

using the getServerSideProps define below in the home file we can fetch data from the db. But we have to prepend the recieve data with mongoose `lean()` method. Mongoose queries return an instance of mongoose Document class. Which are much heavier than regular js object. `lean` object option tells mongoose to skip instantiating a full mongoose document and give you the POJO

-Next we might get this error:

```
error - Error: Error serializing `.products[0]._id` returned from `getServerSideProps`
in "/".
```

- To solve this
