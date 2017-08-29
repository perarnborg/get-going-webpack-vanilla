var doT = require('dot');

export const render = (template, data) => {
    let templateFn = doT.template(template);
    return templateFn(data);
}
