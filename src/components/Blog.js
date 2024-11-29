import React from 'react';
import { Helmet } from 'react-helmet';

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog - FXSignals</title> {/* Dynamic title */}
      </Helmet>
      <h1>Blogs Page</h1>
    </div>
  );
}

export default Blog;
