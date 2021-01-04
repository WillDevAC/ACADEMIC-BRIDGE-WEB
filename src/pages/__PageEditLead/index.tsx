import React from "react";
import "./index.css";

import EditViewer from "../../components/__ComponentEditLead/index";

interface Props {}

const EditLead: React.FC<Props> = (props) => {
  return (
    <>
      <section className="content">
        <EditViewer />
      </section>
    </>
  );
};
export default EditLead;
