import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    email: "",
    crust: "classic_thin",
    sauce: "no_sauce",
    cheese: "no_cheese"
  },
  reducers: {
    //* Chose Email for users/sign-up-new
    chooseEmail: (state, action) => { state.email = action.payload },
    //* Chose Email for users/sign-up-new
    chooseCrust: (state, action) => { state.crust = action.payload },
    chooseSauce: (state, action) => { state.sauce = action.payload },
    chooseCheese: (state, action) => { state.cheese = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const { chooseEmail, chooseCheese, chooseCrust, chooseSauce } = rootSlice.actions