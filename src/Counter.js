import React,{Component} from 'react';
import PropTypes from 'prop-types';
//console.log(PropTypes);
class Counter extends Component {
	constructor(props){
		super(props);//给this.props赋值
		this.onClickIncrementButton=this.onClickIncrementButton.bind(this);//成员函数手动绑定到this，下同
		this.onClickDecrementButton=this.onClickDecrementButton.bind(this);
		this.updateCount=this.updateCount.bind(this);//被上面两者调用
		this.state={
			count:props.initValue||0
		};
	}
	onClickIncrementButton(){
		this.updateCount(true);
	}
	onClickDecrementButton(){
		this.updateCount(false);
	}
	updateCount(isIncrement){
		const newValue=isIncrement?this.state.count+1:this.state.count-1;
		const previousValue=this.state.count;
		this.setState({count:newValue});//更新内部状态
		this.props.onUpdate(newValue,previousValue);//同时调用父组件传入的方法,以参数的方式向父组件传送的数据		
	}
	render(){
		const buttonStyle={
			margin:'16px'
		};
		const {caption}=this.props;
		return(
				<div>
					<button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
					<button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
					<span>{caption} count:{this.state.count}</span>
				</div>
			);
	}
}

Counter.propTypes={
	onUpdate:PropTypes.func,
	caption:PropTypes.string.isRequired,
	initValue:PropTypes.number
};
Counter.defaultProps={
	onUpdate:f=>f,
	initValue:0
};

export default Counter;