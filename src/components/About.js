import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - FXSignals</title> {/* Dynamic title */}
      </Helmet>
      <h1>Learn More About FXSignals</h1>
    </div>
  );
}

export default About;
