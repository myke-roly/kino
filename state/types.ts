export interface InitialStateI {
  loading: boolean;
  error: null | string;
  data: null | {} | [];
}

export const initialState: InitialStateI = {
  loading: false,
  error: null,
  data: null,
};
