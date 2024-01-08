import "./DateBox.css"
interface DateBoxProps {
    dayNumber: string,
}
export default function DateBox({ dayNumber }: DateBoxProps) {


    return (
        <div className="date-box">
            <div className="day-number-container">
                <a className="day-number">{dayNumber}</a>
            </div>
        </div>
    )
}