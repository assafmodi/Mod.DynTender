import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 
const API_URL_Tender = "/Tenders.json";


// initial state
export const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const tenderItemSlice = createSlice({
  name: "tender",
  initialState,
  reducers: {
    getTender :(state,action)=>{
      state.data = action.payload
    },
    addTender: (state, action) => {
      state = state.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      });
      // return state;
    },
    editTender: (state, action) => {
      state = state.map((tender) => {
        if (tender.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            body: action.payload.body,
          };
        } else {
          return {
            ...tender,
          };
        }
      });

      return state;
    },
    removeTender: (state, action) => {
      state = state.filter((tender) => tender.id !== action.payload.id);
      return state;
    },
  },
});

export const getTenderAsync = (tenderID) => async (dispatch) => {
  try {
   
    const response = await axios.get(`${API_URL_Tender}`);
    dispatch(getTender(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const {
  getTender,
  addTender,
  editTender,
  removeTender,
} = tenderItemSlice.actions;

export const selectTender = (state) => state.tenderdata;

export default tenderItemSlice.reducer;
