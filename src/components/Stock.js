import React from 'react';
import { Helmet } from 'react-helmet';

function Stocks() {
  return (
    <div>
      <Helmet>
        <title>Stocks - FXSignals</title> {/* Dynamic title */}
      </Helmet>
      <h1>Stocks Page</h1>
    </div>
  );
}

export default Stocks;
