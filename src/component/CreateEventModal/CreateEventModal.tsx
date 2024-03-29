
import { useContext, useEffect, useRef, useState } from 'react'
import './CreateEventModal.css'
import { EventError } from '../../types/ErrorTypes'
import { Event } from '../../types/EventType'
import { EventContext } from '../../context/EventContext'

interface EventModalProps {
    eventModalRef: React.RefObject<HTMLDialogElement>
    // setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // openModal: boolean;
    startDate: string,



}

export default function CreateEventModal({ eventModalRef
    , startDate

}: EventModalProps) {


    const confirmBtnRef = useRef<HTMLAnchorElement>(null);

    const [event, setEvent] = useState<Event>({ title: "", startDate: startDate, endDate: "", numerOfDays: 0 })
    const [eventErr, setEventErr] = useState<EventError>({ titleErr: "", startDateErr: "", endDateErr: "" })
    const eventContext = useContext(EventContext);


    function handleCloseModal() {
        eventModalRef.current?.close();

    }


    function handleSubmit() {
        let hasError = false;
        const inputErr = { ...eventErr };
        inputErr.titleErr = "";
        inputErr.startDateErr = "";
        inputErr.endDateErr = ""
        setEventErr(inputErr);

        if (event.title.trim().length === 0) {
            inputErr.titleErr = "Title cannot be empty";
            hasError = true;
        }


        if (event.endDate.trim().length === 0) {
            inputErr.endDateErr = "End date cannot be empty"
            hasError = true;
        }
        else if (new Date(event.endDate) < new Date(event.startDate)) {
            inputErr.endDateErr = "End date must be greater than start date"

            hasError = true;
        }



        if (event.startDate.trim().length === 0) {
            inputErr.startDateErr = "Start date cannot be empty";
            hasError = true;
        }
        else if (new Date(event.startDate) > new Date(event.endDate)) {
            inputErr.startDateErr = "Start date must be less than end date";
            hasError = true;
        }


        setEventErr(inputErr);

        if (!hasError) {

            const diff_in_ms = new Date(event.endDate).getTime() - new Date(event.startDate).getTime();
            event.numerOfDays = Math.round(diff_in_ms / (1000 * 3600 * 24));
            const curr_events = [...eventContext.events];

            if (eventContext.events.length > 0) {

                curr_events.push(event)
                curr_events.sort((prevEvent, nextEvent) => {
                    return (nextEvent.numerOfDays - prevEvent.numerOfDays)
                })

            }
            else {
                curr_events.push(event)

            }


            eventContext.setEvents(curr_events)
            handleCloseModal();
        }

    }


    useEffect(() => {
        function handleClick(e: KeyboardEvent) {
            if (eventModalRef.current?.open && e.key === "Enter") {
                confirmBtnRef.current?.click();
            }
        }

        document.body.addEventListener("keyup", handleClick);


        return function () {
            document.body.removeEventListener("keyup", handleClick);
        }

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

                    <a className="event-dialog-confirm dialog-btn" ref={confirmBtnRef} onClick={handleSubmit}>
                        Confirm
                    </a>
                    <a className="event-dialog-cancel dialog-btn" onClick={handleCloseModal}>
                        Cancel
                    </a>
                </div>
            </div>

        </dialog >

    )
}