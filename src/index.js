import React from 'react';

class EmailShare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.email,
			subject: props.subject,
			body: props.body
		};
	}
	componentDidMount() {
		if (!this.state.body) {
			this.setState({
				body: document.location.href
			});
		}
	}
	componentDidUpdate(prevProps) {
		let state = {};
		if (this.props.email !== prevProps.email) {
			state.email = this.props.email;
		}
		if (this.props.body !== prevProps.body) {
			state.body = this.props.body;
		}
		if (this.props.subject !== prevProps.subject) {
			state.subject = this.state.subject
		}
		this.setState(state);
	}
	render() {
		let query = [];
		if (this.state.subject) query.push(`subject=${encodeURIComponent(this.state.subject)}`);
		if (this.state.body) query.push(`body=${encodeURIComponent(this.state.body)}`);
		return this.props.children(`mailto:${this.state.email || ''}${(query.length ? `?${query.join('&')}` : ``)}`);
	}
}

export default EmailShare;