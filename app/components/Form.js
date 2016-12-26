import React from 'react';
import ReactDom from 'react-dom';
import './View1.less';
import './Form.less';

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
			if(this.state.userName.trim()){
				if(this.state.email.trim()){
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
			userName: event.target.value,
			isError: false
		})
	}

	hanleChange2(event) {
		this.setState({
			email: event.target.value,
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
						this.state.isError ? <p className="error-message">用户名不能为空</p> : null
					}
					{
						this.state.emailError ? <p className="error-message">邮箱不能为空</p> : null
					}
				</form>
			</div>
		)
	}
}

export default Forms