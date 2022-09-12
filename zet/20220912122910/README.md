# What Integrations are available for Sentry?

Settings > Integrations:

  - Alerting (Slack)
    Settings > Integrations > Slack
  - Source code management
    When you enable an integration with you Source Code Management (SCM)
    provider, Sentry will analyze your commit data to:
    1) Identify suspect commits that likely introduced an error.
    2) Suggest assignees who can best resolve the error, based on the
       suspect commits and your codeowners file. (only on business plan)
    3) Mark an issue as Resolved via Commit or PR to stop notifications
       about similar errors in past releases and notify you of a
       regression.
    4) Link a Sentry issue to a new or existing issue in your integrated
       issue tracking solution. (ClickUp, Issue Creation/Linking)

  - Issue tracking
    Settings > Integrations > ClickUp

Related:
 - https://docs.sentry.io/product/accounts/getting-started/#32-source-code-management

        #logManagement #log #Sentry #integrations #clickUp #slack
        #gitlab
