import React,{Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary'

class ControlPanel extends Component {
	render(){
		const style={
			padding:'16px'
		}
		return (
			<div style={style}>
				<Counter caption="First"/>
				<Counter caption="Second"/>
				<Counter caption="Third"/>
				<hr/>
				<Summary/>
			</div>
		);
	}
}

export default ControlPanel;