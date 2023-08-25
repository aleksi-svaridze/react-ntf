import { CreatorsCardDesktop, CreatorsCardMobile } from "../../components/creators-card/CreatorsCard";
import { PrimaryHeading } from "../../components/headings/Headings";
import BtnIconRocket from '../../media/images/collection/RocketLaunch.svg'
import Button from "../../components/buttons/Buttons";

// Creators array data
import Creator1 from '../../media/images/creators/Avatar1.png'
import Creator2 from '../../media/images/creators/Avatar2.png'
import Creator3 from '../../media/images/creators/Avatar3.png'
import Creator4 from '../../media/images/creators/Avatar4.png'
import Creator5 from '../../media/images/creators/Avatar5.png'
import Creator6 from '../../media/images/creators/Avatar6.png'
import Creator7 from '../../media/images/creators/Avatar7.png'
import Creator8 from '../../media/images/creators/Avatar8.png'
import Creator9 from '../../media/images/creators/Avatar9.png'
import Creator10 from '../../media/images/creators/Avatar10.png'
import Creator11 from '../../media/images/creators/Avatar11.png'
import Creator12 from '../../media/images/creators/Avatar12.png'



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
        <div className="container pb-5 mb-4">
            <PrimaryHeading 
                heading='Top creators' 
                desc='Checkout Top Rated Creators on the NFT Marketplace'
                btnText='View Rankings'
                btnIcon={BtnIconRocket}
                path='rankings' />

                <div className="row py-5 gy-4 d-none d-sm-flex">
                    {creators.map(creator => (
                         <CreatorsCardDesktop 
                            id={creator.id} 
                            name={creator.name} 
                            image={creator.image} 
                            sales={creator.sales} 
                        />
                    ))}
                </div>
                <div className="row py-5 gy-4 d-flex d-sm-none">
                    {creators.slice(0, 6).map(creator => (
                         <CreatorsCardMobile 
                            id={creator.id} 
                            name={creator.name} 
                            image={creator.image} 
                            sales={creator.sales} 
                        />
                    ))}
                </div>
                <Button
                    icon={BtnIconRocket} 
                    content='View Rankings'
                    btnStyle='text-white btn_custom btn_custom--black heading-btn d-flex d-lg-none' 
                    path='rankings'
                />
        </div>
    )
}

export default Creators;