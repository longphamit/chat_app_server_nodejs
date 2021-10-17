module.exports = {
    multipleMongooseObject: function (mongooseArray) {
        if(mongooseArray !== null)
            return mongooseArray.map((mongoose) => mongoose.toObject());
        return null;
    },
    mongooseObject: (mongoose) => {if(mongoose !== null) return mongoose.toObject();
        return null;
    },
};
