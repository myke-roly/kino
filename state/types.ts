export interface InitialStateI {
  isLoading: boolean;
  error: null | string;
  data: null | {} | [];
}

export const initialState: InitialStateI = {
  isLoading: false,
  error: null,
  data: null,
};
