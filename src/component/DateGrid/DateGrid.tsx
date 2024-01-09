// import {     useState } from "react"
import "./DateGrid.css"
import DateRow from "../DateRow/DateRow";
import GetDates from "../../helper/GetDates";
import { weeks } from "../../constants/Constant";

interface DateGridProps {
    today: Date
}

export default function DateGrid({ today }: DateGridProps) {

    const initial_dates = GetDates(today.getFullYear(), today.getMonth() + 1);

    return (
        <main className="date-grid">
            <div className="date-header">
                {weeks.map((week) => (
                    <div key={week} className="day-title">
                        <p className="day-title-text">{week}</p>
                    </div>
                ))}
            </div>
            <div className="date-row-container">
                {Object.keys(initial_dates)
                    .map((idx) => (
                        <DateRow key={idx} today={today} days={initial_dates[idx]} />
                    ))}
            </div>
        </main>
    )
}