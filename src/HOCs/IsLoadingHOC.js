import React, { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";

const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
//   const store = useStore();
  const appBusy = false;

  function HOC(props) {
    // const [isLoading, setIsLoading] = useState(false);

    // const setLoadingState = isComponentLoading => {
    //     setIsLoading(isComponentLoading);
    // }
    return (
    <>
    {appBusy ? loadingMessage : <WrappedComponent {...props} />}
    </>
    );
  }

  return HOC;
};

export default IsLoadingHOC;
