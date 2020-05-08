# Project Starter Template

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and autoprefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 12 recommended, tested with 12.16.3)
- [Git](https://git-scm.com/)

1. **Download or clone the template.**

```bash
git clone git@github.com:rafibomb/gulp-sass-handlebars-template.git your_project_name
```

2. If you downloaded, unzip and rename the file to your project name. If not, skip this step :)

3. Then open the folder in your command line, and install the needed dependencies:

```bash
cd your_project_name
yarn
```

4. Run `yarn start` to run Gulp. Your compiled site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

You're ready to go!

---

To create compressed, production-ready assets, run `yarn run build`.

## Dev Dependencies

#### SVG injector

[npm](https://www.npmjs.com/package/svg-injector)

We are using SVG injector to allow SVG's to be manipulated with CSS from a simple `<img>` tag. Pretty neat!

**Usage**
Add the `inject-svg` attribute to any `img` where you'd need to manipulate with CSS.

`<img inject-svg src="{{root}}assets/img/icons/test-icon.svg" alt="test icon">`

This will apply the `.injected-svg` class to the SVG. Any class you add to the img tag will be applied to the SVG.

---

#### AOS (Animate on Scroll)

[Website](https://michalsnik.github.io/aos/)

**Usage**
Add `data-aos` along with an animation name to an element. Delay is set in ms.

`<div data-aos="fade-up" data-aos-delay="50"></div>`
