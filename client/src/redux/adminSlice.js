import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../config/url";

const admin = localStorage.getItem("admin");
const token = localStorage.getItem("token");

export const adminLogin = createAsyncThunk(
  "api/adminLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/admin/login`, payload);
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Async thunk action to handle user logout
export const adminLogout = createAsyncThunk("auth/logout", async () => {
  // Clearing local storage and reset the state
  localStorage.removeItem("admin");
  localStorage.removeItem("token");
  return null;
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: admin ? JSON.parse(admin) : null,
    token: token,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        const { adminData, token } = payload;
        localStorage.setItem("admin", JSON.stringify(adminData));
        localStorage.setItem("token", token);
        state.admin = adminData;
        state.token = token;
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error.message;
      });

    builder.addCase(adminLogout.fulfilled, (state) => {
      state.admin = null;
      state.token = null;
      // toast.success("Logout successful!");
    });
  },
});

export default adminSlice.reducer;
