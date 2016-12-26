import React from 'react';
import './View1.less';

function Hello(props) {
	return (
		<div onClick={props.click} className="hello">
			展示页面: {props.detail}
		</div>
	)
}

function List(props) {
	return (
		<div onClick={props.click} className="hello">
			展示列表: {props.detail}
		</div>
	)
}

class Indexs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span onClick={this.props.click}>The index is(click counts):</span> 
				<span className="indexs">
					{this.props.indexs}
				</span>
			</div>
		)
	}
}

class Condition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: true,
			indexs: 1
		}
		this.handleIndex = this.handleIndex.bind(this)

		this.handleShow = () => {
			this.setState({
				isShow: !this.state.isShow
			})
		}

		this.handlePage = () => {
			console.log('The page is hidden and the list is show')
		}

		this.handleList = () => {
			console.log('The list is hidden and the page is show')
		}
	}

	handleIndex() {
		this.setState({
			indexs: this.state.indexs + 1
		})
	}


	render() {
		return (
			<div>
				<div onClick={this.handleShow}>
					{
						this.state.isShow ? <Hello click={this.handlePage} detail ="页面如下所示" />:<List click={this.handleList} detail="列表如下" />
					}
				</div>
				<Indexs indexs={this.state.indexs} click={this.handleIndex} />   
			</div>
		)
	}
}

export default Condition