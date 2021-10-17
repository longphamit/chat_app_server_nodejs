const userRouter = require('./user');
const messageRouter = require('./message');
const groupRouter= require('./group')
function route(app) {

    app.use('/user',userRouter);
    app.use('/message',messageRouter);
    app.use('/group',groupRouter);

}
module.exports = route;