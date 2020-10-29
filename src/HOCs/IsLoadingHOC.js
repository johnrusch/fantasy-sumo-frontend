import React, { useState } from 'react';

const IsLoadingHOC = (WrappedComponent, loadingMessage) => {

    function HOC(props) {
        const [isLoading, setIsLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setIsLoading(isComponentLoading);
        }

        return (
            <>
                {isLoading && loadingMessage}
                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        )
    }

    return HOC;
}

export default IsLoadingHOC;