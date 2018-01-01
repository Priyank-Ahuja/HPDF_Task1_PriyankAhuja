import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import hasura1 from './Images/hasura1.jpg';
import hasura2 from './Images/hasura2.jpg';

const styleCard = {
  marginLeft:'10px',
  marginTop: '15px',
  top: '116px',
  width: '588px',
  height: '460px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
};

const styleCardHeader = {
  paddingBottom: '0px'
};

const styleCardText = {
  paddingTop: '0px',
  marginLeft: '50px'
};

const styleCardMedia = {
  width: '520px',
  marginLeft: '66px',
};

const styleIconReply = {
  marginLeft: '44px',
  marginRight: '0px',
  color: '#66757f',
};

const styleIcon = {
  padding: '0px',
  marginRight: '0px',
  color: '#66757f',
};

const labelStyle = {
  textTransform: 'capitalize',
  position: 'relative',
  textAlign: 'inherit',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '13px',
  height: '46px',
  padding: '0 14px 0 4px',
};

const Post4 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Hasura"
        subtitle="@HasuraHQ . 3h"
        avatar={hasura1}
      />
        <CardText style={styleCardText}>
        Looking for some handy resources to get started with building a #PHP-#Apache app? Check out a ready-to-deploy #helloworld web application on http://bit.ly/2DxskC7 . Clone & Deploy in just 3 steps! #Apps #appdev #DevOps #webdev #Developer @official_php @php_net @TheASF
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src={hasura2} alt="" />
      </CardMedia>
  
    <CardActions>
      <FlatButton 
        label="15" 
        primary={true}  
        icon={<i class="fa fa-reply" aria-hidden="true"></i>} 
        style={styleIconReply} 
        labelStyle={labelStyle} 
      />
      <FlatButton 
        label="278" 
        primary={true}  
        icon={<i class="fa fa-retweet" aria-hidden="true"></i>} 
        style={styleIcon} 
        labelStyle={labelStyle} 
      />
      <FlatButton 
        label="510" 
        primary={true}  
        icon={<i class="fa fa-heart" aria-hidden="true"></i>} 
        style={styleIcon} 
        labelStyle={labelStyle} 
      />
      <FlatButton 
        label="" 
        primary={true}  
        icon={<i class="fa fa-envelope" aria-hidden="true"></i>} 
        style={styleIcon} 
        labelStyle={labelStyle} 
      />  
    </CardActions>
    </Card>
  );
  
  export default Post4;