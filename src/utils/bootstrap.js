/**
 * Created by jmlegrand on 05/06/16.
 */

import jsdom from 'jsdom';

export function bootstrapEnv(body = '') {
  console.log('bootstrapEnv() start');

  const doc = jsdom.jsdom(`<!doctype html><html><body>${body}</body></html>`);
  console.log('doc1', JSON.stringify(doc, null, 2));

  const win = doc.defaultView;

  function propagateToGlobal(window) {
    console.log('propagateToGlobal() start');

    for (const key in window) {
      if (!window.hasOwnProperty(key)) continue;
      if (key in global) continue;
      global[key] = window[key];
    }
  }

  global.document = doc;
  console.log('doc2', JSON.stringify(doc, null, 2));

  global.window = win;
  propagateToGlobal(win);
  console.log('\nENV setup is done !!!');
}