import { combineReducers } from "redux";

import authReducer from "./auth";
import adminReducer from "./admin";
import userReducer from "./user";
import postsReducer from "./posts";
import communityReducer from "./community";
import moderationReducer from "./moderation";

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    user: userReducer,
    posts: postsReducer,
    community: communityReducer,
    moderation: moderationReducer,
});

export default rootReducer;