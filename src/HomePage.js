import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolBarTop from './Components/ToolBarTop';
import Trends from './Components/Trends';
import RelatedSearch from './Components/RelatedSearch';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';
import PrivacyPolicy2 from './Components/PrivacyPolicy2';
import ProfileC from './Components/ProfileC'

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '29% 45% 33%',
}

const HomePage = () => (
  <MuiThemeProvider>
    <ToolBarTop />
    <div style={gridContainer}>
      <div class="class-items">
        <ProfileC />
        <Trends />
        <RelatedSearch />
      </div>
      <div class="class-items">
        <Post3 />
        <Post4 />
      </div>
      <div class="class-items">
        <PrivacyPolicy2 />
      </div>
    </div>
  </MuiThemeProvider>
);

export default HomePage;