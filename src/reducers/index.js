import { combineReducers } from 'redux';
import reducerSearch from './reducer_search';
import reducerSelectedVideo from './reducer_selected_video';

const rootReducer = combineReducers({
	videos:reducerSearch,
	selectedVideo:reducerSelectedVideo
});

export default rootReducer;