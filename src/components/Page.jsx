import React from "react";

import "./Page.css";

export default () => (
  <div className="parent">
    <div className="example">
      Height of this <code>.example</code> is set to
      <pre>
        <code>calc(100vh - 5rem - calc(10rem + 100px))</code>
      </pre>
      On production its height is output incorrectly as
      <pre>
        <code>calc(100vh - 5rem - 10rem + 100px)</code>
      </pre>
    </div>
    <div className="working">
      <code>.working</code> is set without any parenthesis or nested{" "}
      <code>calc()</code>s, as
      <pre>
        <code>calc(100vh - 15rem - 100px)</code>
      </pre>
      It's correctly output without changes.
      <pre>
        <code>calc(100vh - 15rem - 100px)</code>
      </pre>
    </div>
  </div>
);
