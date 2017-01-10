import React from 'react';
import './List.less';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello, {this.props.name}
                <p>{this.props.age}</p>
                {this.props.children}
            </div>
        )
    }
}


class TypeChecking extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="type">
                <h3>早安</h3>
                <Greeting age={10}>
                    <p>hehe</p>
                </Greeting>
            </div>
        )
    }
}

Greeting.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.oneOf([10,20]),
    children: React.PropTypes.element.isRequired
};

Greeting.defaultProps = {
  name: 'Stranger'
};

export default TypeChecking
