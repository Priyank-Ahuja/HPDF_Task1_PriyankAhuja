import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  height: '510px',
  width: '290px',
  marginTop: '250px',
  position: 'absolute',
  marginLeft: '100px'
};

const styleH3 = {
  margin: '20px',
  padding: '0',
  fontSize: '18px',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontWeight: '700',
  color: '#14171a',
};
const styleChange = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '400',
  color: '#1b95e0',
  cursor: 'pointer'

};

const Header = {
  fontWeight: '700',
  color: '#1b95e0',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '14px',
  cursor: 'pointer',
  margin: '20px',
};

const Subheader = {
  fontSize: '12px',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  color: '#657786',
  margin: '20px',
  marginTop: '0px'
};

const styleDiv = {
  marginTop: '10px'
};

const Trends = () => (
  <Paper style={paperStyle}>
    <div><h3 style={styleH3}>Trends For You <span><a style={styleChange} href="#">change</a></span></h3></div>
    <div style={styleDiv}><a style={Header} href="#">#KamalaMills</a><p style={Subheader}>Deaths after fire breaks out at Kamala Mills</p></div>
    <div style={styleDiv}><a style={Header} href="#">#TrippleTalaqBill</a><p style={Subheader}>347k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">Humans of Hndutva</a><p style={Subheader}>148k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">Mumbai</a><p style={Subheader}>11k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">World Rapid Chess Championship</a><p style={Subheader}>Viswanathan Anand stuns world number one Magnus Carlsen in world rapids</p></div>
    <div style={styleDiv}><a style={Header} href="#">#Gorilla</a><p style={Subheader}>5326 Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#LokSabha</a><p style={Subheader}>2466 Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#RajeshKhanna</a><p style={Subheader}>1357 Tweets</p></div>
  </Paper>
);

export default Trends;