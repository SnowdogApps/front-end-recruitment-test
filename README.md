# Snowdog Front-end Recruitment test

* Please do not use fake Github accounts, we want to check your contributions history since we use and create open source.
* We are not answering any questions about this test. Everyone work with the same set of information, to let us fairly judge your work.
* If you think that some part of this test is weirdly old-fashioned or not described precisely, there is a very high chance it's on purpose, because we want to test you in a way worse environment than you will work on a daily basis.

## Before you start
Fork this repository, it needs to stay on Github, publicly available.

The test is based on [AdonisJS](https://adonisjs.com/) a full stack Node.js framework.

After running a `npm run dev`, you should see a start page on http://localhost:3333.

---

### Task 1
On [/bacon](http://localhost:3333/bacon) you should see a page with beautiful slices of fried bacon, that comes from external source.

Create bacon cloning logic and attach it to **Yeah, I want more bacon!** button.

### Task 2
Take a look at [design file](./design.png) and recreate it. Use any way of writing styles you are comfortable with and pick `Roboto` as the font family.

By default, Adonis support [PostCSS](https://docs.adonisjs.com/guides/assets-manager#setup-postcss), [SASS, Less and Stylus](https://docs.adonisjs.com/guides/assets-manager#setup-sass-less-and-stylus) you need to enable one of it, but it's just Webpack under the hood, so feel free to hook whatever you like the most.


### Task 3
Add JS validation to the checkout form created earlier.

### Task 4
Send form data to the `POST /order` endpoint and show success / error message based on API response.
