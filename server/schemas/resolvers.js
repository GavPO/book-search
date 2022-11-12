const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
    }
  },
  Mutation: {
    
  },
};

module.exports = resolvers;
