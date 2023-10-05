

export const TableHeader = () => {
    return(
        <div className="layout-container">
            <div className="row rounded-pill table-header font-spacemono text-capitalize fw-normal text-black-tertiary border-black-secondary border">
                <div className="col-9 col-sm-8 col-md-6">
                    <div className="d-flex align-items-center">
                        <div className="mx-2 mx-md-3">#</div>
                        <div className="ps-lg-3">artist</div>
                    </div>
                </div>
                <div className="col-2 col-md-3 d-none d-md-block col-lg-2">
                    change
                </div>
                <div className="col-2 d-none d-lg-block">
                    NFTs Sold
                </div>
                <div className="ps-0 col-3 col-sm-4 col-md-3 col-lg-2">
                    Volume
                </div>
            </div>
        </div>
    )
}