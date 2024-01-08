import { useState } from "react"
import "./DateGrid.css"
import DateBox from "../DateBox/DateBox";
export default function DateGrid() {
    const [dates, setDates] = useState<Array<number>>(Array.from(Array(42).keys()));
    console.log(dates);
    return (
        <main className="date-grid">
            {dates.map((d) => (
                <DateBox dayNumber={d.toString()} dayName="" />
            ))}
        </main>
    )
}