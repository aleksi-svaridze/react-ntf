import User from '../users/User'
import CollectionCounter from '../collection-counter/CollectionCounter'




const CollectionCard = ({mainImage, shortcat1, shortcat2, num, userImage, content, categories }) => {
    return (
        <div className="rounded-20">
            <img src={mainImage} alt="" className='w-100 rounded-20' />
            <div className='d-flex align-items-stretch column-gap-8 justify-content-between my-3'>
                <img src={shortcat1} alt="" className='rounded-20 w-100' style={{flex: 1}} />
                <img src={shortcat2} alt="" className='rounded-20 w-100' style={{flex: 1}} />
                <CollectionCounter num={num} />
            </div>
            <User 
                imageSrc={userImage} 
                content={content}
                marginBottom='10px'
                categories={categories}
                contentClass={'font-worksans'}
            />
        </div>
    )
}

export default CollectionCard;

