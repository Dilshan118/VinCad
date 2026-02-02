import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants, Transition } from 'motion/react';

type AnimateBy = 'words' | 'characters';
type TextDirection = 'top' | 'bottom' | 'left' | 'right' | 'none';

interface BlurTextProps {
    text: string;
    className?: string;
    elementClassName?: string; // Applied to each animated word/character span
    delay?: number;
    animateBy?: AnimateBy;
    direction?: TextDirection;
    threshold?: number;
    rootMargin?: string;
    onAnimationComplete?: () => void;
}

const createVariants = (direction: TextDirection): Variants => {
    const distance = 24;

    const baseHidden: { opacity: number; filter: string; x?: number; y?: number } = {
        opacity: 0,
        filter: 'blur(10px)',
    };

    const baseVisible: { opacity: number; filter: string; x?: number; y?: number } = {
        opacity: 1,
        filter: 'blur(0px)',
    };

    switch (direction) {
        case 'top':
            baseHidden.y = -distance;
            baseVisible.y = 0;
            break;
        case 'bottom':
            baseHidden.y = distance;
            baseVisible.y = 0;
            break;
        case 'left':
            baseHidden.x = -distance;
            baseVisible.x = 0;
            break;
        case 'right':
            baseHidden.x = distance;
            baseVisible.x = 0;
            break;
        default:
            break;
    }

    return {
        hidden: baseHidden,
        visible: baseVisible,
    };
};

const BlurText: React.FC<BlurTextProps> = ({
    text,
    className = '',
    elementClassName = '',
    delay = 0.05,
    animateBy = 'words',
    direction = 'bottom',
    threshold = 0.1,
    rootMargin = '0px',
    onAnimationComplete,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: threshold });
    const [hasAnimated, setHasAnimated] = useState(false);

    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const variants = createVariants(direction);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    const getTransition = (index: number): Transition => ({
        duration: 0.5,
        delay: index * delay,
        ease: [0.25, 0.4, 0.25, 1],
    });

    return (
        <motion.span
            ref={ref}
            className={`inline ${className}`}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {elements.map((element, index) => (
                <motion.span
                    key={`${element}-${index}`}
                    className={elementClassName}
                    variants={variants}
                    transition={getTransition(index)}
                    onAnimationComplete={
                        index === elements.length - 1 ? onAnimationComplete : undefined
                    }
                    style={{ display: 'inline-block', willChange: 'filter, opacity, transform' }}
                >
                    {element}
                    {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default BlurText;
