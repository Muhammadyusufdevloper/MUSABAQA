import React, { memo, useEffect, useState } from 'react'
import './loading.scss'

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
            <div className="loader"></div>
        </div>
    );
}

export default memo(Loading)