import React from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from 'material-ui-search-bar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import profile from './Images/profile.jpeg';
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 0,
};

const styleHome = {
  margin: 0,
  marginLeft: '50px',
  
};

const labelStyle = {
  textTransform: 'capitalize',
  color: '#66757f',
  position: 'relative',
  textAlign: 'inherit',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '13px',
  fontWeight: 'bold',
  height: '46px',
  padding: '0 14px 0 4px',
};

const styleToolBar = {
  backgroundColor : 'white',
  backFaceVisibility: 'hidden',
  borderBottom: '1px solid #e6ecf0',
  zIndex: '1000',
  height:'46px',
  position: 'fixed',
  width: '100%'
};

const styleSearchBar = {
    backgroundColor: '#f5f8fa',
    borderRadius: '21px',
    border: '1px solid #e6ecf0',
    mozBoxSizing: 'border-box',
    boxSizing: 'border-box',
    color: '#14171a',
    fontSize: '12px',
    transition: 'all .2s ease-in-out',
    marginTop: '7px',
    marginRight: '15px',
    width: '221px',
    height: '25px',
    float: 'left',
    position: 'relative',
    marginBottom: '10px',
};

const styleTweetButton = {
  margin: '0px',
  marginLeft: '16px',
  backgroundColor: '#4AB3F4',
  borderColor: 'transparent',
  border: '1px solid #1da1f2',
  borderRadius: '100px',
  boxShadow: 'none',
  cursor: 'pointer',
  lineHeight: '20px',
  position: 'relative',
  marginRight:'56px'
};

const LabelStyleTweet = {
  textAlign: 'center',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  color: 'white',
  textAlign: 'center',
  padding: '0px'
};

const styleTwitterIcon = {
  color: '#1da1f2',
  cursor: 'pointer',
  fontSize: '21px',
  fontWeight: 'bold'
};

const styleHintText = {
  marginBottom: '10px'

};

export default class ToolbarTop extends React.Component {

  render() {
    return (
      <Toolbar style={styleToolBar}>
        <ToolbarGroup>
          <FlatButton 
            label="home" 
            primary={true}  
            icon={<i class="fa fa-home" aria-hidden="true"></i>} 
            style={styleHome} 
            labelStyle={labelStyle} 
          >
          </FlatButton>
          <FlatButton 
            label="moments" 
            primary={true} 
            style={style}
            icon={<i class="fa fa-bolt" aria-hidden="true"></i>} 
            labelStyle={labelStyle}
          />
          <FlatButton 
            label="Notifications" 
            primary={true} style={style}
            icon={<i class="fa fa-bell" aria-hidden="true"></i>} 
            labelStyle={labelStyle}/>
          <FlatButton 
            label="Messages" 
            primary={true}
            icon={<i class="fa fa-envelope" aria-hidden="true"></i>} 
            style={style} 
            labelStyle={labelStyle}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton>
            <FontIcon>
              <i class="fa fa-twitter" aria-hidden="true" style={styleTwitterIcon}></i>
            </FontIcon>     
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <SearchBar style={styleSearchBar} />
          <Avatar src={profile} size={30} />
          <FlatButton label="Tweet" style={styleTweetButton} labelStyle={LabelStyleTweet} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}