import { useEffect, useState } from 'react'
import './CreateEventModal.css'
import { EventError } from '../../types/ErrorTypes'
import { Event } from '../../types/EventType'

interface EventModalProps {
    eventModalRef: React.RefObject<HTMLDialogElement>
    start_date: string,
}

export default function CreateEventModal({ start_date, eventModalRef }: EventModalProps) {
    const [eventErr, setEventErr] = useState<EventError>({ titleErr: "", endDateErr: "", startDateErr: "" })
    const [event, setEvent] = useState<Event>({ title: "", startDate: start_date, endDate: "" })
    function handleSubmit() {
        let hasError = false;
        setEventErr({ titleErr: "", endDateErr: "", startDateErr: "" })
        console.log(event.title)

        if (event.title.trim().length === 0) {
            setEventErr({ ...eventErr, titleErr: "Title cannot be empty" })
            hasError = true;
        }

        if (event.startDate === "") {
            setEventErr({ ...eventErr, startDateErr: "Start Date is required" })
            hasError = true;
        }
        else if (new Date(event.startDate) > new Date(event.endDate)) {
            setEventErr({ ...eventErr, startDateErr: "Start Date must be less than end date" })
            hasError = true;
        }


        if (event.endDate === "") {
            setEventErr({ ...eventErr, endDateErr: "End Date is required" })
            hasError = true;
        }
        else if (new Date(event.endDate) < new Date(event.startDate)) {
            setEventErr({ ...eventErr, startDateErr: "End Date must be greater than start date" })
            hasError = true;
        }
        console.log(eventErr)
        if (!hasError) {
            console.log(eventErr);
        }



    }

    useEffect(() => {

        function handleClick(e: KeyboardEvent) {
            if (e.key === "Enter") {
                handleSubmit();
            }
        }

        document.body.addEventListener("keyup", handleClick);

        return () => document.body.removeEventListener("keyup", handleClick);
    })


    return (
        <dialog className="event-dialog" ref={eventModalRef}>
            <div className="event-dialog-container">
                <div className="event-dialog-header">
                    <div className='dialog-header-container'>
                        <h2 >Create Event</h2>
                    </div>
                </div>
                <div className="event-dialog-content">
                    <div className="event-dialog-input-group">
                        <div className="input-label-container">
                            <h3 className="input-label-text">Event Title:</h3>
                        </div>
                        <div className="input-container">
                            <input className="event-dialog-input" type="text" value={event.title} onChange={(e) => { setEvent({ ...event, title: e.currentTarget.value }) }}></input>
                            <span className="error-message">{eventErr.titleErr}</span>
                        </div>
                    </div>
                    <div className="event-dialog-date-group">
                        <div className="event-dialog-start-date">
                            <div className="input-label-container">
                                <h3 className="input-label-text">Event start date:</h3>
                            </div>
                            <div className="input-date-container">
                                <input type="date" className="event-dialog-date"
                                    name="" id=""
                                    value={event.startDate}
                                    onChange={(e) => setEvent({ ...event, startDate: e.currentTarget.value })} />
                                <span className="error-message">{eventErr.startDateErr}</span>
                            </div>

                        </div>
                        <div className="event-dialog-end-date">
                            <div className="input-label-container">
                                <h3 className="input-label-text">Event end date:</h3>
                            </div>
                            <div className="input-date-container">
                                <input type="date" className="event-dialog-date"
                                    name="" id=""
                                    value={event.endDate} onChange={(e) => setEvent({ ...event, endDate: e.currentTarget.value })} />
                                <span className="error-message">{eventErr.endDateErr}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-dialog-footer">
                    <a className="event-dialog-confirm dialog-btn" onClick={handleSubmit}>
                        Confirm
                    </a>
                    <a className="event-dialog-cancel dialog-btn" onClick={() => { eventModalRef.current?.close() }}>
                        Cancel
                    </a>
                </div>
            </div>
        </dialog>
    )
}