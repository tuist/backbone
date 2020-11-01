import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const setupErrorTracking = () => {
  if (SENTRY_FRONTEND_DSN && SENTRY_FRONTEND_DSN !== "") {
    Sentry.init({
      dsn: `${SENTRY_FRONTEND_DSN}`,
      integrations: [new Integrations.BrowserTracing()],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    });
  }
};

export default setupErrorTracking;
