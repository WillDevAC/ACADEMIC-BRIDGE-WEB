import React from "react";
import { Link } from "react-router-dom";
import { Tasks } from '../types';


interface Props {
  data: Tasks[]
}

const TasksInfo: React.FC<Props> = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
      <div className="card">
        <div className="header">
          <h2>TASK INFOOOOSS</h2>
          <ul className="header-dropdown m-r--5">
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="material-icons">more_vert</i>
              </Link>
              <ul className="dropdown-menu pull-right">
                <li>
                  <Link to="#">Action</Link>
                </li>
                <li>
                  <Link to="#">Another action</Link>
                </li>
                <li>
                  <Link to="#">Something else here</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="body">
          <div className="table-responsive">
            <table className="table table-hover dashboard-task-infos">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Manager</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((item: Tasks )=> {
                  return (
                    <tr key={'task_' + item.id}>
                      <td>{item.id}</td>
                      <td>{item.taskName}</td>
                      <td>
                        <span className={`label ${item.taskStatusBgColor}`}>{item.taskStatus}</span>
                      </td>
                      <td>{item.taskManager}</td>
                      <td>
                        <div className="progress">
                          <div
                            className={`progress-bar ${item.taskPercentageColor}`}
                            role="progressbar"
                            aria-valuenow={Number(item.taskPercentage)}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: item.taskPercentage + "%" }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksInfo;