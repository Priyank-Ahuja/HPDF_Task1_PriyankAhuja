import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';



const style = {
    margin: 0,
};

const styleTop = {
    margin : 0,
    marginLeft: '50px',
};

const labelStyle = {
  textTransform: 'capitalize',
  color: '#66757f',
  position: 'relative',
  textAlign: 'inherit',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  display: 'block',
  fontSize: '13px',
  fontWeight: 'bold',
  height: '46px',
  padding: '0 14px 0 4px',
};

const styleToolBar = {
  backgroundColor : 'white',
  backFaceVisibility: 'hidden',
  borderBottom: '1px solid #e6ecf0',
  zIndex: '1000px',
};

export default class ToolbarTop extends React.Component {
    
  render() {
    return (
      <Toolbar style={styleToolBar}>
        <ToolbarGroup>
          <FlatButton label="top" primary={true} style={styleTop} labelStyle={labelStyle} />
          <FlatButton label="latest" primary={true} style={style} labelStyle={labelStyle}  />
          <FlatButton label="People" primary={true} style={style} labelStyle={labelStyle}/>
          <FlatButton label="Photos" primary={true} style={style} labelStyle={labelStyle}/>
          <FlatButton label="Videos" primary={true} style={style} labelStyle={labelStyle}/>
          <FlatButton label="News" primary={true} style={style} labelStyle={labelStyle}/>
          <FlatButton label="Broadcast" primary={true} style={style} labelStyle={labelStyle}/>
        </ToolbarGroup>
        <ToolbarGroup>
        <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
      >
        <MenuItem primaryText="Embed this search" />
      </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}