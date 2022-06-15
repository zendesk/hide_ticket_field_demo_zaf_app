client.on('app.registered',
    async function hideAssigneeField() {
        const user = await client.get('currentUser');

        if (user.currentUser.tags.includes('hide_assignee' || user.currentUser.role === 'light_agent')) {
            client.invoke('ticketFields:assignee.hide');
        } else {
            client.invoke('ticketFields:assignee.show');
        }
    });