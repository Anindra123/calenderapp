import { DateInfo } from "../../types/DateTypes"
import DateBox from "../DateBox/DateBox"
import "./DateRow.css"
export default function DateRow({ days, today }: { days: DateInfo[], today: Date }) {
    return (
        <div className="date-row" >
            <div className="date-box-container">
                {days.map((d) => (
                    <DateBox today={today} key={d.date} day={d} />
                ))}

            </div>
        </div>
    )
}