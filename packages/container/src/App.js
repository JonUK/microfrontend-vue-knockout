import React, {lazy, Suspense, useRef, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Progress from './components/Progress';
import Header from './components/Header';
// import AuthApp from './components/AuthApp';
// import MarketingApp from './components/MarketingApp';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
              </Route>
              <Route path="/">
                <MarketingLazy></MarketingLazy>
              </Route>
            </Switch>
          </Suspense>

        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
