import React from 'react';
import { Resume } from '../types';
interface Props {
  data: Resume[];
}
const ResumeCards: React.FC<Props> = (props) => {
  return (
    <div className="row clearfix">
      {props.data.map((item: Resume) => {
        return (
          <div key={'resume ' + item.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className={`info-box ${item.resumeBgColor} hover-expand-effect`}>
              <div className="icon">
                <i className="material-icons">{item.resumeIconName}</i>
              </div>
              <div className="content">
                <div className="text">{item.resumeTitle}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ResumeCards;