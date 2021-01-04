
interface Tasks {
    id: string;
    taskName: string;
    taskStatus: string;
    taskStatusBgColor: string;
    taskManager: string;
    taskPercentage: string;
    taskPercentageColor: string;
}
interface Resume {
    id: string;
    resumeTitle: string;
    resumeBgColor: string;
    resumeIconName: string;
}




export type { Tasks, Resume }