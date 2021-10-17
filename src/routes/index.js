const userRouter = require('./user');
const messageRouter = require('./message');
function route(app) {

    app.use('/user',userRouter);
    app.use('/message',messageRouter);


}
module.exports = route;