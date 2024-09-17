import React, {useState} from "react";

//import any components needed

import OperatorButton from './OperatorButton';

// import {} from '/GitWorkingFiles/lambda-calculator/src/data';
import { operators } from '../../../data';

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state


  const [operatorsState, setOperators] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorsState.map((operator, index) => <OperatorButton key ={index} operator={operator} /> 
       )
       }
    </div>
  );
};

export default Operators;