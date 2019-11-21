import React, { Fragment } from 'react';
import Contents from './Components/common/contents';
import Footer from './Components/common/footer';

import './App.css';

class App extends React.Component {


  render() {
    return (
      <Fragment>
        <Contents />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
