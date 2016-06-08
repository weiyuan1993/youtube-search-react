export default function(state=[],action){
	switch(action.type){
		case 'VIDEO_SEARCH':
			//console.log(action.content);
			return action.payload.data.items;
		default:
			return state;
	}
}