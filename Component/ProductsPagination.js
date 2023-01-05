import Link from "next/link"

const ProductsPagination = () => {
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            <i className="bi bi-chevron-compact-left"></i>
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            1
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            2
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            3
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            <i className="bi bi-chevron-compact-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ProductsPagination
