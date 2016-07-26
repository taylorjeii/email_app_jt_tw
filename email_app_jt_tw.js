var emailData = {
  name: 'Outlook',
  mailboxes: [
    {
      name: 'inbox',
      numberOfMessages: 1478,
      lastMessage: {
        sender: 'Paypal',
        subject: "We're transferring money from PayPal to your bank"
      }
    },
    {
      name: 'Junk Email',
      numberOfMessages: 16,
      lastMessage: {
        sender: 'LinkedIn',
        subject: "Check out Debrine Williams's new skill"
      }
    },
    {
      name: 'Drafts',
      numberOfMessages: 17,
      lastMessage: {
        sender: 'James Taylor',
        subject: "Video Background"
      }
    },
    {
      name: 'Sent',
      numberOfMessages: undefined,
      lastMessage: {
        sender: 'James Taylor',
        subject: "Video Background"
      }
    }
  ],
  recentContacts: [
    {name: 'Terrence Whittaker', employer: 'Townsquare Interactive', emailAddress: 'twitt@gmail.com'},
    {name: 'Kobe Bryant', employer: 'Los Angeles Lakers', emailAddress: 'kb24@hotmail.com'},
    {name: 'Terry Crews', employer: 'Old Spice', emailAddress: 'tcrews@oldspice.com'}
  ]
}

// 1. Get a list of inbox names
 
var inboxNames = [];

for (var i = 0; i < emailData.mailboxes.length; i++ ) {
  var mailboxName = emailData.mailboxes[i].name;
  inboxNames.push(mailboxName);
}

console.log(inboxNames);