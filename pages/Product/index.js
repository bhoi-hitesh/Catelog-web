import React from 'react';
import Link from 'next/link';
import Banner from '../../Component/banner';
const product = () => {
	return (
		<>
			<Banner banner_slug="Product page" />
			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-3 mb-5 mb-md-0">
							<h3 className="mb-4">Filter By</h3>

							<form method="get">
								{/* <!-- Product Search --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Product Search</div>
									<div className="card-body">
										<input
											type="text"
											className="form-control"
											placeholder="Enter Product Search"
										/>
									</div>
								</div>
								{/* <!-- EOF Product Search --> */}

								{/* <!-- Price Filter --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Price</div>
									<div className="card-body">
										<div className="input-group">
											<input
												type="number"
												className="form-control"
												placeholder="Min"
											/>
											<input
												type="number"
												className="form-control"
												placeholder="Max"
											/>
										</div>
									</div>
								</div>
								{/* <!-- EOF Price Filter --> */}

								{/* <!-- Category Filter --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Category</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											Category 1
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											Category 2
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											Category 3
										</li>
									</ul>
								</div>
								{/* <!-- EOF Category Filter --> */}

								{/* <!-- Color Filter --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Color</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											Red
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											Green
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											Blue
										</li>
									</ul>
								</div>
								{/* <!-- EOF Color Filter --> */}

								{/* <!-- Size Filter --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Size</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											S
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											M
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											L
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											XL
										</li>
										<li className="list-group-item">
											<input
												className="form-check-input me-1"
												type="checkbox"
												value=""
											/>
											XXL
										</li>
									</ul>
								</div>
								{/* <!-- EOF Size Filter --> */}

								<button type="submit" className="btn btn-outline-primary">
									Apply Filter
								</button>
							</form>
						</div>
						{/* <!-- EOF Products Sidebar --> */}

						{/* <!-- Products List Section --> */}
						<div className="col-md-9">
							{/* <!-- Sort by --> */}
							<h3 className="mb-4 d-inline-block">Short By</h3>
							<div className="d-inline-block float-end">
								<div className="dropdown">
									<Link
										className="btn btn-outline-primary dropdown-toggle"
										href="#"
										role="button"
										id="dropdownMenuLink"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Newest First
									</Link>

									<ul
										className="dropdown-menu"
										aria-labelledby="dropdownMenuLink"
									>
										<li>
											<Link className="dropdown-item" href="#">
												Newest First
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" href="#">
												Price Low to High
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" href="#">
												Price High to Low
											</Link>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- EOF Sort by --> */}

							{/* <!-- Products List Section --> */}
							<div className="row">
								<div className="col-md-6 col-lg-4 mb-4">
									<div className="card shadow rounded-0">
										<Link href="/Product/Product page ">
											<img
												src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="Product title"
											/>
										</Link>
										<div className="card-body">
											<Link
												href="/Product/Product page page "
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize">
													Product Title
												</h5>
											</Link>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<small className="text-muted">
													<b>Price:</b>
													<span className="float-end">$12.00</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Color:</b>
													<span className="float-end">Red</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Size:</b>
													<span className="float-end">XL</span>
												</small>
											</li>
										</ul>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="btn btn-outline-primary"
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 mb-4">
									<div className="card shadow rounded-0">
										<Link href="/Product/Product page ">
											<img
												src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="Product title"
											/>
										</Link>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize">
													Product Title
												</h5>
											</Link>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<small className="text-muted">
													<b>Price:</b>
													<span className="float-end">$12.00</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Color:</b>
													<span className="float-end">Red</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Size:</b>
													<span className="float-end">XL</span>
												</small>
											</li>
										</ul>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="btn btn-outline-primary"
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 mb-4">
									<div className="card shadow rounded-0">
										<Link href="/Product/Product page ">
											<img
												src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="Product title"
											/>
										</Link>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize">
													Product Title
												</h5>
											</Link>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<small className="text-muted">
													<b>Price:</b>
													<span className="float-end">$12.00</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Color:</b>
													<span className="float-end">Red</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Size:</b>
													<span className="float-end">XL</span>
												</small>
											</li>
										</ul>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="btn btn-outline-primary"
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 mb-4">
									<div className="card shadow rounded-0">
										<Link href="/Product/Product page ">
											<img
												src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="Product title"
											/>
										</Link>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize">
													Product Title
												</h5>
											</Link>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<small className="text-muted">
													<b>Price:</b>
													<span className="float-end">$12.00</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Color:</b>
													<span className="float-end">Red</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Size:</b>
													<span className="float-end">XL</span>
												</small>
											</li>
										</ul>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="btn btn-outline-primary"
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 mb-4">
									<div className="card shadow rounded-0">
										<Link href="/Product/Product page ">
											<img
												src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="Product title"
											/>
										</Link>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize">
													Product Title
												</h5>
											</Link>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<small className="text-muted">
													<b>Price:</b>
													<span className="float-end">$12.00</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Color:</b>
													<span className="float-end">Red</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Size:</b>
													<span className="float-end">XL</span>
												</small>
											</li>
										</ul>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="btn btn-outline-primary"
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 mb-4">
									<div className="card shadow rounded-0">
										<Link href="/Product/Product page ">
											<img
												src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="Product title"
											/>
										</Link>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize">
													Product Title
												</h5>
											</Link>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<small className="text-muted">
													<b>Price:</b>
													<span className="float-end">$12.00</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Color:</b>
													<span className="float-end">Red</span>
												</small>
											</li>
											<li className="list-group-item">
												<small className="text-muted">
													<b>Size:</b>
													<span className="float-end">XL</span>
												</small>
											</li>
										</ul>
										<div className="card-body">
											<Link
												href="/Product/Product page "
												className="btn btn-outline-primary"
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- EOF Products List Section --> */}

							{/* <!-- Pagination --> */}
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
							{/* <!-- EOF Pagination --> */}
						</div>
						{/* <!-- EOF Products List Section --> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default product;
