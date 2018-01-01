import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '0px',
    height: '154px',
    width: '290px',
    marginTop: '15px',
    position: 'inherit',
};

const styleP = {
    color: '#657786',
    fontSize: '12px',
    lineHeight: '16px',
    fontFamily: 'Segoe UI",Arial,sans-serif',
    padding: '15px'
};

const styleDivider = {
    margin: '15px',
};

const styleA = {
    fontSize: '12px',
    fontFamily: 'Segoe UI",Arial,sans-serif',
    padding: '15px',
    paddingLeft: '0px',
    //margin: '15px',
    alignText: 'center',
    color: '#1b95e0',
};

const styleI = {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#1b95e0',
};

const PrivacyPolicy = () => (
    <Paper style={style} zDepth={1} >
        <p style={styleP}>© 2017 Twitter About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers</p>
        <Divider style={styleDivider} />
        <i style={styleI} class="fa fa-external-link" aria-hidden="true"></i>
        <a style={styleA} href="#">Advertise with Twitter</a>  
    </Paper>
);
  
  export default PrivacyPolicy;