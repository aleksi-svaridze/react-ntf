

const HeroServicesCounter = ({num, desc}) => {
    return (
        <>
            <p className="font-spacemono counter__number m-0">{num}</p>
            <p className="counter__desc m-0">{desc}</p>
        </>
    )
}

export default HeroServicesCounter;