import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/TopicsSlice";

export const createQuiz = (payload) => {
  return (dispatch) => {
    // dispatch multiple actions here
    dispatch(addQuiz(payload));
    dispatch(addQuizzId(payload));
  };
};

export const QuizzesSlice = createSlice({
  name: "quizzes",
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = QuizzesSlice.actions;

export const quizzesSliceReducer = QuizzesSlice.reducer;
