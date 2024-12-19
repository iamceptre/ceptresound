import { useState } from 'react';

const CopyToClipboard = () => {
    const [color, setColor] = useState('black');
    const [tooltipState, setTooltipState] = useState<'hidden' | 'visible' | 'fading'>('hidden');

    const handleCopy = async () => {
        const emailText = document.querySelector('.email')?.textContent;
        if (!emailText) return;

        try {
            await navigator.clipboard.writeText(emailText);

            setColor('#BDBDBD');
            setTooltipState('visible');

            setTimeout(() => {
                setTooltipState('fading');
                setColor('black');
                setTimeout(() => {
                    setTooltipState('hidden');
                }, 500);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    };

    const emailStyle = {
        color,
        cursor: 'pointer',
        transition: tooltipState === 'fading' ? 'color 0.5s ease' : 'color 0.166s ease', 
    };

    const tooltipStyle = {
        position: 'absolute' as const,
        top: '-25px',
        left: '0',
        background: '#737473',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        opacity:
            tooltipState === 'hidden'
                ? 0
                : tooltipState === 'visible'
                ? 1
                : tooltipState === 'fading'
                ? 0
                : 0,
        transition:
            tooltipState === 'visible'
                ? 'opacity 0.166s ease'
                : 'opacity 0.5s ease',
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
                className="email"
                onClick={handleCopy}
                style={emailStyle}
                role="button"
                tabIndex={0}
                aria-live="polite"
            >
                brandeburglukasz@gmail.com
            </span>
            {tooltipState !== 'hidden' && <div style={tooltipStyle}>Mail copied!</div>}
        </div>
    );
};

export default CopyToClipboard;
