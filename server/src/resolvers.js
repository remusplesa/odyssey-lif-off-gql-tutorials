const resolvers = {
  Query: {
    // returns an Array of Tracks
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get single track by id
    track: (_, {id}, { dataSources }) => {
        return dataSources.trackAPI.getTrack(id);
    }
  },
  Mutation: {
    // increment number of Track views
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for ${id}`,
          track,
        }

      } catch (e) {
        return {
          code: e.extensions.response.status,
          success: false,
          message: e.extensions.response.body,
          track: null,
        }
      }
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    }
  },
};

export default resolvers;
