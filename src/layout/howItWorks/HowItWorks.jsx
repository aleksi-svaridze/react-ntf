import HowItWorksCard from "../../components/howItWorks-card/HowItWorksCard";


const HowItWorks = () => {
    return(
        <div className="how-it-works-container container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <HowItWorksCard />
                </div>
                <div className="col-12 col-lg-4">
                    <HowItWorksCard />
                </div>
                <div className="col-12 col-lg-4">
                    <HowItWorksCard />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;