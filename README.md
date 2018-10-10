# Frontend Library

This set of npm packages are shared across Terminal services.

## Stylesheets library

This library contains no logic other than Sass variables and mixins.

You will be working with the `projects/stylesheets/src/assets/` directory. This library is designed to use the least CSS classes possible, so keep this in mind when editing the library.

**This library holds the styles shared across all Terminal services. Add service-specific styles in the corresponding service assets directory.**

## Components library

Shared components across all Terminal services. **Keep in mind that editing any of these components will change the look and behavior of the Terminal service that uses the component version.**

Use the components in your project by simply adding in your `app.component.html`:

```
<terminal-lib-top-menu></terminal-lib-top-menu>
<terminal-lib-header></terminal-lib-header>
```

### Adding a library component

In your terminal run:

```
ng generate component <component-name> --project=components
```

Don't forget to manually change the styles format of your component to `.scss`. Add this line to use the shared styles: 

```scss
@import "@terminalsystems/stylesheets/assets/sass/styles";
```

# Package the library

### IMPORTANT

Each time you package a library, change the library version by editing the `package.json` file of the corresponding library: 

```json
{
  "name": "@terminalsystems/stylesheets",
  "version": "0.0.1", // <== HERE
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0"
  }
}
```

Package the libraries by running:

```
npm run package:all
```

Or choose one of the libraries:

```
npm run package:stylesheets

npm run package:component
```

# Publish the library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
