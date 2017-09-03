var doT = require('dot');

export const render = (template, def, data) => {
    let templateFn = doT.template(template, null, def);
    return templateFn(data);
}
