# Snowdog Front-end Recruitment test

## Rules
* Please do not use fake Github accounts, we want to check your contributions history since we do a lot in open source.
* Remember to commit changes after every task.
* We are not answering any questions about this test. Everyone work with the same set of information, to let us fairly judge your work.

## Before you start
Fork this repository, it needs to stay on Github, available for everyone.

The test is based on [Google Web Starter Kit](https://github.com/google/web-starter-kit) v0.6.5

Install the local dependencies:
```sh
$ npm install
```

Run app:
```sh
$ npm run dev
```
Note: if you have the Yarn package manager installed, you can just run yarn. Web Starter Kit includes a yarn.lock file that will be used here.

You should end with a working test page on http://localhost:1234/index.html.

---

### Task 1
Add [this repo](https://github.com/SnowdogApps/front-end-recruitment-test-submodule) as submodule at `/submodule` folder, then run `npm run submodule` to add symlink.

[Here](http://localhost:1234/submodule.html) you should see a beautiful page with slices of fried bacon.

Add JS to clone bacon image and attach this action to **Yeah, I want more bacon!** button.

### Task 2
Add tab **Checkout** that reflects design from `/projects/checkout.png`.

Use SCSS to write your styles.

### Task 3
Add simple JS validation to checkout form created earlier.

Remember to show success/error message on form submit.
