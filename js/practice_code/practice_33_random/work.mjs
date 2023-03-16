const getChunkConfig = (message) => {
    const messageSize = Buffer.byteLength(JSON.stringify(message), 'utf8');
    console.log('getChunkConfig ==> res', Math.ceil(messageSize / 27000));
    
    return {
        shouldCreateChunk: true,
        chunkCount: Math.ceil(messageSize / 27000)
    };
};
const isMessageOversize = (message, type) => {
    const sizeLimitation = {
        notificationMessage: 27000
    };
    const messageSize = Buffer.byteLength(JSON.stringify(message), 'utf8');
    console.log('isMessageOversize => messageSize', messageSize);
    console.log('isMessageOversize => result', messageSize >= sizeLimitation[type]);
    
    return messageSize >= sizeLimitation[type];
};

const reports = [
   {
     id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
     webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
     deliveryDelay: 5,
     dateAdded: '2023-03-16T13:49:44.000Z',
     event: 'issue_updated',
     issueKey: 'VTP-22',
     mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
     issueType: 'Task',
     summary: 'subtask test1',
     themeColor: 'DFE1E6',
     facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
     jiraDomain: 'https://viktorworkjira.atlassian.net',
     serviceUrl: 'https://smba.trafficmanager.net/emea/',
     msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
     user: {
       teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
       tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
     }
   },
   {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },


  {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },


 {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },


 {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },

 {
    id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
    webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
    deliveryDelay: 5,
    dateAdded: '2023-03-16T13:49:44.000Z',
    event: 'issue_updated',
    issueKey: 'VTP-22',
    mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
    issueType: 'Task',
    summary: 'subtask test1',
    themeColor: 'DFE1E6',
    facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
    jiraDomain: 'https://viktorworkjira.atlassian.net',
    serviceUrl: 'https://smba.trafficmanager.net/emea/',
    msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
    user: {
      teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
      tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
    }
  },
  {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },

 
 {
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},


{
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},


{
   id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
   webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
   deliveryDelay: 5,
   dateAdded: '2023-03-16T13:49:44.000Z',
   event: 'issue_updated',
   issueKey: 'VTP-22',
   mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
   issueType: 'Task',
   summary: 'subtask test1',
   themeColor: 'DFE1E6',
   facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
   jiraDomain: 'https://viktorworkjira.atlassian.net',
   serviceUrl: 'https://smba.trafficmanager.net/emea/',
   msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
   user: {
     teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
     tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
   }
 },
 {
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
{
  id: '3e81d9d7-0b17-4adb-98d5-c8ecd91edbac',
  webhookUrl: 'https://viktorbot.eu.ngrok.io/api/notify/users',
  deliveryDelay: 5,
  dateAdded: '2023-03-16T13:49:44.000Z',
  event: 'issue_updated',
  issueKey: 'VTP-22',
  mainParams: 'Status: **Selected for Development**     Type: **Task**     Priority: **Medium**     Assignee: **Unassigned**',
  issueType: 'Task',
  summary: 'subtask test1',
  themeColor: 'DFE1E6',
  facts: '[{"name":"Viktor Palchynskyi","value":"updated **status** *Backlog* ➠ **Selected for Development**"}]',
  jiraDomain: 'https://viktorworkjira.atlassian.net',
  serviceUrl: 'https://smba.trafficmanager.net/emea/',
  msId: '36fcdd6c-ba1d-457a-8977-e2b7f378b1ca',
  user: {
    teamUserId: '29:1FeB6vYI391v31C1yq9_45ZvJ8p6aiPyV9fo4i9EdH95x168bgEA3rJQ-pKqxQB8bO7J-vTaHGE6YEpA3uUCroA',
    tenantId: 'e768e143-ed5c-4052-91ac-a65d19a5fd07'
  }
},
];
 
const messageObj = {
   "@type":"MessageCard",
   "@context":"https://schema.org/extensions",
   "summary":"Jira issue updates in last 5 minutes",
   "themeColor":"FAD02F",
   "sections":[
   {
       "markdown":true,
       "startGroup":true,
       "activityTitle":"Jira issue updates in last 5 minutes",
       "activitySubtitle":"Tickets Created » **0**     Ticket Updates » **6**     Comments Added » **0**",
       "text":"Affected issues: **VTP-22, VTP-12, VTP-25, VTP-26, VTP-23**"
   },
   {
       "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
       "activityTitle":"VTP-22 subtask test1",
       "startGroup":true,
       "markdown":true,
       "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
       "facts":[
           {
               "name":"Viktor Palchynskyi",
               "value":"updated **status** *Backlog* ➠ **Backlog**"
           },
           {
               "name":"Viktor Palchynskyi",
               "value":"updated **status** *Selected for Development* ➠ **Backlog**"
           }
       ],
       "potentialAction":[
           {
               "@type ":"OpenUri",
               "name":"View",
               "targets":[
                   {
                       "os":"default",
                       "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                   }
               ]
           }
       ]
   },
   {
       "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
       "activityTitle":"VTP-22 subtask test1",
       "startGroup":true,
       "markdown":true,
       "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
       "facts":[
           {
               "name":"Viktor Palchynskyi",
               "value":"updated **status** *Backlog* ➠ **Backlog**"
           },
           {
               "name":"Viktor Palchynskyi",
               "value":"updated **status** *Selected for Development* ➠ **Backlog**"
           }
       ],
       "potentialAction":[
           {
               "@type ":"OpenUri",
               "name":"View",
               "targets":[
                   {
                       "os":"default",
                       "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                   }
               ]
           }
       ]
   },
   {
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},


{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},


{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},


{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},

{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
    "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
    "activityTitle":"VTP-22 subtask test1",
    "startGroup":true,
    "markdown":true,
    "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
    "facts":[
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Backlog* ➠ **Backlog**"
        },
        {
            "name":"Viktor Palchynskyi",
            "value":"updated **status** *Selected for Development* ➠ **Backlog**"
        }
    ],
    "potentialAction":[
        {
            "@type ":"OpenUri",
            "name":"View",
            "targets":[
                {
                    "os":"default",
                    "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
                }
            ]
        }
    ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},


{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},


{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},


{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
 "acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
 "activityTitle":"VTP-22 subtask test1",
 "startGroup":true,
 "markdown":true,
 "activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
 "facts":[
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Backlog* ➠ **Backlog**"
     },
     {
         "name":"Viktor Palchynskyi",
         "value":"updated **status** *Selected for Development* ➠ **Backlog**"
     }
 ],
 "potentialAction":[
     {
         "@type ":"OpenUri",
         "name":"View",
         "targets":[
             {
                 "os":"default",
                 "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
             }
         ]
     }
 ]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
{
"acti vityImage":"https://static.nextup.ai/images/cdn/task.png",
"activityTitle":"VTP-22 subtask test1",
"startGroup":true,
"markdown":true,
"activitySubtitle":"Status: **Backlog**     Type: **Task**     Priority: **Medium**     Assignee: **U nassigned**",
"facts":[
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Backlog* ➠ **Backlog**"
  },
  {
      "name":"Viktor Palchynskyi",
      "value":"updated **status** *Selected for Development* ➠ **Backlog**"
  }
],
"potentialAction":[
  {
      "@type ":"OpenUri",
      "name":"View",
      "targets":[
          {
              "os":"default",
              "uri":"https://teams.microsoft.com/l/task/ab00c235-d614-4430-9072-7eeb7900c446?url=https://viktorcore.eu.ngrok.io/client/task-modules/issue-view/VTP-22?botType%253Dintegration&hei ght=large&width=large&title=View&completionBotId=ac61a6c4-a176-4d26-bc24-63b147a6a7dc"
          }
      ]
  }
]
},
]
}

console.log(messageObj.sections.length);

export const processCardSending = async (groups) => {
    let chunkMessageConfig = {
        shouldCreateChunk: false,
        chunkCount: 0
    };

    if (isMessageOversize(messageObj, 'notificationMessage')) {
        chunkMessageConfig = getChunkConfig(messageObj);
        // break;
    }

    // for (const group of groups) {
    //     // group.card = buildBatchCard(group.reports, group.connectorName);
    //     console.log('processCardSending => group.reports', group.reports);

    //     if (isMessageOversize(messageObj, 'message')) {
    //         chunkMessageConfig = getChunkConfig(messageObj);
    //         break;
    //     }

    // }
    const chunks = Array.from({ length: chunkMessageConfig.chunkCount }, () => {
        return [...reports].splice(0, Math.ceil(reports.length / chunkMessageConfig.chunkCount));
    });
    // console.log('chunks', chunks);
    console.log(reports.length);
    // console.log(chunks);
    for (const chunk of chunks) {
        console.log(chunk.length);
        console.log(chunk);
    }
    // if (chunkMessageConfig.shouldCreateChunk) {
    //     for (const group of groups) {
            
    //         // group.card = buildBatchCard(group.reports, group.connectorName);
    //     }
    // } else {
    //     // await sendGroupCards(groups);
    // }
};

processCardSending();