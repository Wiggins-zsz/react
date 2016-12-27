import React from 'react';
import ReactDom from 'react-dom';
import './View1.less';
import './Form.less';

class Textareas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write an essay about you favorite Dom element'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('this textarea was submited' + this.state.value)
	}

	handleChange(event) {
		this.setState({
			value: event.target.value.toUpperCase()
		})
	}

	render() {
		return (
			<div className="textarea">
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<textarea value={this.state.value} onChange={this.handleChange}></textarea>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

class Forms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			email: '',
			isError: false,
			emailError: false
		}

		this.hanleChange = this.hanleChange.bind(this);
		this.hanleChange2 = this.hanleChange2.bind(this);
		this.handleSubmit = (event) => {
			const emailTest = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
			const user = this.state.userName.trim().length;
			if(user > 1 && user <= 5){
				console.log(user)
				if(emailTest.test(this.state.email)){
					console.log(this.state.userName);
					alert('Submit success: ' + 'name: ' + this.state.userName.trim() + 'emial: ' + this.state.email.trim());
					event.preventDefault();
				}else{
					event.preventDefault();
					this.setState({
						emailError: true
					});
				}
			}
			else {
				this.setState({
					isError: true
				});
				event.preventDefault();
			}
			
		}
	}

	hanleChange(event) {
		this.setState({
			userName: event.target.value.toUpperCase(),
			isError: false
		})
	}

	hanleChange2(event) {
		this.setState({
			email: event.target.value.toUpperCase(),
			emailError: false
		})
	}

	render() {
		return (
			<div className="form">
				<h2>Form field</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.userName} onChange={this.hanleChange} />
					</label>
					<label>
						Email:
						<input type="text" value={this.state.email} onChange={this.hanleChange2} />
					</label>
					<input type="submit" value="submit" />
					{
						this.state.isError ? <p className="error-message">用户名为空或者长度错误</p> : null
					}
					{
						this.state.emailError ? <p className="error-message">邮箱为空或者错误,请检查邮箱</p> : null
					}
				</form>
				<Textareas />
			</div>
		)
	}
}

export default Forms