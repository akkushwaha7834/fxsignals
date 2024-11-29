import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - FXSignals</title> {/* Dynamic title */}
      </Helmet>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;
