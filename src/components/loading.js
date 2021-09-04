import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingComponent = () => {
    return (
        <div style={{  margin: 'auto', width: '10vw' }}>
            <CircularProgress />
        </div>
    );
}

export default LoadingComponent;
