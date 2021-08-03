import { createSlice } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
  name: "cards",
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = action.payload;
    }
  }
});

export const selectCards = (state) => state.cards.cards;

export const { addCard } = CardsSlice.actions;

export const cardsSliceReducer = CardsSlice.reducer;
