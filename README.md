# Monorepo

This is a POC of multiple Rewired Create React Apps using a shared component library all wrapped up in a Yarn Workspace.

There are three apps contained in the root workspace. Each app is basically the same. They were created with Creat React App version 1.

To demonstrate ways of sharing code they each import a shared secret from the ```shared``` folder and use a Header component from the ```ui-kit``` library (this is the imaginary equivalent of wabelane).

## Based on:

* [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
* [Create React App](https://github.com/facebook/create-react-app)
* [Create React App Rewired](https://github.com/timarney/react-app-rewired)


## Currently supporting:

* Config overrides
* Component library
* Shared code
* .editorconfig
* ESlint

## Getting started
Use the correct version of node (11.0.0). Older versions may work but have not been tested. If you have NVM you can:
```
nvm use
```

Install the project dependencies from the root folder:
```
yarn
```

Build the ```ui-kit``` library:
```
yarn build-ui-kit
```

Start the apps:
```
yarn start1
yarn start2
yarn start3
```

### Building UI Kit and local development
As the apps import from the lib folder of UI-Kit it needs to be built. In a prod setup this should be a babel compilation however at the moment it us set up to copy the js files and ignore the test files.

As the apps use the default react-scripts from CRA to run locally they will pick up changes from the shared files and refresh automatically. They will only refresh when the ui-kit library is built. A watch task could be set up to automate this.


## To investigate:

* ENV Config and Featureflags
* Versioning of shared components - if that's required
* Unit tests - jest config
* CSS - styled components
* Typescript
* Theming / partners
* Prettier
* Build tasks
* Accessibility tests

<!--
## Stuff it might be worth adding

It might be worth adding some other stuff to one of the apps so it becomes a better boilerplate for future projects

* Redux
* Sagas
* Reselect

-->