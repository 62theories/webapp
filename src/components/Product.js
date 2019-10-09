import React from "react"
import { Link, withRouter } from "react-router-dom"

class Product extends React.Component {
	state = {
		datas: this.props.datas,
		counter: this.props.datas.length,
		max_per_page: 3,
		pageNow: 1
	}

	render() {
		return (
			<div className='container-fluid'>
				<div class='card'>
					<div class='card-body'>
						<h4 class='card-title'>Products</h4>
						<div className='d-flex justify-content-end align-items-end pl-5 pr-3 mb-3'>
							<div className='ml-auto'>
								<form>
									<input
										className='form-control form-control-sm font-weight-bold'
										placeholder='ค้นหา'
										type='text'
										onChange={this.filterData}
									/>
								</form>
							</div>
						</div>
						<div class='table-responsive'>
							<table class='table'>
								<thead>
									<tr>
										<th className='text-center'>#</th>
										<th className='text-center'>name</th>
										<th className='text-center'>price</th>
										<th className='text-center'></th>
										{/* <th className='text-center'></th> */}
									</tr>
								</thead>
								{/* <tbody>
									<tr>
										<td>1</td>
										<td>Deshmukh</td>
										<td>Prohaska</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Deshmukh</td>
										<td>Gaylord</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Sanghani</td>
										<td>Gusikowski</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Roshan</td>
										<td>Rogahn</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Joshi</td>
										<td>Hickle</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Nigam</td>
										<td>Eichmann</td>
									</tr>
								</tbody> */}
								{this.renderBody()}
							</table>
							{this.renderFooter()}
						</div>
					</div>
				</div>
			</div>
		)
	}

	renderBody = () => {
		let i = 1
		return (
			<tbody>
				{this.state.datas
					.filter((item, index) => {
						return (
							item !== null &&
							this.state.pageNow ===
								Math.ceil((index + 1) / this.state.max_per_page)
						)
					})
					.map((data, key) => (
						<tr key={key}>
							<th
								scope='row'
								className='text-center'
								style={{ width: "50px" }}
							>
								{i++}
							</th>
							{this.props.headers.map((head, keyin) => {
								const value = data[head]
								// const value = this.getData(data, head)
								return (
									<td key={keyin} className='text-center'>
										{/* {value === "true" ? (
											<div className='status status-true'></div>
										) : value === "false" ? (
											<div className='status status-false'></div>
										) : (
											<div className='tag-a'>{value}</div>
										)} */}
										{value}
									</td>
								)
							})}
							<td>
								<div className='text-center'>
									<button
										className='btn btn-primary'
										onClick={() =>
											this.props.history.push(
												`/product/view/${data.id}`
											)
										}
									>
										{" "}
										view{" "}
									</button>
								</div>
							</td>
						</tr>
					))}
			</tbody>
		)
	}

	renderFooter = () => {
		if (this.state.counter !== 0) {
			return (
				<div className='d-flex justify-content-end align-items-center'>
					<div>
						<nav>
							<ul className='pagination justify-content-end mb-0'>
								<li
									className={
										this.state.pageNow === 1
											? "page-item disabled"
											: "page-item"
									}
									onClick={this.pagePrev}
								>
									<button className='page-link'>
										<i className='fa fa-chevron-left' />
									</button>
								</li>
								{this.renderPrev2Page()}
								{this.renderPrev1Page()}
								<li className='page-item active'>
									<button className='page-link'>
										{this.state.pageNow}
									</button>
								</li>
								{this.renderNext1Page()}
								{this.renderNext2Page()}
								<li
									className={
										this.state.pageNow ===
										Math.ceil(
											this.state.counter /
												this.state.max_per_page
										)
											? "page-item disabled"
											: "page-item"
									}
									onClick={this.pageNext}
								>
									<button type='button' className='page-link'>
										<i className='fa fa-chevron-right' />
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			)
		} else {
			return null
		}
	}

	renderPrev2Page = () => {
		if (
			this.state.pageNow ===
				Math.ceil(this.state.counter / this.state.max_per_page) &&
			Math.ceil(this.state.counter / this.state.max_per_page) >= 3
		) {
			return (
				<li
					className='page-item'
					onClick={() => {
						this.setState({ pageNow: this.state.pageNow - 2 })
					}}
				>
					<button className='page-link'>
						{this.state.pageNow - 2}
					</button>
				</li>
			)
		} else {
			return null
		}
	}

	renderPrev1Page = () => {
		if (this.state.pageNow !== 1) {
			return (
				<li
					className='page-item'
					onClick={() => {
						this.setState({ pageNow: this.state.pageNow - 1 })
					}}
				>
					<button className='page-link'>
						{this.state.pageNow - 1}
					</button>
				</li>
			)
		} else {
			return null
		}
	}

	renderNext1Page = () => {
		if (
			this.state.pageNow !==
			Math.ceil(this.state.counter / this.state.max_per_page)
		) {
			return (
				<li
					className='page-item'
					onClick={() => {
						this.setState({ pageNow: this.state.pageNow + 1 })
					}}
				>
					<button className='page-link'>
						{this.state.pageNow + 1}
					</button>
				</li>
			)
		}
	}

	renderNext2Page = () => {
		if (
			this.state.pageNow === 1 &&
			Math.ceil(this.state.counter / this.state.max_per_page) >= 3
		) {
			return (
				<li
					className='page-item'
					onClick={() => {
						this.setState({ pageNow: this.state.pageNow + 2 })
					}}
				>
					<button className='page-link'>
						{this.state.pageNow + 2}
					</button>
				</li>
			)
		}
	}
	///////////////////////////////////////////////////////////////////////////// render footer // END
	pagePrev = () => {
		if (this.state.pageNow > 1) {
			this.setState({ pageNow: this.state.pageNow - 1 })
		}
	}

	pageNext = () => {
		if (
			this.state.pageNow <
			Math.ceil(this.state.counter / this.state.max_per_page)
		) {
			this.setState({ pageNow: this.state.pageNow + 1 })
		}
	}
	filterData = ({ target }) => {
		let count = 0
		this.setState({
			isJustSearch: true,
			pageNow: 1,
			datas: this.props.datas.filter(data => {
				let found = false
				if (data !== null) {
					this.props.headers.forEach(field => {
						let word = data[field]
						if (![null, "", "-"].indexOf(word) > -1) {
							if (
								String(word).toLowerCase() !== null &&
								String(word)
									.toLowerCase()
									.includes(target.value.toLowerCase())
							) {
								found = true
							}
						}
					})
				}
				if (found === true) {
					count++
				}
				return found
			}),
			counter: count
		})
	}
}

export default withRouter(Product)
