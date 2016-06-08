import axios from 'axios';
const API_KEY = 'AIzaSyAOhS2-IwOT1EwzRwuI5COFNaHbNKLc8Ms';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function videoSearch(searchInput){
	let params = {
		part:'snippet',
		key: API_KEY,
		q:searchInput,
		type:'video,channel,playlist',
		maxResults:50
	};
	const request = axios.get(ROOT_URL, {params:params});
	return {
		type:'VIDEO_SEARCH',
		payload:request
	};
}
export function videoSelect(video){
 	return{
 		type:'VIDEO_SELECTED',
 		payload:video
 	}
 }