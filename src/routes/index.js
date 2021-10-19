const userRouter = require('./user');
const messageRouter = require('./message');
const groupRouter= require('./group')
const peerRouter = require('./peer');
function route(app) {
    
    app.use('/user',userRouter);
    app.use('/message',messageRouter);
    app.use('/group',groupRouter);
    app.use('/peer', peerRouter);
}
module.exports = route;