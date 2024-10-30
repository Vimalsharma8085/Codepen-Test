import { createSlice } from '@reduxjs/toolkit';

const codeSlice = createSlice({
  name: 'code',
  initialState: {
    code: '',
    output: '',
  },
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
  },
});

export const { setCode, setOutput } = codeSlice.actions;
export default codeSlice.reducer;
