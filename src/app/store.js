import { configureStore } from "@reduxjs/toolkit";
import tendersSlice from "../features/Tenders/TendersSlice";
import tenderSlice from "../features/Tender/TenderSlice";

export default configureStore({
  reducer: {
    data: tendersSlice,
    tenderdata:tenderSlice
  },
});
