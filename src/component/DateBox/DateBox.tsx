import "./DateBox.css"
interface DateBoxProps {
    dayName: string,
    dayNumber: string,
}
export default function DateBox({ dayName, dayNumber }: DateBoxProps) {


    return (
        <div className="date-box">
            <div className="day-name-container">
                <p className="day-name">{dayName}</p>
            </div>
            <div className="day-number-container">
                <p className="day-number">{dayNumber}</p>
            </div>
        </div>
    )
}