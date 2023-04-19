import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PeopleType } from "../../types/PeopleTypes";

type PersonState = {
  person: PeopleType[];
};

//initialValue of the person slice
const initialState: PersonState = {
  person: [],
};

export const PersonSlice = createSlice({
  name: "person",
  initialState: initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<PeopleType>) => {
      state.person.push({
        ...action.payload,
      });
    },
    removePerson: state => {
      state.person = [];
    },
  },
});

export default PersonSlice.reducer;
export const { addPerson, removePerson } = PersonSlice.actions;
