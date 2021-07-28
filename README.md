# Snowdog Front-end Recruitment test

* Please use real Github accounts, we want to check your contributions history since we use, create and contribute to open source.
* We are not answering any questions about this test. Everyone work with the same set of information, to let us fairly judge your work.
* The test is designed in a way, that can confuse you or seems weird, because we want to test you in a way worse environment than you will work on a daily basis. It's also not a representation of the tech stack we are using in real projects.

## Before you start
* Fork this repository, it needs to stay on Github, publicly available.
* The test is based on [AdonisJS](https://adonisjs.com/) a full stack Node.js framework, but you don't need to write any backend stuff, nor have any experience with Adonis or other similar framework.
* After installing the dependencies and running `npm run dev`, you should see a start page on http://localhost:3333. If something is wrong, you probably use a wrong version of Node.js.

---

### Task 1
On [/bacon](http://localhost:3333/bacon) you should see a page with beautiful slices of fried bacon, that comes from external source.

Create bacon cloning logic and attach it to **Yeah, I want more bacon!** button.

### Task 2
Take a look at [design file](./design.png) and recreate it. Use any way of writing styles you are comfortable with and pick `Roboto` as the font family.

By default Adonis support [PostCSS](https://docs.adonisjs.com/guides/assets-manager#setup-postcss), [SASS, Less and Stylus](https://docs.adonisjs.com/guides/assets-manager#setup-sass-less-and-stylus) you need to enable one of it, but it's just Webpack under the hood, so feel free to hook whatever you like the most.

### Task 3
Provide simple JS validation for checkout form created earlier.

### Task 4
Send form data to the `POST /order` endpoint and show success / error message based on API response.

Accepted data formats:
* Postal code: 00000
* Phone number: 000000000
* Credit card: 0000000000000000
* CVV: 000
* Exp. date: 00/00

---

**Good luck 🤗**
