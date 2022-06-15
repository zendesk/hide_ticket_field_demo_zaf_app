# Hide assignee field

This app demonstrates ZAF's [ticket field hide](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticketfieldhide) functionality. In this app, we are hiding the ticket assignee field if the user has the tag "hide_assignee" on their profile or if the user is a light agent. There are many more things that can be done with ticket fields, see our [Ticket Field object docs](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticket-field-object) for more information.

## Getting started

Follow these steps to get a local copy up and running.

### Prerequisites

- Zendesk Command Line (ZCLI)

[Using Zendesk Command Line](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#installing-and-updating-zcli)

### Installation

1. Clone the repo

    ``` bash
    git clone https://github.com/example.git
    ```

2. Run the app.

    ``` bash
    zcli apps:server
    ```

3. Either test by logging in as a light agent or add the user tag "hide_assignee" to your profile.

Note: you do need to refresh your apps for the changes to take affect. Additionally, if you remove the tag, refreshing the apps will cause the ticket assignee to be seen again.

[Testing your Zendesk app locally](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#testing-your-zendesk-app-locally)

<!-- Links to relevant resources such as help center articles or dev docs -->

## Additional Resources

- [Zendesk Apps Guide](https://developer.zendesk.com/documentation/apps/)
- [Apps Support API documentation](https://developer.zendesk.com/api-reference/apps/apps-support-api/introduction/)
- [ZAF hide ticket field property](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticketfieldhide)
- [ZAF Ticket Field Object](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticket-field-object)
- [ZAF app.registered event](https://developer.zendesk.com/api-reference/apps/apps-core-api/core_api/#appregistered)

<!-- Issue reporting with link to repo issues page -->

## Issues

You can [create an issue on Github](https://github.com/zendesk/example/issues/new),
reach out in our [Developer Community](https://support.zendesk.com/hc/en-us/community/topics),
or report the issue in the [Zendesk Developers Slack group](https://docs.google.com/forms/d/e/1FAIpQLScm_rDLWwzWnq6PpYWFOR_PwMaSBcaFft-1pYornQtBGAaiJA/viewform).
