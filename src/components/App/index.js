import React from 'react';
import Head from '../Header';
// app component

const App = ({ children }) => (
  <div>
    <Head />
    {children}
  </div>
);

/*  React.PropTypes exports a range of validators that can be used to make sure the data
    you receive is valid.
*/
App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
