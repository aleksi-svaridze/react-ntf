

const HeroServicesCounter = ({id, num, desc}) => {
    return (
        <div className="counter" key={id}>
            <p className="font-spacemono counter__number m-0">{num}k+</p>
            <p className="counter__desc m-0">{desc}</p>
        </div>
    )
}

export default HeroServicesCounter;