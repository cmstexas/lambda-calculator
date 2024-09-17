import React from "react";
import { styles } from "ansi-colors";

const Display = (props) => {
  return <div>{
    /* Display any props data here */
  <div className={styles.display}>{props.data}</div>
  }</div>;
};

export default Display;