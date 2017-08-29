import * as resultsApi from '../../api/results';
import * as templating from '../../utils/templating-helpers';

export const render = (containerNode, data) => {
    resultsApi.listResults()
        .then((results) => {
            containerNode.innerHTML = templating.render(require('html-loader!./start.html'), results);
            eventListeners();
        });
}

const clickBtn = () => {
    alert('Nicely clicked!');
}

const eventListeners = () => {
    document.querySelector('.start__button').addEventListener('click', clickBtn);
}
