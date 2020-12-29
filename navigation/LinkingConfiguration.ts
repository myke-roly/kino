import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Onboarding: {
            screens: {
              Onboarding: 'Onboarding',
            },
          },
          Signup: {
            screens: {
              Signup: 'Signup',
            },
          },
          Signin: {
            screens: {
              Signin: 'Signin',
            },
          },
          Preference: {
            screens: {
              Preference: 'Preference',
            },
          },
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Search: {
            screens: {
              Search: 'Search',
            },
          },
          Saved: {
            screens: {
              Saved: 'Saved',
            },
          },
          User: {
            screens: {
              User: 'User',
            },
          },
        },
      },
      // NotFound: '*',
    },
  },
};
