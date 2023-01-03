import React, { useState } from 'react';
import Link from 'next/link';
import Banner from '../../Component/banner';
// import { useGetAllDataQuery } from './Features/apiCall';
import { useEffect } from 'react';
import { useGetAllDataQuery } from '../Features/apiCall';
const Blogs = () => {
	const [api, setApi] = useState(5)
	const res = useGetAllDataQuery()
	let getdata = res.data
	let loading = res.isLoading
	let loadmore = () => {
		setApi(api + 5)
	}

	return (
		<>

			<Banner banner_slug="Blogs page" />
			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						{/* <!-- Post List Section --> */}
						<div className="col-md-9">
							{/* <!-- Blog List Section --> */}
							<div className="row">
								{loading
									?
									<div className=' text-center mt-5'>
										<div className="spinner-border text-primary">

										</div>
									</div>
									:
									getdata.slice(0, api).map((e, i) => {

										return (
											<>
												<div>
													<div className="col-12" >
														<div className="card shadow rounded-0 mb-4" >
															<div className="row g-0">
																<div className="col-md-4">
																	<Link href="/Blog/Blog page">
																		<img
																			src="https://dummyimage.com/275x200/f8f9fa/6c757d.jpg"
																			className="img-fluid w-100 h-100"
																			alt="post title"
																		/>
																	</Link>
																</div>
																<div className="col-md-8">

																	<div className="card-body">
																		<strong className="d-inline-block mb-2 text-primary">

																		</strong>
																		<Link
																			href="/Blog/Blog page"
																			className="text-dark text-decoration-none"
																		>
																			<p>{e.id}</p>
																			<h5 className="card-title text-capitalize mb-0" key={i}>
																				{e.title}
																			</h5>
																		</Link>
																		<div className="mb-1 text-muted">Nov 12</div>
																		<p className="card-text" key={i}>
																			{e.body}
																		</p>
																		<Link
																			href={`Blog/${e.id}`}
																			className="btn btn-outline-primary"
																		>
																			Read More
																		</Link>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</>
										)
									})}

							</div>
							{/* <!-- EOF Blog List Section --> */}

							{/* <!-- Load More --> */}

							{loading
								?
								''
								:
								<div className="text-center">

									<button className="btn btn-outline-primary" onClick={loadmore}>
										Load More
									</button>



								</div>


							}


							{/* <!-- EOF Load More --> */}
						</div>
						{/* <!-- EOF Post List Section --> */}

						{/* <!-- Sidebar --> */}
						<div className="col-md-3 mb-5 mb-md-0">
							<div className="position-sticky" style={{ top: '2rem' }}>
								{/* <!-- Search --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Search</div>
									<div className="card-body">
										<div className="input-group ">
											<input
												type="text"
												className="form-control"
												placeholder="Enter Text"
												aria-describedby="button-addon2"
											/>
											<span className="input-group-text bg-light">
												<button
													className="btn m-0 p-0"
													type="submit"
													id="button-addon2"
												>
													<i className="bi bi-search"></i>
												</button>
											</span>
										</div>
									</div>
								</div>
								{/* <!-- EOF Search --> */}

								{/* <!-- Category Filter --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Category</div>
									<div className="list-group border-0 rounded-0">
										<Link
											href="#"
											className="list-group-item list-group-item-action"
										>
											Category 1
										</Link>
										<Link
											href="#"
											className="list-group-item list-group-item-action"
										>
											Category 2
										</Link>
										<Link
											href="#"
											className="list-group-item list-group-item-action"
										>
											Category 3
										</Link>
									</div>
								</div>
								{/* <!-- EOF Category Filter --> */}
							</div>
						</div>
						{/* <!-- EOF Sidebar --> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Blogs;
