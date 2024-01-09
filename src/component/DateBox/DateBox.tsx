import { months } from "../../constants/Constant";
import { DateInfo } from "../../types/DateTypes"
import "./DateBox.css"
interface DateBoxProps {
    day: DateInfo,
    today: Date,
}
export default function DateBox({ day, today }: DateBoxProps) {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const isActive = day.date === currentDate && day.month === months[currentMonth]
    const isTextMuted = day.month !== months[today.getMonth()]
    return (
        <div className="date-box">
            <div className="day-number-container">


                <a className={`day-number ${isActive && 'active'} ${isTextMuted && 'text-muted'}`}>{day.date === 1 ? <div className="day-number-text-container">
                    <p >{day.date.toString()}</p><p>{day.month.slice(0, 3)}</p>
                </div>
                    : day.date.toString()}</a>



            </div>
        </div>
    )
}