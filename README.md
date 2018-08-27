-   BASIC RULES
    =>https://alligator.io/react/new-way-to-handle-events/
    =>https://github.com/airbnb/javascript/tree/master/react

-   add comment in webpack.config.dev and prod file
    => ModuleScopePlugin

1.  installation of react js
    =>npx create-react-app appname
    =>npm run eject
    => when we modify any of the default configurations to run eject command

2.  SASS/SCSS support
    =>https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc
    => install loader - npm install sass-loader node-sass --save-dev
    =>edit config/webpack.config.dev.js file
    =>copy test: /\.css$/, block and paste to create .scss
    =>add scss loader
    =>same process in config/webpack.config.prod.js
    =>rename css file to scss
    =>change import "./index.scss"; in index.js file

3.  Components
    =>create components folder inside src folder
    =>https://www.npmjs.com/package/new-component
    =>Using command new-component Header
    npm new-component Header

4.  Routing
    => https://reacttraining.com/react-router/web/example/basic
    =>npm install react-router-dom --save
    =>add react-router-dom in App.js file
    =>ex : import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

5.  Bootstrap in webpack
    =>https://getbootstrap.com/docs/4.0/getting-started/webpack/
    =>npm install bootstrap --save
    =>npm install --save jquery popper.js
    =>import bootstrap and js file in project entry point(index.js)
    =>import "bootstrap/dist/css/bootstrap.min.css"; import "bootstrap/dist/js/bootstrap.min.js";
    =>jquery use like : import $ from "jquery" any component

6.  Redux
    =>https://medium.com/@riveryang/react-redux-tutorial-for-beginners-2018-with-cutting-edge-versions-of-simple-examples-f1b20e93bdf6
    =>mostly use for managing application state
    =>npm install redux react-redux redux-promise-middleware redux-thunk --save
    =>structure
    1)actions
    2)containers
    3)reducers

7.  API CALL
    =>npm install axios --save

8.  REDUX FORM
    =>npm install redux-form --save
    => npm install classnames --save //simple package
    =>add reducer in combinereducer
    =>reducers/index.js file
    =>Use Field for form
    =>create custom component for validation
    =>services/formvalidation.js
