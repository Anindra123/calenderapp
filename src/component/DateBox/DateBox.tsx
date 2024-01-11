import { useContext, useRef } from "react";
import { months } from "../../constants/Constant";
import { DateInfo } from "../../types/DateTypes"
import "./DateBox.css"
import CreateEventModal from "../CreateEventModal/CreateEventModal";
import { EventContext } from "../../context/EventContext";
interface DateBoxProps {
    day: DateInfo,
    today: Date,
    color: string

}
export default function DateBox({ day,
    today, color }: DateBoxProps) {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const isActive = day.date === currentDate &&
        day.month === months[currentMonth] && day.year === currentYear
    const isTextMuted = day.month !== months[today.getMonth()]
    const currentBoxDate = new Date(day.year, months.indexOf(day.month), day.date + 1);

    const eventDialogRef = useRef<HTMLDialogElement | null>(null);
    const start_date: string = currentBoxDate.toISOString().split("T")[0];
    const eventContext = useContext(EventContext);


    function updateCurrentDate(date: Date, value: number) {

        date.setDate(date.getDate() + value);

        return date;
    }

    function handleModalOpen() {

        eventDialogRef.current?.showModal();
    }
    console.log(color);
    return (
        <>
            <CreateEventModal eventModalRef={eventDialogRef} startDate={start_date} />

            <a className="date-box" id={start_date} onClick={handleModalOpen}>
                <div className="day-number-container">

                    <a className={`day-number ${isActive && 'active'} ${isTextMuted && 'text-muted'}`}>{day.date === 1 ? <div className="day-number-text-container">
                        <p >{day.date.toString()}</p><p>{day.month.slice(0, 3)}</p>
                    </div>
                        : day.date.toString()}</a>

                    {
                        eventContext.events.map((event, idx) => (
                            currentBoxDate >= new Date(event.startDate) && currentBoxDate <= updateCurrentDate(new Date(event.endDate), 1) ?
                                (<a className="event-line" style={{ position: "absolute", display: "flex", backgroundColor: "blue", zIndex: 100, top: ((idx + 1) * 150) + "%", width: "101%", height: "18px", overflow: "visible" }} key={event.startDate}>
                                    <p className="event-title-text">

                                        {event.startDate === start_date ?
                                            event.title : ""}

                                    </p>
                                </a>) : (<div></div>)
                        ))
                    }


                </div>
            </a>
        </>
    )
}