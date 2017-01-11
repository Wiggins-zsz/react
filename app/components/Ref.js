import React from 'react';
import ReactDOM from 'react-dom';
import './List.less';

class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {  
                var index = event.target.value; 
                if(index >= 1 && index <= 10) {  
                    //找到对应的输入框并将焦点设置到里面  
                    var refName = "input" + index;  
                    //var inputDOM = React.findDOMNode(this.refs[refName]);  
                    var inputDOM = this.refs;
                    console.log(inputDOM)
                    //inputDOM.focus();  
                }  
            }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    var inputs = [];
    for(var i=1; i<=10; i++) {
      inputs.push(<div><li><input type="text" ref={"input" + i}/></li><br/></div>);
    }
    return (
      <div>
        <label htmlFor="input">在这里输入下面任意输入框的索引，光标会自动定位到输入框内: </label>
        <input type="text" id="input" onChange={this.handleChange} />
        <hr />
        <ol>
          {inputs}
        </ol>
      </div>
    )
  }
}

export default Ref