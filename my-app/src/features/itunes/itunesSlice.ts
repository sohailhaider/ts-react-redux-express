import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import axios, {AxiosResponse} from 'axios';

interface ITunesState {
    isLoading: boolean,
    isSearched: boolean,
    message: String,
    results: any[];
}

const initialState: ITunesState = {
    isLoading: false,
    isSearched: false,
    message: "",
    results: [],
};

export const itunesSlice = createSlice({
    name: 'itunes',
    initialState,
    reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setIsSearchedTrue: state => {
            state.isSearched = true;
        },
        setMessage: (state, action: PayloadAction<String>) => {
            state.message = action.payload
        },
        setResults: (state, action: PayloadAction<any[]>) => {
            state.results = action.payload;
        },
    },
});

export const { setResults, setMessage, setIsLoading, setIsSearchedTrue } = itunesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const searchByTerm = (searchTerm: string): AppThunk => dispatch => {
    
    dispatch(setIsLoading(true))
    dispatch(setIsSearchedTrue())

    const params = new URLSearchParams();
    params.append('term', searchTerm);
    params.append('limit', '10');
    try {
        axios
        .get('https://itunes.apple.com/search', {params: params})
        .then(function (response: AxiosResponse<any>) {
            console.log(response)
            dispatch(setResults(response?.data?.results));
        })
    } catch (error) {
        console.log(error.message)
        dispatch(setMessage(error.message))
    }
    dispatch(setIsLoading(false))
    
};

export const selectResults = (state: RootState) => state.itunes.results;
export const selectIsLoading = (state: RootState) => state.itunes.isLoading;
export const selectIsSearched = (state: RootState) => state.itunes.isSearched;
export const selectMessage = (state: RootState) => state.itunes.message;

export default itunesSlice.reducer;
