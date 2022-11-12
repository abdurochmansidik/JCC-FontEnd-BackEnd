const Pagenation = () => {
    return (
        <>
        {/* Button Lihat Semua Menu Start */}
        <div className="row mt-4 pb-4">
            <div className="col-12 justify-content-center d-flex">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" style={{color: "#0D6EFD"}} href="/" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" style={{color: "#0D6EFD"}} href="/">1</a></li>
                        <li className="page-item"><a className="page-link" style={{color: "#0D6EFD"}} href="/">2</a></li>
                        <li className="page-item"><a className="page-link" style={{color: "#0D6EFD"}} href="/">3</a></li>
                        <li className="page-item">
                        <a className="page-link" style={{color: "#0D6EFD"}} href="/" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* Button Lihat Semua Menu End */}
        </>
    )
}

export default Pagenation; 