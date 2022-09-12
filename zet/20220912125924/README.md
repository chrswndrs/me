# What is Sampling in Sentry?

Sampling Transaction Events:
We recommend sampling your transactions for two reasons:
  - Capturing a single trace involves minimal overhead, but capturing
    traces for every page load or every API request may add an
    undesirable load to your system.
  - Enabling sampling allows you to better manage the number of events
    sent to Sentry, so you can tailor your volume to your organization's
    needs.

Sentry SDKs  have two configuration options to control the volume of
transactions sent to Sentry, allowing you to take a representative
sample:

  1) Uniform sample rate: `TracesSampleRate`:
    - Provides an even cross-section of transactions, no matter where in
      your app or under what circumstance they occur.
    - Uses default inheritance and precedence behavior.

  2) Sampling function `TracesSampler`:
    - Samples different transactions at different rates
    - Filters out some transactions entirely
    - Modifies default precedence and inheritance behavior

Related:
https://docs.sentry.io/platforms/dotnet/guides/aspnet/configuration/sampling/

      #logManagement #log #Sentry #Sampling
