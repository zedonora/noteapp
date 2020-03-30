import Note from "./models/note";
export const resolvers = {
  Query: {
    async getNote(root, { _id }) {
      return await Note.findById(_id);
    },
    async allNotes() {
      return await Note.find();
    }
  },
  Mutation: {
    async createNote(root, { input }) {
      return await Note.create(input);
    }
  }
};
