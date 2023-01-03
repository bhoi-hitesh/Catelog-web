import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Banner from '../../Component/banner';
const products = () => {
	const router = useRouter();
	let { product } = router.query;
	return (
		<>
			<Banner banner_slug={product} />
			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								{/* <!-- Product Image --> */}
								<div className="col-md-8">
									<img
										src="https://dummyimage.com/735x450/f8f9fa/6c757d.jpg"
										alt="About Us"
										className="img-fluid mb-3"
									/>
								</div>
								{/* <!-- EOF Product Image --> */}

								{/* <!-- Product Meta Data --> */}
								<div className="col-md-4 mb-4 mb-md-0">
									<h1>Product Title</h1>
									<h5 className="text-muted">Product Category</h5>
									<p>
										Product small description Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Nam in nunc purus. Cras ut
										tempus diam
									</p>
									<ul className="list-group rounded-0 mb-3">
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
									<Link href="/contact" className="btn btn-outline-primary">
										Inquiry Now
									</Link>
								</div>
								{/* <!-- EOF Product Meta Data --> */}

								{/* <!-- Product Description --> */}
								<div className="col-lg-8 mx-auto">
									<h3>Description</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
										in nunc purus. Cras ut tempus diam, nec convallis mauris.
										Etiam a mollis odio. Suspendisse blandit leo molestie
										eleifend vehicula. Integer quis bibendum lacus, vitae
										ultricies ante. Cras et tortor vel nulla luctus auctor.
										Nullam egestas libero elit, quis elementum tortor tincidunt
										eu. Vivamus consequat orci erat, et eleifend mi posuere nec.
										Vestibulum ultricies ornare feugiat. Orci varius natoque
										penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Proin varius, ligula suscipit lobortis
										gravida, elit magna commodo tortor, a iaculis nulla metus
										malesuada nisi. Etiam semper semper nulla. Pellentesque est
										nisi, varius nec turpis eu, tincidunt mollis diam. Nunc
										fermentum elit vel fringilla consectetur. Orci varius
										natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Donec porta non neque a facilisis.
									</p>
									<p>
										Aenean finibus, turpis at rutrum molestie, elit augue
										ultricies dolor, sed ullamcorper enim dolor non est. Sed nec
										dictum nunc, id aliquam sem. Morbi nec nibh vel neque
										fringilla pellentesque. Cras posuere fermentum magna, eu
										convallis tellus sagittis nec. Cras ac dolor sed ipsum
										hendrerit tincidunt sit amet at lorem. Vestibulum eget
										venenatis ex. Aliquam a euismod nunc. Aenean eget libero ut
										nibh aliquam fringilla. In sed ligula dui. Vestibulum
										pharetra risus nisi, at faucibus ligula fringilla fringilla.
										Nulla facilisi. Integer quis efficitur nunc. Suspendisse
										quis odio quis eros elementum faucibus ut et est.
										Pellentesque viverra nisl enim, a imperdiet sapien facilisis
										at. Donec eleifend, mi non tempor accumsan, enim sapien
										congue eros, sit amet scelerisque sapien augue non augue.
										Cras ultricies, nisi in accumsan euismod, quam metus
										ullamcorper magna, a ullamcorper arcu erat eu ex.
									</p>
								</div>
								{/* <!-- EOF Product Description --> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default products;
