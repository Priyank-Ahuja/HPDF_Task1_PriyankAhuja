import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarMid from './Components/AppBarMid';
import ToolBarTop from './Components/ToolBarTop';
import ToolBarBottom from './Components/ToolBarBottom';
import Trends from './Components/Trends';
import RelatedSearch from './Components/RelatedSearch';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import PrivacyPolicy from './Components/PrivacyPolicy'

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '29% 45% 33%',
}

const SearchPage = () => (
  <MuiThemeProvider>
    <ToolBarTop />
    <AppBarMid />
    <ToolBarBottom />
    <div style={gridContainer}>
      <div class="class-items">
        <Trends />
        <RelatedSearch />
      </div>
      <div class="class-items">
        <Post1 />
        <Post2 />
      </div>
      <div class="class-items">
        <PrivacyPolicy />
      </div>
    </div>
  </MuiThemeProvider>
);

export default SearchPage;