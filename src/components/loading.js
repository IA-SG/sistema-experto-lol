import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingComponent = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </div>
    );
}

export default LoadingComponent;
