import React from 'react';
import './List.less';

class CounterButton extends React.PureComponent {    //替代shouldComponentUpdate
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count * 5 }))}>
        Count: {this.state.count}
      </button>
    );
  }
}


class ListOfWords extends React.PureComponent {
  render() {
    return <div>
        {this.props.words.join(',')}
    </div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /*handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }*/   //this function won`t trigger shouldComponentUpdate;

  handleClick() {
    this.setState(prevState => ({
      words: prevState.words.concat(['marklar'])
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}




class Performance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      console.log("count is changed")
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="perfermance">
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
        <CounterButton />
        <WordAdder />
      </div>
    );
  }
}

export default Performance