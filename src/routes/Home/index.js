import React from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Home"
          meta={[
              { name: 'description', content: 'Helmet Home' },
              { property: 'og:type', content: 'article' },
          ]}
          onChangeClientState={newState => console.log(newState)}
        />
        <h2>Home</h2>
      </div>
    )
  }
}


