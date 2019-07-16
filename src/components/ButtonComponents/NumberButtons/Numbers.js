import React, {useState} from "react";

//import any components needed

import NumberButton from './NumberButton';
// import {numbers} from '/GitWorkingFiles/lambda-calculator/src/data';
import { numbers } from '/../../../data';

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numberState, setNumber] = useState(numbers);
  // console.log({'numbers', { numberState });
  //should be getting an array, numberState is now numbers

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberState.map((number, index) => (
         <NumberButton number={number} key={index} />
       ))
       }
    </div>
  );
      };

export default Numbers;