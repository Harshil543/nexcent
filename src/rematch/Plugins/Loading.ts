import createLoadingPlugin from '@rematch/loading'

export const loadingPlugin = createLoadingPlugin({
    whitelist: [
        'Users/userLogin',
        'Tab/getTabs',
        'Workspace/getWorkspaces',
        'Resources/getResources',
        'Resources/getResources',
        'Resources/deleteResourceSection',
        'Notes/getNotes',
        'Notes/deleteNoteSection',
        'Tasks/getTasks',
        'Tasks/deleteTaskSection',
        'Password/getPassword',
        'Password/deletePassword',
        'Teams/removeTeamMember',
        'Teams/getTeams',
        'Workspace/deleteWorkspace',
    ],
})
