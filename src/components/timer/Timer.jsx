import Button from '../buttons/Buttons'



const Timer = ({ btnContent, btnStyle, timerStyle}) => {
    return(
        <div className={`timer font-spacemono text-white ${timerStyle}`}>
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

            {btnContent && <Button 
                            path='/path_to_bid' 
                            content={btnContent} 
                            btnStyle={btnStyle} 
                        />
            }

        </div>
    )
}

export default Timer;