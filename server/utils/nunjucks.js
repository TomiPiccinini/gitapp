const nunjucks = require('nunjucks');

function init({ express, viewsPath }) {
    const env = nunjucks.configure(viewsPath, {
        autoescape: true,
        express,
    });

    env.addFilter('formatDate', date => date);
    env.addFilter('friendlyDate', date => date);

    return env;
}

module.exports = {
    init,
};
