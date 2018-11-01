/*global chrome, gsUtils, assertTrue */
var testSuites = typeof testSuites === 'undefined' ? [] : testSuites;
testSuites.push(
  (function() {
    'use strict';

    const tests = [
      // Test gsUtils.setTimeout
      async () => {
        const timeout = 500;
        const timeBefore = new Date().getTime();
        await gsUtils.setTimeout(timeout);
        const timeAfter = new Date().getTime();
        const isTimeAfterValid =
          timeAfter > timeBefore + timeout &&
          timeAfter < timeBefore + timeout + 200;

        return assertTrue(isTimeAfterValid);
      },

      // Test gsUtils.getRootUrl
      async () => {
        const rawUrl1 = 'https://google.com';
        const isUrl1Valid =
          gsUtils.getRootUrl(rawUrl1, false, false) === 'google.com' &&
          gsUtils.getRootUrl(rawUrl1, true, false) === 'google.com' &&
          gsUtils.getRootUrl(rawUrl1, false, true) === 'https://google.com' &&
          gsUtils.getRootUrl(rawUrl1, true, true) === 'https://google.com';

        const rawUrl2 = 'https://google.com/';
        const isUrl2Valid =
          gsUtils.getRootUrl(rawUrl2, false, false) === 'google.com' &&
          gsUtils.getRootUrl(rawUrl2, true, false) === 'google.com' &&
          gsUtils.getRootUrl(rawUrl2, false, true) === 'https://google.com' &&
          gsUtils.getRootUrl(rawUrl2, true, true) === 'https://google.com';

        const rawUrl3 = 'https://google.com/search?source=hp&ei=T2HWW9jfGoWJ5wKzt4WgBw&q=rabbits&oq=rabbits&gs_l=psy-ab.3..35i39k1l2j0i67k1l6j0i10k1j0i67k1.1353.2316.0.2448.9.7.0.0.0.0.120.704.4j3.7.0....0...1c.1.64.psy-ab..2.7.701.0..0.0.dk-gx_j1MUI';
        const isUrl3Valid =
          gsUtils.getRootUrl(rawUrl3, false, false) === 'google.com' &&
          gsUtils.getRootUrl(rawUrl3, true, false) === 'google.com/search' &&
          gsUtils.getRootUrl(rawUrl3, false, true) === 'https://google.com' &&
          gsUtils.getRootUrl(rawUrl3, true, true) === 'https://google.com/search';

        const rawUrl4 = 'www.google.com';
        const isUrl4Valid =
          gsUtils.getRootUrl(rawUrl4, false, false) === 'www.google.com' &&
          gsUtils.getRootUrl(rawUrl4, true, false) === 'www.google.com' &&
          gsUtils.getRootUrl(rawUrl4, false, true) === 'www.google.com' &&
          gsUtils.getRootUrl(rawUrl4, true, true) === 'www.google.com';

        const rawUrl5 = 'https://github.com/deanoemcke/thegreatsuspender/issues/478#issuecomment-430780678';
        const isUrl5Valid =
          gsUtils.getRootUrl(rawUrl5, false, false) === 'github.com' &&
          gsUtils.getRootUrl(rawUrl5, true, false) === 'github.com/deanoemcke/thegreatsuspender/issues/478' &&
          gsUtils.getRootUrl(rawUrl5, false, true) === 'https://github.com' &&
          gsUtils.getRootUrl(rawUrl5, true, true) === 'https://github.com/deanoemcke/thegreatsuspender/issues/478';

        const rawUrl6 = 'file:///Users/dean/Downloads/session%20(63).txt';
        const isUrl6Valid =
          gsUtils.getRootUrl(rawUrl6, false, false) === '/Users/dean/Downloads' &&
          gsUtils.getRootUrl(rawUrl6, true, false) === '/Users/dean/Downloads/session%20(63).txt' &&
          gsUtils.getRootUrl(rawUrl6, false, true) === 'file:///Users/dean/Downloads' &&
          gsUtils.getRootUrl(rawUrl6, true, true) === 'file:///Users/dean/Downloads/session%20(63).txt';

        const rawUrl7 = 'https://analytics.google.com/analytics/web/#/report-home/a52338347w84781065p87884368';
        const isUrl7Valid =
          gsUtils.getRootUrl(rawUrl7, false, false) === 'analytics.google.com' &&
          gsUtils.getRootUrl(rawUrl7, true, false) === 'analytics.google.com/analytics/web' &&
          gsUtils.getRootUrl(rawUrl7, false, true) === 'https://analytics.google.com' &&
          gsUtils.getRootUrl(rawUrl7, true, true) === 'https://analytics.google.com/analytics/web';

        return assertTrue(isUrl1Valid && isUrl2Valid && isUrl3Valid && isUrl4Valid && isUrl5Valid && isUrl6Valid&& isUrl7Valid);
      },
    ];

    return {
      name: 'gsUtils Library',
      tests,
    };
  })()
);
