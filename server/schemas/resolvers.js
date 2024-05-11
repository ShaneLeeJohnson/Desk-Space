const { User, Flashcard } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    flashcards: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        return await User.find({_id:context.user._id}).populate('flashcards');
      } throw AuthenticationError;
    },
    flashcard: async (parent, { _id }) => {
      return await Flashcard.findById(_id).populate("createdBy", null, null, {strictPopulate:false});
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
    addCard: async (parent, args, context) => {
      if (context.user) {
        const flashCard = await Flashcard.create({...args});

        const user = await User.findByIdAndUpdate(
          context.user._id,
          {
            $push: { flashcards: flashCard._id },
          },
          { new: true }
        );

        return user;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          context.user._id,
          { $set: { ...args } },
          {
            new: true,
          }
        );
      }

      throw AuthenticationError;
    },

    updateCard: async (parent, args) => {
      try {
     
        // if (!question || !answer) {
        //   throw new Error("Both question and answer are required for updating the card.");
        // }
        const updatedFlashcard = await Flashcard.findByIdAndUpdate(
          args._id,
          { $set: args},
          { new: true }
        );
        return updatedFlashcard;
      } catch (error) {
        console.error("Error updating flashcard:", error);
        throw new Error("Failed to update the flashcard. Please try again.");
      }
    },
    
    removeCard: async (parent, { _id }) => {
      return Flashcard.findOneAndDelete({ _id });
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

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

