import React, { useState, useEffect } from 'react';
import { Resume, Tasks } from './types'
import BrowserUsage from './BrowserUsage';
import ResumesCard from './ResumeCards';
import TasksInfo from './TasksInfo';



const Home: React.FC<any> = (props) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [itensResume, setItensResume] = useState<Resume[]>([]);
    const [tasksInfo, setTasksInfo] = useState<Tasks[]>([]);

    const RESUME_ITENS_URL = 'data/resumeItens.json';
    const TASKS_ITENS_URL = 'data/tasksInfo.json';



    useEffect(() => {
        const getResume = async () => {
            if (!isLoaded) {
                // fetch Data
                fetch(RESUME_ITENS_URL)
                    .then((res) => res.json())
                    .then((data) => {
                        setItensResume(data);
                    });
            }

        }
        const getTasksItens = async () => {
            if (!isLoaded) {
                // fetch Data
                fetch(TASKS_ITENS_URL)
                    .then((res) => res.json())
                    .then((data) => {
                        setTasksInfo(data);
                        // console.table(data)
                        setIsLoaded(true);
                    });
            }
        }

        getResume();
        getTasksItens();

    }, [isLoaded, itensResume, tasksInfo]);

    if (isLoaded === false) {
        return <></>
    }

    return (
        <>
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>DASHBOARD</h2>
                    </div>
                    <ResumesCard data={itensResume} />
                    <div className="row clearfix">
                        <TasksInfo data={tasksInfo} />
                        <BrowserUsage />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;