import './View1.less';
import Condition from './condition-render';
import List from './List';
import React from 'react';

class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 10
		}

		this.change = () => {
			this.setState({
				age: this.state.age + 10
			})
		}
	}

	render() {
		return (
			<div className="greeting">
				<div>{this.props.name}</div>
				<div>
					<span>按钮编号</span>
					<button onClick={this.change}>
						{this.state.age}
					</button>
				</div>
			</div>
		)
	}
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick = {this.handleClick} >
				{ this.state.isToggleOn ? 'ON':'OFF' }
			</button>
		)
	}
}

class Tick extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			name: 'cccc'
		}

		this.handleClick = () => {
			this.setState({
				name: 'ddddd'
			})
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.tick(),
			1000
		})
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	componentWillUnMount() {
		clearInterval(this.timerID)
	}

	render() {
		return (
			<div className="tick">
			<Greeting name={this.state.name} click={this.handleClick} />
				<h2 className="time">It is { this.state.date.toLocaleTimeString() }</h2>
			</div>

		)
	}
}

class View1 extends React.Component{
	constructor(props) {
		super(props);
	}
	
    render() {
        return (
            <div className="root">
	            <Greeting name="这是按钮一" />
	            <Greeting name='这是按钮二' />
	            <Greeting name='这是按钮三' />
	            <Tick  name = '闹钟名称'/>
	            <Toggle />
	            <Condition />
            </div>
        )
    }
};

export default View1