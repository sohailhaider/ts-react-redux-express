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

export const searchByTerm = (searchTerm: string): AppThunk => dispatch => {
    
    dispatch(setIsLoading(true))

    const params = new URLSearchParams();
    params.append('term', searchTerm);
    params.append('limit', '200');
    try {
        axios
        .get('/search', {params: params})
        .then(function (response: AxiosResponse<any>) {
            console.log(response)
            dispatch(setResults(response?.data?.results));
            dispatch(setIsSearchedTrue())
            dispatch(setIsLoading(false))
        })
    } catch (error) {
        console.log(error.message)
        dispatch(setIsSearchedTrue())
        dispatch(setMessage(error.message))
    }
    
};

export const selectResults = (state: RootState) => state.itunes.results;
export const selectIsLoading = (state: RootState) => state.itunes.isLoading;
export const selectIsSearched = (state: RootState) => state.itunes.isSearched;
export const selectMessage = (state: RootState) => state.itunes.message;

export default itunesSlice.reducer;
