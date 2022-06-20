import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          console.log('onNavigate called from marketing app', nextPathname);
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []); // Only run the once on initial render

  return <div ref={ref} />;
}
