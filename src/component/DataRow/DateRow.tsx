import DateBox from "../DateBox/DateBox"
import "./DateRow.css"
export default function DateRow({ days }: { days: number[] }) {
    return (
        <div className="date-row" >
            <div className="date-box-container">
                {days.map((d) => (
                    <DateBox key={d} dayNumber={d.toString()} />
                ))}

            </div>
        </div>
    )
}