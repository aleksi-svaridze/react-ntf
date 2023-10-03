

export const TableHeader = () => {
    return(
        <div className="container">
            <div className="row rounded-pill table-header font-spacemono text-capitalize fw-normal text-black-tertiary border-black-secondary border">
                <div className="col-9 col-sm-8 col-md-6 ps-4">
                    # arsist
                </div>
                <div className="col-2 col-md-3 d-none d-md-block col-lg-2">
                    change
                </div>
                <div className="col-2 d-none d-lg-block">
                    NFTs Sold
                </div>
                <div className="col-3 col-sm-4 col-md-3 col-lg-2">
                    Volume
                </div>
            </div>
        </div>
    )
}