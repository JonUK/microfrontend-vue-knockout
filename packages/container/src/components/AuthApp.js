import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          console.log('onNavigate called from auth app', nextPathname);
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []); // Only run the once on initial render

  return <div ref={ref} />;
}
