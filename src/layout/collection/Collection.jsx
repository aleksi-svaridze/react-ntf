import {PrimaryHeading} from '../../components/headings/Headings'

const Collection = () => {
    return (
        <div className="container mt-5">
            <PrimaryHeading 
                heading='Trending Collection' 
                desc='Checkout our weekly updated trending collection.'
            />

            <div className="row py-5 my-3">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Collection;