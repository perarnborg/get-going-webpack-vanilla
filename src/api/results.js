import * as promise from 'promiscuous';
import * as httpHelpers from '../utils/http-helpers';

const SEARCH = '//api.github.com/search/repositories';

export const listResults = (dataUrl) => {
    return new promise.default((resolve) => {
        httpHelpers.makeRequest('GET', SEARCH + '?q=vanilla')
            .then(data => {
                resolve(JSON.parse(data));
            });
    })
}
