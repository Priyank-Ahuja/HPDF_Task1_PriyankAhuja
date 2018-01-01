import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '0px',
    height: '220px',
    width: '290px',
    marginTop: '15px',
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

const styleDiv = {
    marginTop: '10px'
};

const Header = {
    fontWeight: '700',
    color: '#1b95e0',
    fontFamily: 'Segoe UI,Arial,sans-serif',
    fontSize: '14px',
    cursor: 'pointer',
    margin: '20px',
};
  

const RelatedSearch = () => (
    <Paper style={paperStyle}>
      <div><h3 style={styleH3}>Related searches</h3></div>
      <div style={styleDiv}><a style={Header} href="#">axis bank</a></div>
      <div style={styleDiv}><a style={Header} href="#">mcoca</a></div>
      <div style={styleDiv}><a style={Header} href="#">#purohitnotterrorist</a></div>
      <div style={styleDiv}><a style={Header} href="#">finance ministry</a></div>
      <div style={styleDiv}><a style={Header} href="#">maruti suzuki</a></div>
    </Paper>
);
  
export default RelatedSearch;