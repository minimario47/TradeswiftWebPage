import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        let rafId = 0;
        let timeoutId = 0;

        const scrollToHash = () => {
            if (!hash) return false;
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return true;
            }
            return false;
        };

        const handleScroll = () => {
            if (scrollToHash()) return;
            timeoutId = window.setTimeout(() => {
                if (!scrollToHash()) {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
            }, 50);
        };

        rafId = window.requestAnimationFrame(handleScroll);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.clearTimeout(timeoutId);
        };
    }, [pathname, hash]);

    return null;
}
