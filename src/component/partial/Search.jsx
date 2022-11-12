const Search = () => {
    return (
        <>
            {/* Menu Makanan Start */}
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="row my-2 mb-4">

                            <div className="col-5 col-md-3">
                                <div className="input-group">
                                    <button type="button" className="btn btn-primary border-light" style={{backgroundColor: "#0D6EFD"}}>Cari</button>
                                    <input type="search" className="form-control" placeholder="Kategori Post" aria-label="Search" aria-describedby="search-addon" width="10px"/>
                                </div>
                            </div>

                            <div className="d-block d-md-none col-5 offset-2">
                                <div className="dropdown d-flex justify-content-end pb-3">
                                <button className="btn btn-secondary dropdown-toggle border-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#0D6EFD"}}>
                                    Kategori
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: "10px"}}>
                                    <li><a className="dropdown-item" href="/">Berita</a></li>
                                    <li><a className="dropdown-item" href="/">Hobi</a></li>
                                </ul>
                                </div>
                            </div>

                            <div className="col judul text-center m-0 mt-1">
                                <h4>Page Post</h4>
                            </div>

                            <div className="d-none d-md-block col-md-3">
                                <div className="dropdown d-flex justify-content-end">
                                <button className="btn btn-secondary dropdown-toggle border-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#0D6EFD"}}>
                                    Tampilkan Kategori
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: "14px"}}>
                                    <li><a className="dropdown-item" href="/">Berita</a></li>
                                    <li><a className="dropdown-item" href="/">Hobi</a></li>
                                </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Menu Makanan End */}
        </>
        
    )
}

export default Search;