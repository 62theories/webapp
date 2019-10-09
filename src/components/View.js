import React from "react"
import data from "../file/data"
import { withRouter } from "react-router-dom"
class View extends React.Component {
	state = {
		name: "",
		price: "",
		description: ""
	}

	imgmap = {
		"1": "one.jpg",
		"2": "two.jpg",
		"3": "three.jpg",
		"4": "four.jpg",
		"5": "five.jpg"
	}

	componentDidMount() {
		// let item = data.find(item => item.id === this.props.match.params.id)
		// this.setState({
		// 	name: item.name,
		// 	price: item.price,
		// 	description: item.description
		// })
		data.forEach(item => {
			if (String(item.id) === this.props.match.params.id) {
				this.setState({
					name: item.name,
					price: item.price,
					description: item.description
				})
			}
		})
	}

	render() {
		return (
			<div className='container-fluid'>
				<div class='card'>
					<div class='card-body'>
						<div class='container'>
							<div class='row'>
								<div class='col-sm'>
									<div className='form-logo--image float-left pt-4 mb-3'>
										<img
											src={require(`../images/${
												this.imgmap[
													this.props.match.params.id
												]
											}`)}
											className='input-file--image'
										/>
									</div>
								</div>
								<div class='col-sm'>
									<form
										onSubmit={e => {
											e.preventDefault()
											this.props.changeUserValue(
												this.state.user
											)
										}}
									>
										<div class='form-group'>
											<label>Name</label>
											<input
												type='text'
												class='form-control'
												name='name'
												value={this.state.name}
												required
												disabled
											/>
										</div>
										<div class='form-group'>
											<label>Price</label>
											<input
												type='text'
												class='form-control'
												name='surname'
												value={this.state.price}
												required
												disabled
											/>
										</div>

										<label>Description</label>
										<textarea
											className='form-control h-5 mb-3'
											rows='5'
											name='tel'
											value={this.state.description}
											required
											disabled
										/>

										<div className='d-flex justify-content-end'>
											<button
												type='button'
												className='btn btn-primary'
												onClick={() =>
													this.props.history.goBack()
												}
											>
												Back
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(View)
