import React from 'react';
import './List.less';
/*
//Declaring Prop Types and Default Props

    // with es6
        class Greeting extends React.Component {
          // ...
        }

        Greeting.propTypes = {
          name: React.PropTypes.string
        };

        Greeting.defaultProps = {
          name: 'Mary'
        };


    //without es6
        var Greeting = React.createClass({
          propTypes: {
            name: React.PropTypes.string
          },

          getDefaultProps: function() {
            return {
              name: 'Mary'
            };
          },

          // ...

        });


//Setting the Initial State 

    //with es6: 
        class Counter extends React.Component {
          constructor(props) {
            super(props);
            this.state = {count: props.initialCount};
          }
          // ...
        }

    //without es6:

        var Counter = React.createClass({
          getInitialState: function() {
            return {count: this.props.initialCount};
          },
          // ...
        });


//Autobinding:
    //when a React component declared as ES6 classes, methods don't automatically bind this to instance,
    //have to explicitly use .bind(this) in the constructor:

        class SayHello extends React.Component {
          constructor(props) {
            super(props);
            this.state = {message: 'Hello!'};
            // This line is important!
            this.handleClick = this.handleClick.bind(this);
          }

          handleClick() {
            alert(this.state.message);
          }

          render() {
            // Because `this.handleClick` is bound, we can use it as an event handler.
            return (
              <button onClick={this.handleClick}>
                Say hello
              </button>
            );
          }
        }

    //with React.createClass(),this is not necessary because it binds all methods:

        var SayHello = React.createClass({
          getInitialState: function() {
            return {message: 'Hello!'};
          },

          handleClick: function() {
            alert(this.state.message);
          },

          render: function() {
            return (
              <button onClick={this.handleClick}>
                Say hello
              </button>
            );
          }
        });


    // use arrow function bind

    class SayHello extends React.Component {
      constructor(props) {
        super(props);
        this.state = {message: 'Hello!'};
      }
      // WARNING: this syntax is experimental!
      // Using an arrow here binds the method:
      //Please note that the syntax above is experimental and the syntax may change,
      // or the proposal might not make it into the language.
      handleClick = () => console.log(this.state.message)

      render() {
        return (
          <button onClick={this.handleClick}>
            Say hello
          </button>
        );
      }
    }


    //if you'd rather play it with safe, there are a few optons:

    // Bind methods in the constructor.
    // Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
    // Keep using React.createClass().
*/

//mixin

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

export default TickTock
