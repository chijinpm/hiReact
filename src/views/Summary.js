import React,{Component} from 'react';
import SummaryStore from '../stores/SummaryStore.js';

class Summary extends Component {
	constructor(props){
		super(props);
		this.onChange=this.onChange.bind(this);
		this.state={
			sum:SummaryStore.getSummary()
		}
	}
	componentDidMount(){
		SummaryStore.addChangeListener(this.onChange);
	}
	componentWillUnmount(){
		SummaryStore.removeChangeListener(this.onChange);
	}
	onChange(){
		this.setState({sum:SummaryStore.getSummary()});
	}
	render(){
		return(
			<div>
				Total Count:{this.state.sum}
			</div>
		)
	}
}

export default Summary;