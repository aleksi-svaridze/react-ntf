import CreatorsCard from "../../components/creators-card/CreatorsCard";
import { PrimaryHeading } from "../../components/headings/Headings";
import BtnIconRocket from '../../media/images/collection/RocketLaunch.svg'

// Creators array data
import Creator1 from '../../media/images/creators/creator1.svg'
import Creator2 from '../../media/images/creators/creator2.svg'
import Creator3 from '../../media/images/creators/creator3.svg'
import Creator4 from '../../media/images/creators/creator4.svg'
import Creator5 from '../../media/images/creators/creator5.svg'
import Creator6 from '../../media/images/creators/creator6.svg'
import Creator7 from '../../media/images/creators/creator7.svg'
import Creator8 from '../../media/images/creators/creator8.svg'
import Creator9 from '../../media/images/creators/creator9.svg'
import Creator10 from '../../media/images/creators/creator10.svg'
import Creator11 from '../../media/images/creators/creator11.svg'
import Creator12 from '../../media/images/creators/creator12.svg'



const Creators = () => {
    const creators = [
        {id: 1, name: 'Keepitreal', image: Creator1, sales: 34.53 },
        {id: 2, name: 'DigiLab', image: Creator2, sales: 34.53 },
        {id: 3, name: 'GravityOne', image: Creator3, sales: 34.53 },
        {id: 4, name: 'Juanie', image: Creator4, sales: 34.53 },
        {id: 5, name: 'BlueWhale', image: Creator5, sales: 34.53 },
        {id: 6, name: 'mr fox', image: Creator6, sales: 34.53 },
        {id: 7, name: 'Shroomie', image: Creator7, sales: 34.53 },
        {id: 8, name: 'robotica', image: Creator8, sales: 34.53 },
        {id: 9, name: 'RustyRobot', image: Creator9, sales: 34.53 },
        {id: 10, name: 'animakid', image: Creator10, sales: 34.53 },
        {id: 11, name: 'Dotgu', image: Creator11, sales: 34.53 },
        {id: 12, name: 'Ghiblier', image: Creator12, sales: 34.53 },
    ]
    return (
        <div className="container">
            <PrimaryHeading 
                heading='Top creators' 
                desc='Checkout Top Rated Creators on the NFT Marketplace'
                btnText='View Rankings'
                btnIcon={BtnIconRocket} />

                <div className="row mt-3 py-5 gy-4">
                    {creators.map(creator => (
                         <CreatorsCard 
                            id={creator.id} 
                            name={creator.name} 
                            image={creator.image} 
                            sales={creator.sales} 
                        />
                    ))}
                </div>
        </div>
    )
}

export default Creators;