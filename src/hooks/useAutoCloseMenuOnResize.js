import { useEffect } from 'react';

export const useAutoCloseMenuOnResize = (isOpen, close, breakpoint = 920) => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > breakpoint && isOpen) {
                close();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen, close, breakpoint]);
};