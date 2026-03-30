import { useState, useEffect } from 'react'

function getTime(): string {
    return new Intl.DateTimeFormat('pl-PL', {
        timeZone: 'Europe/Warsaw',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).format(new Date())
}

const Time: React.FC = () => {
    // Lazy initializer — calls getTime() once on mount, no '12:00' flash
    const [time, setTime] = useState(getTime)

    useEffect(() => {
        const id = setInterval(() => setTime(getTime()), 5000)
        return () => clearInterval(id)
    }, [])

    return <div className="time">{time}</div>
}

export default Time
