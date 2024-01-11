// import {     useState } from "react"
import "./DateGrid.css"
import DateRow from "../DateRow/DateRow";
import GetDates from "../../helper/GetDates";
import { weeks } from "../../constants/Constant";
import { useContext, useEffect, useRef, useState } from "react";
import { EventContext } from "../../context/EventContext";


interface DateGridProps {
    today: Date
}

interface Coordinate {
    width: number;
    startTop: number;
    startLeft: number;
}

export default function DateGrid({ today }: DateGridProps) {

    const initial_dates = GetDates(today.getFullYear(), today.getMonth() + 1);
    const colors = ["red", "green", "blue", "cyan", "yellow", "orange", "gray"]
    const date_row_container_ref = useRef<HTMLDivElement | null>(null);
    const [coords, setCoords] = useState<Coordinate[]>([]);
    const eventContext = useContext(EventContext);

    function getIsoDateString(date: string) {
        const curr_date = new Date(date);
        return curr_date.toISOString().split("T")[0];
    }

    useEffect(() => {
        const temp_widths = [...coords];

        eventContext.events.forEach((event) => {
            const startDiv = document.getElementById(getIsoDateString(event.startDate));
            const endDiv = document.getElementById(getIsoDateString(event.endDate));
            console.log(startDiv, event.endDate);
            const x1 = Number(startDiv?.getBoundingClientRect().x);
            const x2 = Number(endDiv?.getBoundingClientRect().x);
            const y1 = Number(startDiv?.getBoundingClientRect().y);
            const y2 = Number(endDiv?.getBoundingClientRect().y);

            const width = Math.sqrt((((x2 - x1) ** 2) + ((y2 - y1) ** 2)));


            temp_widths.push({ width: width, startTop: y1, startLeft: x1 });

            setCoords(temp_widths);


        })

        return () => setCoords([]);


    }, [])

    console.log(coords);


    return (
        <main className="date-grid">

            {/* {coords && coords.map((coord, idx) => (
                <div style={{
                    width: coord.width, height: "10px"
                    , top: coord.startTop + ((idx + 1) * 50), left: coord.startLeft
                    , backgroundColor: "red", position: "fixed", zIndex: 100
                }}></div>
            ))} */}
            <div className="date-header">
                {weeks.map((week) => (
                    <div key={week} className="day-title">
                        <p className="day-title-text">{week}</p>
                    </div>
                ))}
            </div>
            <div className="date-row-container" ref={date_row_container_ref}>
                {Object.keys(initial_dates)
                    .map((idx) => (
                        <DateRow color={colors[Math.floor(Math.random() * colors.length)]} date_row_container_ref={date_row_container_ref}
                            key={idx} today={today} days={initial_dates[idx]} />
                    ))}
            </div>
        </main>
    )
}