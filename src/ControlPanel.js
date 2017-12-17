import React,{Component} from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
	constructor(props){
		//this.props赋值
		super(props);
		//自定义属性
		this.initValues=[0,10,20];
		this.captions=['First','Second','Third'];
		const initSum=this.initValues.reduce((a,b)=>a+b,0);//求数组元素的和
		//内部状态初始化
		this.state={
			sum:initSum
		};
		//绑定自定义方法，一般用来更新内部状态或调用父组件传入的方法
		this.onCounterUpdate=this.onCounterUpdate.bind(this);
	}
	onCounterUpdate(newValue,previousValue){
		const valueChange=newValue-previousValue;
		this.setState({sum:this.state.sum+valueChange});//更新内部状态
	}
	//渲染View
	render(){
		const style={
			padding:'16px'
		}
		return(
				<div style={style}>
					<Counter onUpdate={this.onCounterUpdate} caption={this.captions[0]} initValue={this.initValues[0]}/>
					<Counter onUpdate={this.onCounterUpdate} caption={this.captions[1]} initValue={this.initValues[1]}/>
					<Counter onUpdate={this.onCounterUpdate} caption={this.captions[2]} initValue={this.initValues[2]}/>
					<hr/>
					<div>Total Count:{this.state.sum}</div> 
				</div>
			);
	}
}

export default ControlPanel;//默认输出