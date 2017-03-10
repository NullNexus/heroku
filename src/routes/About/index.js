import React from 'react';
import Helmet from 'react-helmet';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="About"
          meta={[
              { name: 'description', content: 'Helmet About' },
              { property: 'og:type', content: 'article' },
          ]}
          onChangeClientState={newState => console.log(newState)}
        />
        <h2>About</h2>
        <p>
          This little app is rendered on the server, and then
          lazily loaded on the client. Go ahead and refresh here
          with the web inspector open. You should not get the
          React warning about reusing markup.
        </p>
      </div>
    );
  }
}

