import { createSlice } from '@reduxjs/toolkit'
import { GET_CATEGORIES, LOADING_0, STARTING_STATUS, NOT_FOUND_404, SUCCESS_200 } from "../consts";


const feedSlice = createSlice({
    name: "feed",
    initialState: {
        status: STARTING_STATUS,
        posts: [],
        users: []
    },
    reducers: {
        searchingDatabase: (state, action) => {
            state = action.payload;
        },
        feedDatabase: (state, action) => {   
            state.posts = action.payload.posts;
            state.users = action.payload.users;
            state.status = action.payload.status;
        },
        setSearchingToLoading: (state) => {
            console.log("setting to load feed")
            state.status = LOADING_0;
        },
        setFeedToLoading: (state) => {
            state.status = LOADING_0;
            state.posts = [];
        },
        feedNextPageDatabase: (state, action) => {
            state.posts = [...state.posts,...action.payload];
            console.log(state.posts)
        },
        updateFeedLikes: (state, action) => {
            state.posts[action.payload.index].likes = action.payload.data.likes;
        },
        updateFeedShares: (state, action) => {
            state.posts[action.payload.index].shares = action.payload.data.shares;
        }
    }
});

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        status: STARTING_STATUS,
        posts: {}
    },
    reducers: {
        getCategoriesLoading: (state) => {
            state.status = STARTING_STATUS;
        },
        getCategories: (state, action) => {
            state.status = action.payload.status;
            state.posts = action.payload.post;
        }
    }
});

const selectedCategorySlice = createSlice({
    name: "selectedCategories",
    initialState: "",
    reducers: {
        setSelectedCategory: (state, action) => {
            return state = action.payload;
        },
        resetSelectedCategory: (state, action) => {
            return state = "";
        },
        searchResetOptionsCategory: (state) => {
            return state = "";
        }
    }
});

const homePageSlicer = createSlice({
    name: "homePage",
    initialState: {page:1},
    reducers: {
        resetPage: (state) => {
             state.page = 1;
        },
        nextPage: (state,action) => {
            state.page = action.payload;
        }
    }
});

const filterAndOrderSlice = createSlice({
    name: "filterAndOrder",
    initialState: {ordering:"recent",filter:""},
    reducers: {
        resetOptions: (state, action) => {
            return state = {};
        },
        searchResetOptionsCategoryFAO: (state, action) => {
            return state = {}
        },
        setFilter: (state, action) => {
            return state = { ...state, filter: action.payload };
        },
        setOrdering: (state, action) => {
            return state = { ...state, ordering: action.payload };
        }
    }
});

export const { searchingDatabase, feedDatabase, setSearchingToLoading, setFeedToLoading, feedNextPageDatabase, updateFeedLikes, updateFeedShares } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
export const { getCategoriesLoading, getCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
export const { setSelectedCategory, resetSelectedCategory, searchResetOptionsCategory } = selectedCategorySlice.actions;
export const selectedCategoryReducer = selectedCategorySlice.reducer;
export const { resetOptions, searchResetOptionsCategoryFAO, setFilter, setOrdering } = filterAndOrderSlice.actions;
export const filterAndOrderReducer = filterAndOrderSlice.reducer;
export const {resetPage, nextPage} = homePageSlicer.actions;
export const homePageReducer = homePageSlicer.reducer;