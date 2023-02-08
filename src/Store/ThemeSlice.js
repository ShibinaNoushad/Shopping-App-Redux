import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    bgColor: "",
    dataStatus1: "",
    dataStatus2: "",
  },
  reducers: {
    changedataStatus(state) {
      state.bgColor = "";
      state.dataStatus1 = "Sending";
      state.dataStatus2 = "Sending Cart Data";
    },
    changeToSuccess(state) {
      state.bgColor = "success";
      state.dataStatus1 = "Success!";
      state.dataStatus2 = "Sent Cart Data Succesfully";
    },
    changeToError(state) {
      state.bgColor = "error";
      state.dataStatus1 = "Error";
      state.dataStatus2 = "Sending Cart Data Failed";
    },
  },
});
export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
