import React from 'react';
import Helmet from 'react-helmet';

class Frasier extends React.Component {
  constructor() {
    super();
    this.name = 'will';
  }
  render() {
    const name = 'test';
    return (
      <div className="frasier">
        <Helmet
          title="Frasier"
          meta={[
              { name: 'description', content: 'Helmet Frasier' },
              { property: 'og:type', content: 'article' },
          ]}
          onChangeClientState={newState => console.log(newState)}
        />
        <h1>Frasier {this.name}{name}</h1>
        <p>
          This little app is rendered on the server, and then
          lazily loaded on the client. Go ahead and refresh here
          with the web inspector open. You should not get the
          React warning about reusing markup.
        </p>
        <p>
          This little app is rendered on the server, and then
          lazily loaded on the client. Go ahead and refresh here
          with the web inspector open. You should not get the
          React warning about reusing markup.
        </p>
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

export default Frasier;
