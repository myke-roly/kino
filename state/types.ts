export interface InitialStateI {
  isLoading: boolean;
  error: null | string;
  data: null | {} | any[];
}

export const initialState: InitialStateI = {
  isLoading: false,
  error: null,
  data: null,
};
