import { useState } from 'react';

const copyToClipboard = () => {
    const [color, setColor] = useState<string>('black')
    const green = 'hsl(95, 50%, 30%)'
    const handleClick = () => {
        const copyText = document.querySelector('.email')
        setColor(green)
        writeClipboardText(copyText.textContent)
        setTimeout(() => {
            setColor('black')
        }, 1000)
    }

    async function writeClipboardText(text: string) {
        try {
          await navigator.clipboard.writeText(text)
        } catch (error) {
          console.error(error.message)
        }
    }
    return (
        <span onClick={handleClick} className="email"
        style={{
            color: color, 
            transition: 'color 0.05s ease'
        }}
        >
            brandeburglukasz@gmail.com
        </span>
    )
}

export default copyToClipboard