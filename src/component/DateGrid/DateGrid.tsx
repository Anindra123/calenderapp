// import {     useState } from "react"
import "./DateGrid.css"
import DateRow from "../DataRow/DateRow";
export default function DateGrid() {
    const intial_dates: { [id: string]: number[] } = {
        1: Array.from(Array(7).keys()),
        2: Array.from(Array(7).keys()),
        3: Array.from(Array(7).keys()),
        4: Array.from(Array(7).keys()),
        5: Array.from(Array(7).keys()),
        6: Array.from(Array(7).keys()),
    }
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    return (
        <main className="date-grid">
            <div className="date-header">
                {days.map((day) => (
                    <div key={day} className="day-title">
                        <p className="day-title-text">{day}</p>
                    </div>
                ))}
            </div>
            <div className="date-row-container">
                {Object.keys(intial_dates)
                    .map((idx) => (
                        <DateRow days={intial_dates[idx]} />
                    ))}
            </div>
        </main>
    )
}