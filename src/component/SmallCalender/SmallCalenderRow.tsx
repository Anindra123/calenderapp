import { DateInfo } from "../../types/DateTypes";
import SmallCalenderColumn from "./SmallCalenderColumn";
import "./SmallCalender.css"

export default function SmallCalenderRow({ days, today }: { days: DateInfo[], today: Date }) {
    return (
        <div className="small-calender-row">
            {days.map((day) => (
                <SmallCalenderColumn key={day.date} day={day} today={today} />
            ))}
        </div>
    )
}