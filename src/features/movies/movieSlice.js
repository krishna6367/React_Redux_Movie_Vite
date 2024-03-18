import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {APIkey} from "../../common/apis/MovieApiKey";
import MovieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",  async (term) => {
const response = await MovieApi.get(`?ApiKey=${APIkey}&s=${term}&type-movie`);

    return response.data;
}
);

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",  async (term) => {
    const response = await MovieApi.get(`?ApiKey=${APIkey}&s=${term}&type-series`);
    
        return response.data;
    }
    );

    export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAyncMovieOrShowDetail",  async (id) => {
        const response = await MovieApi.get(`?ApiKey=${APIkey}&i=${id}&plot-full`);
        
            return response.data;
        }
        );

const initialState = {
    movies: {},
    shows:{},
    selectedMovieOrShow: {},
    loader: {},
   };

const movieSlice = createSlice ({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
        state.selectedMovieOrShow = {};

    }
},

    extraReducers: (builder) =>
    builder

    .addCase((fetchAsyncMovies.fulfilled),(state, {payload}) => {
        return {...state, movies: payload};
   })
   
.addCase((fetchAsyncShows.fulfilled),(state, {payload}) => {
    return {...state, shows: payload};
})

.addCase((fetchAsyncMovieOrShowDetail.fulfilled),(state, {payload}) => {
    return {...state, selectedMovieOrShow: payload};
})
});

export const {addMovies,removeSelectedMovieOrShow}  = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;


export default movieSlice.reducer;