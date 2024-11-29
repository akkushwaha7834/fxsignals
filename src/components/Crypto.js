import React from 'react';
import { Helmet } from 'react-helmet';

function Crypto() {
  return (
    <div>
      <Helmet>
        <title>Crypto - FXSignals</title> {/* Dynamic title */}
      </Helmet>
      <h1>Crypto page</h1>
    </div>
  );
}

export default Crypto;
