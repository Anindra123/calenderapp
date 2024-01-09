import React from "react";
import "./navbar.css"
interface NavBarProps {
    today: Date
    setToday: React.Dispatch<React.SetStateAction<Date>>
}


export default function Navbar({ today, setToday }: NavBarProps) {
    const todayMonth = today.toLocaleDateString('default', { month: "long" });
    const todayYear = today.getFullYear();

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
        <nav>
            <div className="brand">
                <a className="nav-btn">
                    <div className="nav-btn-bar"></div>
                    <div className="nav-btn-bar"></div>
                    <div className="nav-btn-bar"></div>
                </a>
                <h2>CalenderApp</h2>
                <div className="navigation-container">
                    <a className="back-btn" onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </a>
                    <a className="forward-btn" onClick={handleForward}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </a>
                </div>
                <div>
                    <h2>{todayMonth + " " + todayYear}</h2>
                </div>

            </div>
            <div>

            </div>
        </nav>
    )
}