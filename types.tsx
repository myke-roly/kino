import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Signup: undefined;
  Signin: undefined;
  Layout: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabUser: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserTabParamList = {
  TabUserScreen: undefined;
};

export type NavigatorProps = StackNavigationProp<RootStackParamList>;

export interface UserSigninI {
  email: string;
  password: string;
}
export interface UserSignupI extends UserSigninI {
  username: string;
}
