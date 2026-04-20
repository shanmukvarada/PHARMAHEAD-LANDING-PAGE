import React from 'react';
import { renderToString } from 'react-dom/server';
import { TermsOfServicePage } from './src/TermsOfService';

try {
  const html = renderToString(<TermsOfServicePage onHome={() => {}} />);
  console.log("SUCCESS, HTML LENGTH:", html.length);
} catch (e) {
  console.error("REACT RUNTIME ERROR:", e);
}
