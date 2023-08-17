

const Sale = ({price, bid}) => {
    return (
        <div className='sale d-flex align-items-center justify-content-between'>
            <div className="text-start">
                <p className='text-capitalize mb-2 sale__desc font-spacemono text-black-tertiary'>price</p>
                <p className='mb-0 sale__amount text-white font-spacemono'>{price}</p>
            </div>
            <div className="text-end">
                <p className='text-capitalize mb-2 sale__desc font-spacemono text-black-tertiary'>Highest Bid</p>
                <p className='mb-0 sale__amount text-white font-spacemono'>{bid}</p>
            </div>
        </div>
    )
}

export default Sale;