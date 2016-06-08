import React,{ Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};
const style = {
  margin: 12,
};
//因為此元件有使用到狀態，所以必須使用類別元件(class)構建
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {searchInput:''};
    }
    onInputChange(searchInput){
        this.setState({searchInput:searchInput});

    }
    onButtonClick(e){
        e.preventDefault();
        const searchInput = this.state.searchInput;
        this.props.onSearchInputChange(searchInput);
    }

    render(){
        return(
          <div>
            <AppBar
              title={<span style={styles.title}>YouTube Search</span>}
              iconElementLeft={<IconButton><PlayCircleOutline /></IconButton>}
            />
            <form className="search-bar" onSubmit={this.onButtonClick.bind(this)}>
                <TextField id="searchInput" value={this.state.searchInput} onChange={(event)=>this.onInputChange(event.target.value)} />
                <RaisedButton type="submit" label="Search" secondary={true} style={style} icon={<ActionSearch />}/>
            </form>
          </div>
        )
    }
}

export default SearchBar;
