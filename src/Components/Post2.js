import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ani from './Images/ani.jpg';
import ani2 from './Images/ani2.jpg';
import batbull from './Images/batbull.jpg';
import aadhaar from "./Images/aadhar.jpg";

const styleCard = {
  marginLeft:'10px',
  marginTop: '15px',
  top: '116px',
  width: '588px',
  height: '855px',
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

const Post2 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Batbull"
        subtitle="@BatuIIT . 11h"
        avatar={batbull}
      />
      <CardText style={styleCardText}>
      Another impediment for our poor kids trying to get a basic education. As if lack of sufficient facilities was not enough! #Aadhaar #EducationForAll
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src={aadhaar} alt="" />
      </CardMedia>
  
     <CardActions>
     <FlatButton 
    label="124" 
    primary={true}  
    icon={<i class="fa fa-reply" aria-hidden="true"></i>} 
    style={styleIconReply} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="436" 
    primary={true}  
    icon={<i class="fa fa-retweet" aria-hidden="true"></i>} 
    style={styleIcon} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="35k" 
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
  
  export default Post2;