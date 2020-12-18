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
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
