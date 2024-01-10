import React from "react";
import { weeks } from "../../constants/Constant";
import GetDates from "../../helper/GetDates";
import SmallCalenderRow from "../SmallCalender/SmallCalenderRow";
import "./leftSideBar.css"

interface LeftSideBarProps {
    today: Date,
    setToday: React.Dispatch<React.SetStateAction<Date>>
}

export default function LeftSideBar({ today, setToday }: LeftSideBarProps) {
    const todayMonth = today.toLocaleDateString('default', { month: "long" });
    const todayYear = today.getFullYear();
    const dates = GetDates(today.getFullYear(), today.getMonth() + 1);

    function handleBack() {

        const current = new Date(today)
        current.setMonth(current.getMonth() - 1);
        setToday(current);

    }
    function handleForward() {
        const current = new Date(today)
        current.setMonth(current.getMonth() + 1);
        setToday(current);
    }


    return (
        <section className="left-side-bar">
            <div className="small-calender">
                <div className="small-calender-month-header">
                    <div className="small-calender-month-container">
                        <h3 className="small-calender-month-text">{todayMonth + " " + todayYear}</h3>
                    </div>
                    <div className="small-calender-nav-container">
                        <a className="backward-btn" onClick={handleBack}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" id="small-back-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </a>
                        <a className="forward-btn" onClick={handleForward}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" id="small-fwd-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="small-calender-header-row">
                    {
                        weeks.map((w) => (
                            <div key={w} className="small-calender-header">
                                <p className="small-calender-header-text">{w.charAt(0)}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="small-calender-grid">
                    {
                        Object.keys(dates).map((date_idx) => (
                            <SmallCalenderRow key={date_idx} days={dates[date_idx]} today={today} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}