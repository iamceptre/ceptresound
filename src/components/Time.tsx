import { useState, useEffect } from 'react'
const Time: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('12:00')
    const updateTime = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Europe/Warsaw',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
        }
        const formattedTime = new Intl.DateTimeFormat('pl-PL', options).format(date)
        setCurrentTime(formattedTime)
    }
    useEffect(() => {
        updateTime()
        const interval = setInterval(() => {
            updateTime()
        }, 5000)
        return () => clearInterval(interval);
    }, [])
    return <div className="time">{currentTime}</div>
}
export default Time