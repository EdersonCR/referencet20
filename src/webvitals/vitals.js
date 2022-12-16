const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
  return 'connection' in navigator &&
    navigator['connection'] &&
    'effectiveType' in navigator['connection']
    ? navigator['connection']['effectiveType']
    : '';
}

export function sendToAnalytics(metric) {
  const analyticsId = process.env.REACT_APP_VERCEL_ANALYTICS_ID;
  if (!analyticsId) {
    return;
  }

  const body = {
    dsn: analyticsId, // qPgJqYH9LQX5o31Ormk8iWhCxZO
    id: metric.id, // v2-1653884975443-1839479248192
    page: window.location.pathname, // /blog/[slug]
    href: window.location.href, // https://my-app.vercel.app/blog/my-test
    event_name: metric.name, // TTFB
    value: metric.value.toString(), // 60.20000000298023
    speed: getConnectionSpeed(), // 4g
  };

  const blob = new Blob([new URLSearchParams(body).toString()], {
    // This content type is necessary for `sendBeacon`
    type: 'application/x-www-form-urlencoded',
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
    });
}
