import { months } from "../../constants/Constant";
import { DateInfo } from "../../types/DateTypes";
import "./SmallCalender.css"

export default function SmallCalenderColumn({ day, today }: {
    day: DateInfo
    , today: Date
}) {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const isActive = day.date === currentDate &&
        day.month === months[currentMonth] && day.year === currentYear
    const isTextMuted = day.month !== months[today.getMonth()]
    return (
        <a className="small-calender-column">
            <div className={`small-calender-column-container ${isActive && "active"} ${isTextMuted && "muted"}`}>
                <p className={`small-calender-column-text`}>
                    {day.date}
                </p>
            </div>
        </a>
    )
}