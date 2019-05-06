'use strict';

module.exports = function(Review) {
    Review.observe('after save', (ctx, next) => {
        if (ctx.instance) {
            console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);
            setTimeout(next, 2000);
        }
    });
};
