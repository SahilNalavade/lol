import React, { useEffect } from 'react';


export default function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="fathima-naduthody-838b09217" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/fathima-naduthody-838b09217?trk=profile-badge">Fathima Naduthody</a></div>
  );
}