import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
    const location = useLocation(); // Store the URL
    const section = useRef(''); // Store the section name within the URL

    // Run this everytime URL changes
    useEffect(() => {
        if (location.hash) {
            section.current = location.hash.slice(1);
        }

        if (section.current && document.getElementById(section.current)) {
            setTimeout(() => {
                document
                    .getElementById(section.current)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                section.current = '';
            }, 100);
        }
    }, [location]);

    return null;
}

export default ScrollToSection;