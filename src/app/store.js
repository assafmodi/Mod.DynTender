import { configureStore } from "@reduxjs/toolkit";
import tenderSlice from "../features/Tenders/TendersSlice";

export default configureStore({
  reducer: {
    data: tenderSlice
  },
});
