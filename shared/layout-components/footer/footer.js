import Link from "next/link";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
	return (
		<Fragment>
			<footer className="footer mt-auto py-3 bg-white text-center">
				<Container>
					<span className="text-muted"> Copyright © <span id="year">{new Date().getFullYear()}</span> <Link href="#!" scroll={false} className="text-dark fw-semibold">Coin Gabbar</Link>.
						Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link href="#!" scroll={false}>
						<span className="fw-semibold text-primary text-decoration-underline">Coin Gabbar</span>
					</Link> All rights reserved
					</span>
				</Container>
			</footer>
		</Fragment>
	);
};

export default Footer;
