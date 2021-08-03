import {
  bindActionCreators,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import { cardsSliceReducer } from "../features/cards/CardsSlice";
import { quizzesSliceReducer } from "../features/quizzes/QuizessSlice";

import { topicsSliceReducer } from "../features/topics/TopicsSlice";

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSliceReducer,
    cards: cardsSliceReducer,
  },
});
