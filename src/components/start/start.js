import * as resultsApi from '../../api/results';
import * as templating from '../../utils/templating-helpers';

export const template = require('html-loader!./start.html');

export const render = (containerNode, def) => {
    resultsApi.listResults()
        .then((results) => {
            containerNode.innerHTML = templating.render(template, def, results);
            eventListeners();
        });
}

const clickBtn = () => {
    alert('Nicely clicked!');
}

const eventListeners = () => {
    document.querySelector('.start__button').addEventListener('click', clickBtn);
}
