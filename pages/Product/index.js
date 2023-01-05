import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Banner from '../../Component/banner';
import Productfilter from '../../Component/Productfilter';
import ProductsPage from '../../Component/ProductsPage';
import ProductsPagination from '../../Component/ProductsPagination';
import { useGetAllDataQuery } from '../Features/apiCall';
const product = () => {
	const [getApi, setApi] = useState([])
	const [mapData, setMapData] = useState()
	const { data, isLoading } = useGetAllDataQuery()
	// let apiData = res
	// let apiproducts = apiData.data
	// const trueData = getApi.products
	// let loading = res.isLoading
	// console.log("hitsh", getApi)
	useEffect(() => {
		{ isLoading ? '' : setApi(data.products) }
	}, [data])
	return (
		<>

			<Banner bannerTitle={"Products page"} />

			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						{/* <!--  Products Sidebar Component --> */}
						<Productfilter />

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

								{
									isLoading
										?
										<div className=' text-center mt-5'>

											<img src="/loaders/giphy.gif" alt="txt" />
										</div>
										:
										getApi.map((e, i) => {
											return (
												<>
													<div className='col-lg-4 col-md-6 col-sm-12'>
														<ProductsPage thumbnail={e.thumbnail} title={e.title} price={e.price} brand={e.brand} id={e.id} />
													</div>
												</>
											)
										})}

							</div>
							{/* <!-- EOF Products List Section --> */}

							{/* <!-- Pagination --> */}
							<ProductsPagination />
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
