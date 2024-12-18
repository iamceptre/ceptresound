import { useState } from 'react';

const CopyToClipboard = () => {
    const [color, setColor] = useState('black');
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleCopy = async () => {
        const emailText = document.querySelector('.email')?.textContent;
        if (!emailText) return;

        try {
            await navigator.clipboard.writeText(emailText);
            setColor('hsl(95, 50%, 30%)');
            setTooltipVisible(true);

            setTimeout(() => {
                setColor('black');
                setTooltipVisible(false);
            }, 1500);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    };

    const emailStyle = {
        color,
        cursor: 'pointer',
        transition: 'color 0.2s ease',
    };

    const tooltipStyle = {
        position: 'absolute' as const,
        top: '-25px',
        left: '0',
        background: '#141414',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
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
            {isTooltipVisible && (
                <div style={tooltipStyle}>
                    Mail copied!
                </div>
            )}
        </div>
    );
};

export default CopyToClipboard;