import { DateInfo } from "../../types/DateTypes"
import DateBox from "../DateBox/DateBox"
import "./DateRow.css"
interface DateRowProps {
    days: DateInfo[];
    today: Date;
}

export default function DateRow({ days,
    today,
}: DateRowProps) {
    return (
        <div className="date-row" >
            <div className="date-box-container">
                {days.map((d) => (
                    <DateBox
                        today={today}
                        key={d.date} day={d} />
                ))}

            </div>
        </div>
    )
}