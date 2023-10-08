



const Timer = ({timerBtn}) => {
    return(
        <div className="timer font-spacemono text-white">
            <div className="timer-inner--container">
                <p className="timer-type--title">Auction ends in:</p>
                <div className="timer-numbers--wrapper">
                    <div className="d-flex flex-column">
                        <p className="timer-number text-capitalize fw-bold mb-0">59</p>
                        <p className="timer-time--desc mb-0">Hours</p>
                    </div>
                    <div className="timer-divider">:</div>
                    <div className="d-flex flex-column">
                        <p className="timer-number text-capitalize fw-bold mb-0">59</p>
                        <p className="timer-time--desc mb-0">Minutes</p>
                    </div>
                    <div className="timer-divider">:</div>
                    <div className="d-flex flex-column">
                        <p className="timer-number text-capitalize fw-bold mb-0">59</p>
                        <p className="timer-time--desc mb-0">Seconds</p>
                    </div>
                </div>
            </div>
            {timerBtn && 'hello'}
        </div>
    )
}

export default Timer;