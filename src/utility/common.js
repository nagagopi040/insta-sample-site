/**
 * Implement Common Functionaltity in this file.
*/

import React from "react";

import { DynamicComponent } from "../components";

/* eslint-disable */
export const Common = {
  reactstrapVoidElements: ["CardImg"],
  getRandomId: () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  removeEmptyValue :(settings) => {
   for (var key in settings) { 
    if (settings[key] === null || settings[key] === undefined  ) {
      delete settings[key];
    }
  }
    return settings;
  },
  mergeDeep: (...objects) => {
    const isObject = obj => obj && typeof obj === "object";    
    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];
        
        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        }
        else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = Common.mergeDeep(pVal, oVal);
        }
        else if (oVal !== "") {
          prev[key] = oVal;
        }
      });      
      return prev;
    }, {});
  },
  getLayout: (componentSet) => {
    componentSet = componentSet && componentSet.length ? componentSet : [];

    return (
      <>
      {
        componentSet.map((set, index) => {
          return (
            <>
              <DynamicComponent {...set} key={index}/>
              { set && !Common.isPrimaryComponent(set) && Common.getLayout(set.componentSet) }
            </>
          )
        })
      }
      </>
    )
  },
  isPrimaryComponent: (props) => {
    if (props.componentSet) {
      return true;
    }
    return false;
  },
  isValidArray: (array) => {
    if (array && array.length) {
      return true;
    }
    return false;
  },
  isVoidElements: (props) => {
    if (Common.reactstrapVoidElements.indexOf(props.componentName) !== -1) {
      return true;
    }
    return false;
  },
  googletagmanagerpush(val) { 
    dataLayer.push({
        ...val
    });
  }
}