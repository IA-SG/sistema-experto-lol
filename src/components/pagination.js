import React from 'react';
import Box from "@material-ui/core/Box";
import '../assets/styles/pagination.css';

const SwiperComponent = () => {
    return (
        <Box className="pagination__content" boxShadow={2}>
            <video width="580" height="255" controls >
                <source src="/videos/tutorial-edited.mp4" type="video/mp4" />
            </video>
        </Box>
    );
}

export default SwiperComponent;