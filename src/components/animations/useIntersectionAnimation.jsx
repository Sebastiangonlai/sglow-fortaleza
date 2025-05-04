import { useEffect, useRef } from 'react';


const useIntersectionAnimation = (threshold = 0.5) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const node = elementRef.current; // Copia el valor de `elementRef.current`

        if (!node) return; // Verifica si el nodo existe antes de continuar

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('start-animation');
                } else {
                    entry.target.classList.remove('start-animation');
                }
            }, {
            threshold,
        });

        observer.observe(node);

        // Comprobación inicial al cargar la página
        if (node.getBoundingClientRect().top < window.innerHeight / 2) {
            node.classList.add('start-animation');
        }

        return () => {
            observer.unobserve(node);
        };
    }, [threshold]);

    return elementRef;
};

export default useIntersectionAnimation;
