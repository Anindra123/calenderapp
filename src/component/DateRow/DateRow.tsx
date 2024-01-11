import React from "react";
import { DateInfo } from "../../types/DateTypes"
import DateBox from "../DateBox/DateBox"
import "./DateRow.css"
// import { EventContext } from "../../context/EventContext";
interface DateRowProps {
    days: DateInfo[];
    today: Date;
    color: string;
    date_row_container_ref: React.MutableRefObject<HTMLDivElement | null>
}


export default function DateRow({ days,
    today, color
}: DateRowProps) {
    // const eventContext = useContext(EventContext);



    return (
        <div className="date-row" >
            {/* <div className="event-line-container">
                {widths && widths.map((coords) => (
                    <div style={{
                        position: "absolute", top: coords.startTop + "%", left: coords.startLeft + "%",
                        width: coords.width, height: 10, backgroundColor: "red", zIndex: 100
                    }}></div>
                ))}
            </div> */}
            <div className="date-box-container">
                {days.map((d) => (
                    <DateBox
                        color={color}
                        today={today}
                        key={d.date} day={d} />
                ))}

            </div>
        </div>
    )
}