
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Banner from '../Component/banner';
import ProductsPage from '../Component/ProductsPage';
import { useGetAllDataQuery } from './Features/apiCall';

const Home = () => {
	const [products, setProducts] = useState([])

	const { data, isLoading } = useGetAllDataQuery()

	useEffect(() => {
		{ isLoading ? '' : setProducts(data.products) }
	}, [isLoading])
	return (
		<>
			<Banner banner_slug="Home page" />
			<section id="homeAboutUs" className="home-about-us-section py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-5 order-md-2 mb-3 mb-md-0 text-center text-md-end">
							<Link href="/about">
								<img
									src="https://dummyimage.com/450x260/f8f9fa/6c757d.jpg"
									alt="About Us"
									className="img-fluid"
								/>
							</Link>
						</div>
						<div className="col-md-7 order-md-1">
							<h3>About Us</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
								nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
								mollis odio.
							</p>
							<p>
								Suspendisse blandit leo molestie eleifend vehicula. Integer quis
								bibendum lacus, vitae ultricies ante. Cras et tortor vel nulla
								luctus auctor.
							</p>
							<p>
								Nullam egestas libero elit, quis elementum tortor tincidunt eu.
								Vivamus consequat orci erat, et eleifend mi posuere nec.
								Vestibulum ultricies ornare feugiat.
							</p>
							<Link href="/about" className="btn btn-outline-primary">
								Read More
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* -->Why Choos Us<-- */}
			<section
				id="homeWhyChooseUs"
				className="home-why-choose-us-section py-5 bg-light"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 mb-4 text-center">
							<h3 className="p-0 m-0">Why Choose Us</h3>
						</div>
						<div className="col-md-4 mb-2 mb-md-0">
							<div className="h1 d-inline-block">
								<i className="bi-alarm"></i>
							</div>
							<h4>On Time Delivery</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
								nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
								mollis odio.
							</p>
						</div>
						<div className="col-md-4 mb-2 mb-md-0">
							<div className="h1 d-inline-block">
								<i className="bi bi-key"></i>
							</div>
							<h4>Safe and secure</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
								nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
								mollis odio.
							</p>
						</div>
						<div className="col-md-4 mb-2 mb-md-0">
							<div className="h1 d-inline-block">
								<i className="bi bi-headset"></i>
							</div>
							<h4>Excellent Customer Support</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
								nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
								mollis odio.
							</p>
						</div>
						<div className="col-12 mt-0 mt-md-3 text-center">
							<Link href="Product" className="btn btn-outline-primary">
								Explore Our Products
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* -->Products<-- */}
			<section
				id="homeFeaturedProducts"
				className="home-featured-products py-5"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="mb-4">Featured Products</h3>
						</div>
						{/* <!-- Featured Products List --> */}
						{
							isLoading
								?
								<div className=' text-center mt-5'>

									<img src="/loaders/giphy.gif" alt="txt" />
								</div>
								:
								products.map((e, i) => {
									return (
										<>

											<div className="col-md-6 col-lg-3 mb-4 mb-lg-0" key={e.id}>
												<ProductsPage id={e.id} title={e.title} brand={e.brand} price={e.price} />
											</div>
										</>
									)
								})
						}



						{/* <!-- EOF Featured Products List --> */}
						<div className="col-12 mt-4 text-center">
							<Link href="Product" className="btn btn-outline-primary">
								View All Products
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* -->Blog<-- */}
			<section id="homeFeaturedBlogs" className="home-featured-blogs bg-light py-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="mb-4">Featured Blogs</h3>
							<div className="row">
								<div className="col-md-5">
									<div className="card shadow rounded-0">
										<Link href="Blog/blogs">
											<img
												src="https://dummyimage.com/550x330/f8f9fa/6c757d.jpg"
												className="card-img-top"
												alt="post title"
											/>
										</Link>
										<div className="card-body">
											<strong className="d-inline-block mb-2 text-primary">
												Category Name
											</strong>
											<Link
												href="Blog/blogs"
												className="text-dark text-decoration-none"
											>
												<h5 className="card-title text-capitalize mb-0">
													Post Title
												</h5>
											</Link>
											<div className="mb-1 text-muted">Nov 12</div>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Nam in nunc purus. Cras ut tempus diam, nec convallis
												mauris. Etiam a mollis odio.
											</p>
											<Link href="Blog/blogs" className="btn btn-outline-primary">
												Read More
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="card shadow rounded-0 mb-4">
										<div className="row g-0">
											<div className="col-md-4">
												<Link href="Blog/blogs">
													<img
														src="https://dummyimage.com/250x250/f8f9fa/6c757d.jpg"
														className="img-fluid w-100 h-100"
														alt="post title"
													/>
												</Link>
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<strong className="d-inline-block mb-2 text-primary">
														Category Name
													</strong>
													<Link
														href="Blog/blogs"
														className="text-dark text-decoration-none"
													>
														<h5 className="card-title text-capitalize mb-0">
															Post Title
														</h5>
													</Link>
													<div className="mb-1 text-muted">Nov 12</div>
													<p className="card-text">
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Nam in nunc purus. Cras ut tempus diam, nec
														convallis mauris. Etiam a mollis odio.
													</p>
													<Link
														href="Blog/blogs"
														className="btn btn-outline-primary"
													>
														Read More
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="card shadow rounded-0">
										<div className="row g-0">
											<div className="col-md-4">
												<Link href="Blog/blogs">
													<img
														src="https://dummyimage.com/250x250/f8f9fa/6c757d.jpg"
														className="img-fluid w-100 h-100"
														alt="post title"
													/>
												</Link>
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<strong className="d-inline-block mb-2 text-primary">
														Category Name
													</strong>
													<Link
														href="Blog/blogs"
														className="text-dark text-decoration-none"
													>
														<h5 className="card-title text-capitalize mb-0">
															Post Title
														</h5>
													</Link>
													<div className="mb-1 text-muted">Nov 12</div>
													<p className="card-text">
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Nam in nunc purus. Cras ut tempus diam, nec
														convallis mauris. Etiam a mollis odio.
													</p>
													<Link
														href="Blog/blogs"
														className="btn btn-outline-primary"
													>
														Read More
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 mt-4 text-center">
									<Link href="/Blog" className="btn btn-outline-primary">
										View All Blogs
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* -->News letter<-- */}
			<section id="newsLetter" className="catalog-newsletter my-5">
				<div className="container">
					<div className="py-5 bg-light text-center">
						<div className="row">
							<div className="col-11 col-md-8 col-lg-5 mx-auto">
								<span>Subscribe to Our</span>
								<h3>Newsletter</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									in nunc purus. Cras ut tempus diam, nec convallis mauris.
								</p>
								<form method="post">
									<div className="input-group mb-3">
										<input
											type="email"
											className="form-control"
											placeholder="Email"
											aria-label="Email"
											aria-describedby="button-addon2"
										/>
										<span className="input-group-text">
											<button className="btn" type="submit" id="button-addon2">
												<i className="bi bi-search"></i>
											</button>
										</span>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	);
};

export default Home;
