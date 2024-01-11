
import React, { useRef } from "react";
import { months } from "../../constants/Constant";
import { DateInfo } from "../../types/DateTypes"
import "./DateBox.css"
import CreateEventModal from "../CreateEventModal/CreateEventModal";
interface DateBoxProps {
    day: DateInfo,
    today: Date,


}
export default function DateBox({ day,
    today }: DateBoxProps) {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const isActive = day.date === currentDate &&
        day.month === months[currentMonth] && day.year === currentYear
    const isTextMuted = day.month !== months[today.getMonth()]
    const currentBoxDate = new Date(day.year, months.indexOf(day.month), day.date + 1);

    const eventDialogRef = useRef<HTMLDialogElement | null>(null);
    const start_date: string = currentBoxDate.toISOString().split("T")[0];

  

    function handleModalOpen() {

        eventDialogRef.current?.showModal();
    }

    return (
        <>
            <CreateEventModal eventModalRef={eventDialogRef} startDate={start_date} />

            <a className="date-box" onClick={handleModalOpen}>
                <div className="day-number-container">


                    <a className={`day-number ${isActive && 'active'} ${isTextMuted && 'text-muted'}`}>{day.date === 1 ? <div className="day-number-text-container">
                        <p >{day.date.toString()}</p><p>{day.month.slice(0, 3)}</p>
                    </div>
                        : day.date.toString()}</a>



                </div>
            </a>
        </>
    )
}