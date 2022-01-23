import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 
const API_URL_Tender = "./Tenders.json";


// initial state
export const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const tenderSlice = createSlice({
  name: "tenders",
  initialState,
  reducers: {
    getAllTender :(state,action)=>{
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

export const getAllTendersAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL_Tender}`);  
    dispatch(getAllTender(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const {
  getAllTender,
  addTender,
  editTender,
  removeTender,
} = tenderSlice.actions;

export const selectTenders = (state) => state.data;

export default tenderSlice.reducer;
