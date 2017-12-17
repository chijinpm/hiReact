import React,{Component} from 'react';
import CounterStore from '../stores/CounterStore.js';
import * as Actions from '../Actions.js';

class Counter extends Component {
	constructor(props){
		super(props);
		this.onClickIncrementButton=this.onClickIncrementButton.bind(this);
		this.onClickDecrementButton=this.onClickDecrementButton.bind(this);
		this.onChange=this.onChange.bind(this);
		this.state={
			count:CounterStore.getCounterValues()[props.caption]
		}
	}
	onClickIncrementButton(){
 		Actions.increment(this.props.caption);
	}
	onClickDecrementButton(){
		Actions.decrement(this.props.caption);
	}
	onChange(){
		const newCount=CounterStore.getCounterValues()[this.props.caption];
		this.setState({count:newCount});
	}
	componentDidMount(){
		CounterStore.addChangeListener(this.onChange);
	}
	componentWillUnmount(){
		CounterStore.removeChangeListener(this.onChange);
	}
	render(){
		const {caption}=this.props;
		const buttonStyle={
			margin:'16px'
		}
		return (
			<div>
				<button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
				<button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
				<span>{caption} Count:{this.state.count}</span>
			</div>
		);
	}
}

export default Counter;