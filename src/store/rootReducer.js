import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { layoutReducer } from "./layoutStore/layoutStore.reducer";
import { authReducer } from "./authStore/auth.reducer";
import { ourTeamReducer } from "./ourTeamStore/ourTeamReducer";
import { ourCompanyReducer } from "./ourCompanyStore/ourCompanyReducer";
const persistConfig = {
  key: "root",
  storage,
    whitelist: [ourTeamReducer],
};
const rootReducer = combineReducers({
  authStore: authReducer,
  ourTeamStore: ourTeamReducer,
  layoutStore: layoutReducer,
  ourCompanyStore: ourCompanyReducer
});

export default persistReducer(persistConfig, rootReducer);
