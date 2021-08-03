import { createSlice } from "@reduxjs/toolkit";

export const TopicsSlice = createSlice({
  name: "topics",
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
    },

    addQuizzId: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizzId } = TopicsSlice.actions;

export const topicsSliceReducer = TopicsSlice.reducer;
