const { User, Flashcard } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    flashcards: async () => {
      return await Flashcard.find();
    },
    flashcard: async (parent, { _id }) => {
      return await Flashcard.findById(_id).populate("createdBy");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "flashcards"
        );
        return user;
      }

      throw AuthenticationError;
    },
    users: async () => {
      return await User.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addCard: async (parent, { flashcard }, context) => {
      if (context.user) {
        const flashcard = new Flashcard({ flashcard });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { flashcard },
        });

        return flashcard;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    updateCard: async (parent, { _id }) => {
      return await Flashcard.findByIdAndUpdate(_id, { new: true });
    },
    removeCard: async (parent, { _id }) => {
      return Flashcard.findOneAndDelete({ _id });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
