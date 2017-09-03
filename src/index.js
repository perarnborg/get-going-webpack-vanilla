import * as start from './components/start/start';
import * as partial from './components/partial/partial';

var def = {
    partial: partial.template
};

start.render(document.getElementById('app-get-going-webpack-vanilla'), def);
