import React from 'react';
import ReactDom from 'react-dom';
import './List.less';


function Item(props) {
	return <li>Hello {props.message}</li>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}


function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}


class Jsx extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const todos = ['first elment','second elment','third elment','fourth elment']
		return (
    		<div className="jsx">

				{ todos.map((item) => <Item key={item} message={item} />) }
				<ListOfTenThings />
				{String(false)}
				{ 0 && <h1>短路表达式</h1> }
    		</div>
		)
	}
}

export default Jsx;