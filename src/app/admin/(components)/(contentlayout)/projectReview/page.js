"use client";
import React, {useState, Fragment } from "react";
import { Card, Col, Row, ProgressBar, Button, Form, Dropdown, Table, Pagination, Container } from "react-bootstrap";
import Link from "next/link";
import { BudgetTask, MobileAppDesign, ProjectBudget, TASKS, WebsiteAppDesign, WebsiteDesign } from "../../../../../../shared/data/dashboard/dashboarddata";
import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../shared/layout-components/seo/seo";
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import dynamic from 'next/dynamic';

import "suneditor/dist/css/suneditor.min.css";

const Dashboard = () => {
	const [editorData, setEditorData] = useState('');
	return (
		<Fragment>
			<Seo title={"Dashboard"} />
			<PageHeader title="Welcome To Dashboard" item="Home" active_item="Project Dashboard" />
			{/* <!--Row--> */}
			<Row className="row-sm d-none">
				<Col sm={12} lg={12} xl={8}>
					<Row className=" row-sm  mt-lg-3">
						<Col sm={12} lg={12} xl={12}>
							<Card className="bg-primary custom-card card-box">
								<Card.Body className="p-4">
									<Row className="align-items-center">
										<Col sm={{ offset: 6 }} xl={{ offset: 3 }} className="col-xl-8 col-sm-6 col-12 img-bg " >
											<h4 className="d-flex  mb-3">
												<span className="fw-bold text-fixed-white"> Sonia Taylor! </span>
											</h4>
											<p className="text-fixed-white op-8 mb-1">
												You have two projects to finish, you had completed
												<b className="text-warning"> 57%</b> from your montly
												level, Keep going to your level
											</p>
										</Col>
										<img src="../assets/images/pngs/29.png" alt="work1" />
									</Row>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					{/* <!--Row --> */}

					{/* <!--Row--> */}
					<Row className="row-sm">
						<Col sm={12} md={6} lg={6} xl={4}>
							<Card className="custom-card">
								<Card.Body>
									<div className="card-item">
										<div className="card-item-icon card-icon">
											<svg
												className="text-primary"
												xmlns="http://www.w3.org/2000/svg"
												enableBackground="new 0 0 24 24"
												height="24" viewBox="0 0 24 24" width="24">
												<g><rect height="14" opacity=".3" width="14" x="5" y="5" /><g>
													<rect fill="none" height="24" width="24" />
													<g>
														<path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
														<rect height="5" width="2" x="7" y="12" />
														<rect height="10" width="2" x="15" y="7" />
														<rect height="3" width="2" x="11" y="14" />
														<rect height="2" width="2" x="11" y="10" />
													</g>
												</g>
												</g>
											</svg>
										</div>
										<div className="card-item-title mb-2">
											<label className="main-content-label fs-13 fw-bold mb-1">
												Total Revenue
											</label>
											<span className="d-block fs-12 mb-0 text-muted">
												Previous month vs this months
											</span>
										</div>
										<div className="card-item-body">
											<div className="card-item-stat">
												<h4 className="fw-bold">$5,900.00</h4>
												<small>
													<b className="text-success">55%</b> higher
												</small>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} md={6} lg={6} xl={4}>
							<Card className="custom-card">
								<Card.Body>
									<div className="card-item">
										<div className="card-item-icon card-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 0 24 24"
												width="24"
											>
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path
													d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
													opacity=".3"
												/>
												<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
											</svg>
										</div>
										<div className="card-item-title mb-2">
											<label className="main-content-label fs-13 fw-bold mb-1">
												New Employees
											</label>
											<span className="d-block fs-12 mb-0 text-muted">
												Employees joined this month
											</span>
										</div>
										<div className="card-item-body">
											<div className="card-item-stat">
												<h4 className="fw-bold">15</h4>
												<small>
													<b className="text-success">5%</b> Increased
												</small>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} md={12} lg={12} xl={4}>
							<Card className="card custom-card">
								<Card.Body>
									<div className="card-item">
										<div className="card-item-icon card-icon">
											<svg
												className="text-primary"
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 0 24 24"
												width="24"
											>
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path
													d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
													opacity=".3"
												/>
												<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
											</svg>
										</div>
										<div className="card-item-title  mb-2">
											<label className="main-content-label fs-13 fw-bold mb-1">
												Total Expenses
											</label>
											<span className="d-block fs-12 mb-0 text-muted">
												Previous month vs this months
											</span>
										</div>
										<div className="card-item-body">
											<div className="card-item-stat">
												<h4 className="fw-bold">$8,500</h4>
												<small>
													<b className="text-danger">12%</b> decrease
												</small>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					{/* <!--End row--> */}
					{/* <!--row--> */}
					<Row className="row-sm">
						<Col sm={12} lg={12} xl={12}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="border-bottom-0">
									<div>
										<label className="card-title">
											Project Budget
										</label>
										<span className="d-block fs-12 mb-0 text-muted">
											The Project Budget is a tool used by project managers to
											estimate the total cost of a project
										</span>
									</div>
								</Card.Header>
								<Card.Body className="ps-12">
									<div>
										<Container>
											<div className="chart-dropshadow2">
												<ProjectBudget />
											</div>
										</Container>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <!-- col end --> */}
						<Col sm={12} md={6} lg={6} xl={6}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="d-block border-bottom-0 pb-0">
									<div>
										<div className="d-md-flex">
											<label className="main-content-label my-auto pt-2">
												Today tasks
											</label>
											<div className="ms-auto mt-3 d-flex">
												<div className="me-3 d-flex text-muted fs-13">
													<span className="legend bg-primary rounded-circle"></span>
													Project
												</div>
												<div className="d-flex text-muted fs-13">
													<span className="legend bg-light rounded-circle"></span>
													Inprogress
												</div>
											</div>
										</div>
										<span className="d-block fs-12 mt-2 mb-0 text-muted">
											UX UI & Backend Developement.
										</span>
									</div>
								</Card.Header>
								<Card.Body className="">
									<Row>
										<Col sm={6} className="my-auto">
											<h6 className="mb-3 font-weight-normal">
												Project-Budget
											</h6>
											<div className="text-start">
												<h3 className="fw-bold me-3 mb-2 text-primary">
													$5,240
												</h3>
												<p className="fs-13 my-auto text-muted">
													May 28 - June 01 (2018)
												</p>
											</div>
										</Col>
										<Col md={6} className="my-auto ">

											<BudgetTask />

										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>
						{/* <!-- col end --> */}
						<Col sm={12} md={6} lg={6} xl={6}>
							<Card className="custom-card top-inquiries">
								<Card.Header className="border-bottom-0 pb-0">
									<div>
										<div className="d-flex">
											<label className="main-content-label my-auto pt-2">
												Top Inquiries
											</label>
										</div>
										<span className="d-block fs-12 mt-2 mb-0 text-muted">
											project work involves a group of students investigating .
										</span>
									</div>
								</Card.Header>
								<Card.Body>
									<Row className="mt-1">
										<Col className="col-5">
											<span>Brand identity</span>
										</Col>
										<Col className="col-3 my-auto">
											<ProgressBar
												className=" ht-6 my-auto progress-animate"
												now={80}
											/>
										</Col>
										<Col sm={3} className="col-4">
											<div className="d-flex">
												<span className="fs-13">
													<i className="text-success fe fe-arrow-up"></i>
													<b>24.75%</b>
												</span>
											</div>
										</Col>
									</Row>
									<Row className="mt-4">
										<Col className="col-5">
											<span className="">UI & UX design</span>
										</Col>
										<Col className="col-3 my-auto">
											<ProgressBar
												className=" ht-6 my-auto"
												now={70}
											></ProgressBar>
										</Col>
										<Col className="col-4">
											<div className="d-flex">
												<span className="fs-13">
													<i className="text-danger fe fe-arrow-down"></i>
													<b>12.34%</b>
												</span>
											</div>
										</Col>
									</Row>
									<Row className=" mt-4">
										<Col className="col-5">
											<span className="">Product design</span>
										</Col>
										<Col className="col-3 my-auto">
											<ProgressBar
												className=" ht-6 my-auto"
												now={50}
											></ProgressBar>
										</Col>
										<Col className="col-4">
											<div className="d-flex">
												<span className="fs-13">
													<i className="text-success  fe fe-arrow-up"></i>
													<b>13.75%</b>
												</span>
											</div>
										</Col>
									</Row>

								</Card.Body>
							</Card>
						</Col>
						{/* <!-- col end --> */}
						<Col lg={12}>
							<Card className="custom-card mg-b-20">
								<Card.Body>
									<Card.Header className="border-bottom-0 pt-0 ps-0 pe-0 pb-2 d-flex">
										<div>
											<label className="main-content-label mb-2">Tasks</label>
											<p className="mb-0 fs-12 mb-3 text-muted">
												A task is accomplished by a set deadline, and must
												contribute toward work-related objectives.
											</p>
										</div>
										<div className="ms-auto d-flex flex-wrap gap-2">
											<div className="contact-search3 me-3">
												<Button variant="" type="button" className="border-0"><i className="fe fe-search fw-semibold text-muted" aria-hidden="true"></i></Button>
												<Form.Control type="text" className="h-6" id="typehead1" placeholder="Search here..." autoComplete="off" />
											</div>
											<Dropdown className="ms-auto d-flex">
												<Dropdown.Toggle variant="default" className="btn btn-wave waves-effect waves-light btn-primary d-inline-flex align-items-center border-0">
													<i className="ri-equalizer-line me-1"></i>Sort by
												</Dropdown.Toggle>
												<Dropdown.Menu style={{ margin: "0px" }}>
													<Dropdown.Item>Task</Dropdown.Item>
													<Dropdown.Item>Team</Dropdown.Item>
													<Dropdown.Item>Status</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item>
														<i className="fa fa-cog me-2"></i> Settings
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>

									</Card.Header>
									<div className="table-responsive tasks">
										<Table className="card-table table-vcenter text-nowrap mb-0 border dashboard-table"  >
											<thead>
												<tr>
													<th className="wd-lg-10p">Task</th>
													<th className="wd-lg-20p text-center">Team</th>
													<th className="wd-lg-20p text-center">Open task</th>
													<th className="wd-lg-20p">Priority</th>
													<th className="wd-lg-20p">Status</th>
												</tr>
											</thead>
											<tbody>
												{TASKS.map((items, index) => (
													<tr key={index} data-index={index}>
														<td className="fw-medium">
															
															<div className="d-flex">
																{/*<input type="checkbox" className="form-check-input me-4 rounded" defaultChecked ></input>*/}
																{items.check}
																<span className="mt-1">{items.Task}</span>
															</div>
														</td>
														<td className="text-nowrap">
															<div className="avatar-list-stacked my-auto float-end">
																<div className="avatar avatar-rounded avatar-sm">
																	<img
																		alt="avatar"
																		className="rounded-circle"
																		src={items.src1}
																	/>
																</div>
																<div className="avatar avatar-rounded avatar-sm">
																	<img
																		alt="avatar"
																		className="rounded-circle"
																		src={items.src2}
																	/>
																</div>
																<div className="avatar avatar-rounded avatar-sm">
																	<img
																		alt="avatar"
																		className="rounded-circle"
																		src={items.src3}
																	/>
																</div>
																<div className="avatar avatar-rounded avatar-sm">
																	<img
																		alt="avatar"
																		className="rounded-circle"
																		src={items.src4}
																	/>
																</div>
															</div>
														</td>
														<td className="text-center">
															{items.Tasknum}<i className=""></i>
														</td>
														<td className={`text-${items.Profittext}`}>
															{items.TaskProfit}
														</td>
														<td>
															<span
																className={`badge rounded-pill bg-${items.Statustext}-transparent`}
															>
																{items.Status}
															</span>
														</td>
													</tr>
												))}
											</tbody>
										</Table>
									</div>
									<div className="float-end mt-3">
										<nav className="pagination-style-3">
											<Pagination className="mb-0 flex-wrap">
												<Pagination.Item disabled>Prev</Pagination.Item>
												<Pagination.Item active>{1}</Pagination.Item>
												<Pagination.Item>{2}</Pagination.Item>
												<Pagination.Ellipsis />
												<Pagination.Item>{16}</Pagination.Item>
												<Pagination.Item>Next</Pagination.Item>
											</Pagination></nav>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <!-- col end --> */}
					</Row>
					{/* <!-- Row end --> */}
				</Col>
				{/* <!-- col end --> */}
				<Col sm={12} lg={12} xl={4} className=" mt-xl-3">
					<div className="card custom-card card-dashboard-calendar">
						<label className="main-content-label mb-2 pt-1">
							Recent transcations
						</label>
						<span className="d-block fs-12 mb-2 text-muted">
							Projects where development work is on completion
						</span>
						<table className="table m-b-0 transcations mt-2">
							<tbody>
								<tr>
									<td className="wd-5p">
										<div className="main-img-user avatar-md">
											<img
												alt="avatar"
												className="rounded-circle me-3"
												src="../assets/images/faces/5.jpg"
											/>
										</div>
									</td>
									<td>
										<div className="d-flex align-middle ms-3">
											<div className="d-inline-block">
												<h6 className="mb-1">Flicker</h6>
												<p className="mb-0 fs-13 text-muted">App improvement</p>
											</div>
										</div>
									</td>
									<td className="text-end">
										<div className="d-inline-block">
											<h6 className="mb-2 fs-15 fw-semibold">
												$45.234
												<i className="fas fa-level-up-alt ms-2 text-success m-l-10"></i>
											</h6>
											<p className="mb-0 text-muted">12 Jan 2020</p>
										</div>
									</td>
								</tr>
								<tr>
									<td className="wd-5p">
										<div className="main-img-user avatar-md">
											<img
												alt="avatar"
												className="rounded-circle me-3"
												src="../assets/images/faces/6.jpg"
											/>
										</div>
									</td>
									<td>
										<div className="d-flex align-middle ms-3">
											<div className="d-inline-block">
												<h6 className="mb-1">Intoxica</h6>
												<p className="mb-0 fs-13 text-muted">Milestone</p>
											</div>
										</div>
									</td>
									<td className="text-end">
										<div className="d-inline-block">
											<h6 className="mb-2 fs-15 fw-semibold">
												$23.452
												<i className="fas fa-level-down-alt ms-2 text-danger m-l-10"></i>
											</h6>
											<p className="mb-0 text-muted">23 Jan 2020</p>
										</div>
									</td>
								</tr>
								<tr>
									<td className="wd-5p">
										<div className="main-img-user avatar-md">
											<img
												alt="avatar"
												className="rounded-circle me-3"
												src="../assets/images/faces/7.jpg"
											/>
										</div>
									</td>
									<td>
										<div className="d-flex align-middle ms-3">
											<div className="d-inline-block">
												<h6 className="mb-1">Digiwatt</h6>
												<p className="mb-0 fs-13 text-muted">Sales executive</p>
											</div>
										</div>
									</td>
									<td className="text-end">
										<div className="d-inline-block">
											<h6 className="mb-2 fs-15 fw-semibold">
												$78.001
												<i className="fas fa-level-down-alt ms-2 text-danger m-l-10"></i>
											</h6>
											<p className="mb-0 text-muted">4 Apr 2020</p>
										</div>
									</td>
								</tr>
								<tr>
									<td className="wd-5p"> 
										<div className="main-img-user avatar-md">
											<img
												alt="avatar"
												className="rounded-circle me-3"
												src="../assets/images/faces/8.jpg"
											/>
										</div>
									</td>
									<td>
										<div className="d-flex align-middle ms-3">
											<div className="d-inline-block">
												<h6 className="mb-1">Flicker</h6>
												<p className="mb-0 fs-13 text-muted">Milestone2</p>
											</div>
										</div>
									</td>
									<td className="text-end">
										<div className="d-inline-block">
											<h6 className="mb-2 fs-15 fw-semibold">
												$37.285
												<i className="fas fa-level-up-alt ms-2 text-success m-l-10"></i>
											</h6>
											<p className="mb-0 text-muted">4 Apr 2020</p>
										</div>
									</td>
								</tr>
								<tr>
									<td className="wd-5p pb-0">
										<div className="main-img-user avatar-md">
											<img
												alt="avatar"
												className="rounded-circle me-3"
												src="../assets/images/faces/4.jpg"
											/>
										</div>
									</td>
									<td className="pb-0">
										<div className="d-flex align-middle ms-3">
											<div className="d-inline-block">
												<h6 className="mb-1">Flicker</h6>
												<p className="mb-0 fs-13 text-muted">App improvement</p>
											</div>
										</div>
									</td>
									<td className="text-end pb-0">
										<div className="d-inline-block">
											<h6 className="mb-2 fs-15 fw-semibold">
												$25.341
												<i className="fas fa-level-down-alt ms-2 text-danger m-l-10"></i>
											</h6>
											<p className="mb-0 text-muted">4 Apr 2020</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Card className="custom-card">
						<Card.Body>
							<Row className="row-sm">
								<Col className="col-6">
									<div className="card-item-title">
										<label className="main-content-label fs-13 fw-bold mb-2">
											Project Launch
										</label>
										<span className="d-block fs-12 mb-0 text-muted">
											the project is going to launch
										</span>
									</div>
									<p className="mb-0 fs-24 mt-2">
										<b className="text-primary">145 days</b>
									</p>
									<Link  scroll={false} href="#!" className="text-muted">
										12 Monday, Oct 2020
									</Link>
								</Col>
								<div className="col-6">
									<img src="../assets/images/pngs/28.png" alt="work" className="best-emp" />
								</div>
							</Row>
						</Card.Body>
					</Card>
					<Card className=" custom-card">
						<Card.Header className="border-bottom-0 pb-0 d-flex ps-3 ms-1">
							<div>
								<label className="main-content-label mb-2 pt-2">
									On going projects
								</label>
								<span className="d-block fs-12 mb-2 text-muted">
									Projects where development work is on completion
								</span>
							</div>
						</Card.Header>
						<Card.Body className="pt-2 mt-0">
							<div className="list-card">
								<div className="d-flex">
									<div className="avatar-list-stacked d-flex align-items-center">
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/1.jpg"
											/>
										</div>
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/2.jpg"
											/>
										</div>
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/3.jpg"
											/>
										</div>
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/4.jpg"
											/>
										</div>
										<div className="ms-4">Design team</div>
									</div>
									<div className="ms-auto float-end">
										<Dropdown className="GOIONGPROJECTS">
											<Dropdown.Toggle as='a' variant="default" className="no-caret option-dots"> <i className="fe fe-more-horizontal"></i> </Dropdown.Toggle>
											<Dropdown.Menu className=" dropdown-menu-end" style={{ margin: "0px" }} >
												<Dropdown.Item>Today</Dropdown.Item>
												<Dropdown.Item>Last Week</Dropdown.Item>
												<Dropdown.Item>Last Month</Dropdown.Item>
												<Dropdown.Item>Last Year</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
								<div className="card-item mt-2">
									<div className="card-item-icon bg-transparent card-icon">
										<MobileAppDesign />
									</div>
									<div className="card-item-body">
										<div className="card-item-stat">
											<small className="fs-10 text-primary fw-semibold">
												25 August 2020
											</small>
											<h6 className=" mt-2">Mobile app design</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="list-card mb-0">
								<div className="d-flex">
									<div className="avatar-list-stacked d-flex align-items-center">
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/5.jpg"
											/>
										</div>
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/6.jpg"
											/>
										</div>
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/7.jpg"
											/>
										</div>
										<div className="avatar avatar-rounded avatar-xs">
											<img
												alt="avatar"
												className="rounded-circle"
												src="../assets/images/faces/8.jpg"
											/>
										</div>
										<div className="ms-4">Design team</div>
									</div>
									<div className="ms-auto float-end">
										<Dropdown className="Designteam">
											<Dropdown.Toggle as='a' variant="" className="no-caret option-dots"><i className="fe fe-more-horizontal"></i></Dropdown.Toggle>
											<Dropdown.Menu className=" dropdown-menu-end" style={{ margin: "0px" }}>
												<Dropdown.Item>Today</Dropdown.Item>
												<Dropdown.Item>Last Week</Dropdown.Item>
												<Dropdown.Item>Last Month</Dropdown.Item>
												<Dropdown.Item>Last Year</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
								<div className="card-item mt-2">
									<div className="card-item-icon bg-transparent card-icon">
										<WebsiteAppDesign />
									</div>
									<div className="card-item-body">
										<div className="card-item-stat">
											<small className="fs-10 text-primary fw-semibold">
												12 JUNE 2020
											</small>
											<h6 className=" mt-2">Website Redesign</h6>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex">
								<label className="main-content-label my-auto">
									Website Design
								</label>
								<div className="ms-auto  d-flex">
									<div className="me-3 d-flex text-muted fs-13">Running</div>
								</div>
							</div>
							<div className="mt-2">
								<div>
									<span className="fs-15 text-muted">
										Task completed : 7/10
									</span>
								</div>
								<div className="container">
									<WebsiteDesign />
								</div>
							</div>
							<Row className="">
								<Col className="">
									<div className="mt-4">
										<div className="d-flex mb-2">
											<h5 className="fs-15 my-auto text-muted fw-normal">
												Client :
											</h5>
											<h5 className="fs-15 my-auto ms-3">John Deo</h5>
										</div>
										<div className="d-flex mb-0">
											<h5 className="fs-13 my-auto text-muted fw-normal">
												Deadline :
											</h5>
											<h5 className="fs-13 my-auto text-muted ms-2">
												25 Dec 2020
											</h5>
										</div>
									</div>
								</Col>
								<Col className="col-auto">
									<div className="mt-3">
										<div>
											<img alt="logo" className="ht-50" src="../assets/images/pngs/21.png" />
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col end --> */}
			</Row>
			<Row className="row-sm">
				<div className="col-xl-12">
					<div className="custom-card mg-b-20 card">
			<div className="card-body">
  <div className="row">
    {/* Title Field */}
	<div className="col-xl-12 mb-3"><div><label className="main-content-label mb-2">Project Review</label></div></div>
    <div className="form-group col-sm-12 col-xl-6">
      <label htmlFor="title" className="field-required">Title:</label>
      <input className="form-control" name="title" type="text" id="title" />
    </div>
    {/* Alias Field */}
    <div className="form-group col-sm-12 col-xl-6">
      <label htmlFor="alias" className="field-required">Alias:</label> <small className="text-danger">No numbers and special characters are allowed, only lowercase
        letters are allowed.</small>
      <input placeholder="eg. abc-xyz-bcd" className="form-control" name="alias" type="text" id="alias" />
    </div>
    {/* H1 title Field */}
    <div className="form-group col-sm-6">
      <label htmlFor="h1_title" className="field-required">H1 Title:</label>
      <input className="form-control" name="h1_title" type="text" id="h1_title" />
    </div>
    {/* H2 title Field */}
    <div className="form-group col-sm-6">
      <label htmlFor="h2_title" className="field-required">H2 Title:</label>
      <input className="form-control" name="h2_title" type="text" id="h2_title" />
    </div>
    {/*img_alt_title Field */}
    <div className="form-group col-sm-6">
      <label htmlFor="img_alt_title" className="field-required">Image Alt Title:</label>
      <input className="form-control" name="img_alt_title" type="text" id="img_alt_title" />
    </div>
    {/* Status Field */}
    <div className="form-group col-sm-12 col-xl-6">
      <label htmlFor="is_gabbar" className="field-required">News Type:</label>
      <select className="form-control" id="is_gabbar" name="is_gabbar"><option value selected="selected">Select News Type</option><option value={1}>Gabbar News</option><option value={2}>Press Release</option><option value={3}>Sponsored</option><option value={4}>Guest News</option><option value={5}>Blog</option><option value={6}>Price Prediction</option></select>
    </div>
    {/* tags Field */}
    {/* 
<div className="form-group col-sm-12 col-xl-6">
    <input type="hidden" name="old_tag" value="">
    <label for="tags_count">Category:</label><small className="text-primary"></small>
    <select className="form-control tag_select " multiple="multiple" name="tags[]"></select>
    </div>

 */}
    {/* Created By Field */}
    <div className="form-group col-sm-12 col-xl-6">
      <label htmlFor="created_by">Created By:</label>
      <select name="created_by" className="form-control">
        <option value>Select Author</option>
        <option value selected>
          Rohit Khandelwal
        </option>
        <option value selected>
          Sudeep Saxena
        </option>
        <option value selected>
          Simran Mishra
        </option>
        <option value selected>
          Rohit Tripathi
        </option>
        <option value selected>
          Lokesh Gupta
        </option>
        <option value selected>
          Mukta Agrawal
        </option>
        <option value selected>
          Anubhav Tulsyan
        </option>
        <option value selected>
          Sourabh Parihar
        </option>
        <option value selected>
          Dharmendra Vishwakarma
        </option>
        <option value selected>
          Indrapal Prajapati
        </option>
        <option value selected>
          Shristy Malviya
        </option>
        <option value selected>
          Deepak Choudhary
        </option>
        <option value selected>
          Sakshi Jain
        </option>
        <option value={30}>
          Aman ji
        </option>
        <option value selected>
          chainwire
        </option>
        <option value selected>
          Coinzilla
        </option>
        <option value selected>
          Cointraffic
        </option>
        <option value selected>
          1xBit
        </option>
        <option value selected>
          sakshi modi
        </option>
        <option value selected>
          Divya Vilekar
        </option>
        <option value selected>
          Akansha Vyas
        </option>
      </select>
    </div>
    {/* author Field */}
    <div className="form-group col-sm-12 col-xl-3">
      <label htmlFor="author_name">Author Name:</label>
      <select name="author_id" className="form-control ">
        <option value>Select Author</option>
        <option value={2}>
          Rohit Khandelwal</option>
        <option value={3}>
          Sudeep Saxena</option>
        <option value={5}>
          Simran Mishra</option>
        <option value={6}>
          Rohit Tripathi</option>
        <option value={7}>
          Lokesh Gupta</option>
        <option value={34}>
          Mukta Agrawal</option>
        <option value={35}>
          Anubhav Tulsyan</option>
        <option value={49}>
          Sourabh Parihar</option>
        <option value={50}>
          Dharmendra Vishwakarma</option>
        <option value={51}>
          Indrapal Prajapati</option>
        <option value={52}>
          Shristy Malviya</option>
        <option value={53}>
          Deepak Choudhary</option>
        <option value={54}>
          Sakshi Jain</option>
        <option value={73}>
          Aman ji</option>
        <option value={102}>
          chainwire</option>
        <option value={104}>
          Coinzilla</option>
        <option value={105}>
          Cointraffic</option>
        <option value={106}>
          1xBit</option>
        <option value={111}>
          sakshi modi</option>
        <option value={112}>
          Divya Vilekar</option>
        <option value={113}>
          Akansha Vyas</option>
      </select>
    </div>
    {/* Title Field */}
    <div className="form-group col-sm-12 col-xl-3">
      <label htmlFor="author">Author Name:</label> <span className="text-danger">(When Author is not available in dropdown)</span>
      <input className="form-control" name="author" type="text" id="author" />
    </div>
    {/* Status Field */}
    <div className="form-group col-sm-12 col-xl-6">
      <label htmlFor="is_rss_feed" className="field-required">Is Rss Feed:</label>
      <select className="form-control" id="is_rss_feed" name="is_rss_feed"><option value selected="selected">Is Rss Feed</option><option value={1}>Yes</option><option value={0}>No</option><option value={2}>Review</option></select>
    </div>
    {/* Rss Field */}
    <div className="form-group col-sm-12 col-xl-6">
      <label htmlFor="dynamic_rss_feed">Dynamic Rss feed :</label>
      <input type="checkbox" name="dynamic_rss_feed[]" defaultValue={1} /><span className="mx-2"><b>Daily Hunt</b></span>
      <input type="checkbox" name="dynamic_rss_feed[]" defaultValue={2} /><span className="mx-2"><b>CMC</b></span>
      <input type="checkbox" name="dynamic_rss_feed[]" defaultValue={3} /><span className="mx-2"><b>Suncrypto</b></span>
      <input type="checkbox" name="dynamic_rss_feed[]" defaultValue={4} /><span className="mx-2"><b>Binance</b></span>
    </div>
    {/* Image Field */}
    <div className="form-group col-sm-12 col-xl-6">
      <div className="form-label font-weight-normal">Coin  / Token Image<span className="text-danger">*</span></div>
      <div className="custom-file ">
        <label htmlFor="image" className="custom-file-label">Coin  / Token Image:</label>
        <input className="custom-file-input" id="image" name="image" type="file" />
      </div>
      <div id="img-preview">
      </div>
    </div>
    <div className="form-group col-sm-12 col-xl-3">
      <label htmlFor="channel_id" className="field-required">Select Channel:</label>
      <select name="channel_id" className="form-control">
        <option value>Select Channel</option>
        <option value={1}>
          Coin Gabbar</option>
        <option value={2}>
          Chainwire</option>
        <option value={3}>
          Coinzilla</option>
      </select>
    </div>
    {/* Publishedat Field */}
    <div className="form-group col-sm-12 col-xl-3">
      <label htmlFor="publishedAt" className="field-required">Published at:</label>
      <input className="form-control" type="datetime-local" name="publishedAt" defaultValue="2025-03-24T14:39" />
    </div>
    {/* Description Field */}
    <div className="ql-wrapper ql-wrapper-demo mb-3">
								<label className='fw-medium form-label'>Post Description</label>
								<div>
									<SunEditor />
								</div>
							</div>
    {/* article Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="article">Article:</label>
      <input className="form-control" name="article" type="text" id="article" />
    </div>
    {/* breadcrumbs Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="breadcrumbs">Breadcrumbs:</label>
      <input className="form-control" name="breadcrumbs" type="text" id="breadcrumbs" />
    </div>
    {/* course info Field */}
    {/* data set Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="data_set">Data set:</label>
      <input className="form-control" name="data_set" type="text" id="data_set" />
    </div>
    {/* discussion forum Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="discussion_forum">Discussion forum:</label>
      <input className="form-control" name="discussion_forum" type="text" id="discussion_forum" />
    </div>
    {/* faq Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="faq">Faq:</label>
      <input className="form-control" name="faq" type="text" id="faq" />
    </div>
    {/* image metadata Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="image_metadata">Image metadata:</label>
      <input className="form-control" name="image_metadata" type="text" id="image_metadata" />
    </div>
    {/* image metadata Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="new_article">New article:</label>
      <input className="form-control" name="new_article" type="text" id="new_article" />
    </div>
    {/* paywalled content Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="paywalled_content">Paywalled content:</label>
      <input className="form-control" name="paywalled_content" type="text" id="paywalled_content" />
    </div>
    {/* profile Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="profile">Profile:</label>
      <input className="form-control" name="profile" type="text" id="profile" />
    </div>
    {/* organization Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="organization">Organization:</label>
      <input className="form-control" name="organization" type="text" id="organization" />
    </div>
    {/* review snippets Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="review_snippets">Review snippets:</label>
      <input className="form-control" name="review_snippets" type="text" id="review_snippets" />
    </div>
    {/*  sitelinks Field */}
    <div className="form-group col-sm-12 col-lg-6 col-xl-3">
      <label htmlFor="sitelinks">Site links:</label>
      <input className="form-control" name="sitelinks" type="text" id="sitelinks" />
    </div>
    {/*  video Field */}
    <div className="form-group col-sm-12">
      <label htmlFor="video">Video:</label>
      <input className="form-control" name="video" type="text" id="video" />
    </div>
    {/* Seo Title Field */}
    <div className="form-group col-sm-12">
      <label htmlFor="seo_title" className="field-required">Seo Title:</label>
      <input className="form-control" name="seo_title" type="text" id="seo_title" />
    </div>
    {/* Meta Keywords Field */}
    <div className="form-group col-sm-12">
      <label htmlFor="meta_keywords" className="field-required">Meta Keywords:</label>
      <input className="form-control" name="meta_keywords" type="text" id="meta_keywords" />
    </div>
    {/* Meta Description Field */}
    <div className="form-group col-sm-12">
      <label htmlFor="meta_description" className="field-required">Meta Description:</label>
      <textarea className="form-control" name="meta_description" cols={50} rows={10} id="meta_description" defaultValue={""} />
    </div>
    <link rel="stylesheet" type="text/css" href="http://192.168.1.7/kol-backend/public/assets/css/select2.min.css" />
    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    span.select2-selection.select2-selection--single {\n        width: 100%;\n    }\n" }} />
    {/*  */}
  </div>
  <button type="button" className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center">Submit</button>
</div>
</div>
				</div>
			</Row>
			{/* <!-- Row end --> */}
		</Fragment>
	);
};

export default Dashboard;



