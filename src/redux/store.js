import {createStore,applyMiddleware,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer} from './reducers/auth.reducer';
import { channelDetailsReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer';
import { channelVideosReducer, homeVideoReducer, relatedVideoReducer,
       searchedVideoReducer, subscriptionChannelReducer} from './reducers/video.reducer';

import { selectedVideoReducer} from './reducers/video.reducer';


const rootReducer = combineReducers({
    auth : authReducer,
    homeVideos:homeVideoReducer,
    selectedVideo : selectedVideoReducer,
    channelDetails : channelDetailsReducer,
    commentList : commentListReducer,
    relatedVideos : relatedVideoReducer,
    searchedVideo : searchedVideoReducer,
    subscriptionChannel : subscriptionChannelReducer,
    channelVideos : channelVideosReducer
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;