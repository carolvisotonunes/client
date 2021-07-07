import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      {/* DO NOT USE A HEF ERASE ALL DATA CREATING A BRAND NEW HTML BROWSER*/}
      <a href="/pagetwo">Navigate to Page Two</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      {/* DO NOT USE A HEF ERASE ALL DATA CREATING A BRAND NEW HTML BROWSER*/}
      <a href="/">Navigate to Page One</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
