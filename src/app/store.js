
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';


const store = configureStore({
  reducer: {
    
    user: userReducer,
   
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export default store;
