import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Signup: undefined;
  Signin: undefined;
  Preference: undefined;
  Layout: undefined;
  NotFound: undefined;
  EditUser: undefined;
  SearchFilters: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Saved: undefined;
  User: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
};

export type SearchTabParamList = {
  Search: undefined;
  Movie: undefined;
  SearchFilters: undefined;
};

export type SavedTabParamList = {
  Saved: undefined;
};

export type UserTabParamList = {
  User: undefined;
  EditUser: undefined;
};

export type NavigatorProps = StackNavigationProp<RootStackParamList>;

export interface UserSigninI {
  email: string;
  password: string;
}
export interface UserSignupI extends UserSigninI {}
