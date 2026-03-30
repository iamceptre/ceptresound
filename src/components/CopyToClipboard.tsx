import { useState } from 'react'

const EMAIL = 'brandeburglukasz@gmail.com'

type State = 'idle' | 'copied' | 'fading'

const CopyToClipboard = () => {
    const [state, setState] = useState<State>('idle')

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setState('copied')
            setTimeout(() => setState('fading'), 1000)
            setTimeout(() => setState('idle'),   1500)
        } catch (e) {
            console.error('Copy failed:', e)
        }
    }

    const copied = state !== 'idle'

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
                className="email"
                onClick={handleCopy}
                role="button"
                tabIndex={0}
                aria-live="polite"
                style={{
                    cursor: 'pointer',
                    color: copied ? '#BDBDBD' : 'black',
                    transition: state === 'fading' ? 'color 0.5s ease' : 'color 0.166s ease',
                }}
            >
                {EMAIL}
            </span>
            {copied && (
                <div style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '0',
                    background: '#737473',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    opacity: state === 'copied' ? 1 : 0,
                    transition: state === 'copied' ? 'opacity 0.166s ease' : 'opacity 0.5s ease',
                }}>
                    Mail copied!
                </div>
            )}
        </div>
    )
}

export default CopyToClipboard
