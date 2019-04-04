import React from "react";
import { LinkButtons } from "../../components";

function WorkList() {
  return (
    <div className="Work-List">
      Work List
      <LinkButtons link="/front" children="Back" />
    </div>
  );
}

export default WorkList;
