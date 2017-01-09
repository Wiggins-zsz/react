import React from 'react';
import './View1.less';
import './List.less';

const numbers = [
    {id: 1, value: 100},
    {id: 2, value: 100},
    {id: 3, value: 100},
    {id: 4, value: 100},
    {id: 5, value: 100}
];
const listItems = numbers.map((number) =>
    <li key={number.id}> {number.value} </li>
    //arrow funciont 后面不加大括号，默认一行代码，默认return；arrow function 后面加大括号，默认没有return
    //arrow function 如果返回一个对象： () => ({key: value})   会返回{key: value}
);

function NumbersList(props) {
    const numbers = props.numbers;

    return (
        <ul>
            {numbers.map((number,index) => {
                return <li id={index} key={index}> {number * 2} </li>
            })}
        </ul>
    )

}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }

        this.hanleClick = this.hanleClick.bind(this)
    }

    hanleClick() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div className="list-key" onClick={this.hanleClick}>
                {
                    this.state.isShow ? <div>Lists and Keys</div> : <div>Lists and Keys is hidden</div>
                }
                <ul>
                    { listItems }
                </ul>
                <NumbersList numbers={[1,2,3,4,5,6,7,8,9,9]} />
            </div>
        )
    }
}

export default List