import React,{ Component } from 'react';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../components/search_bar';
import VideoDetail from '../components/video_detail';
import VideoList from '../components/video_list';

import { videoSearch, videoSelect } from '../actions/index';

class App extends Component {
	constructor(props){
		super(props);
		this.props.videoSearch('周杰倫');
	}
	render() {
		return(
			<div>
				<SearchBar onSearchInputChange={(searchInput)=>this.props.videoSearch(searchInput)} />
				<VideoDetail video={this.props.selectedVideo} />
				<VideoList onVideoSelect={this.props.videoSelect} videos={this.props.videos} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	//一開始state為空
	if(!state.selectedVideo){
		return{
			videos:state.videos,
			selectedVideo:state.videos[0]
		};
	}else{
		return{
			videos:state.videos,
			selectedVideo:state.selectedVideo
		}
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		videoSearch:videoSearch,
		videoSelect:videoSelect
	},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
