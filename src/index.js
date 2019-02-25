import React from 'react';
import PropTypes from 'prop-types';
import { stringify } from 'querystring';

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
		if (this.props.email !== prevProps.email) {
			this.setState({
				email: this.props.email
			});
		}
		if (this.props.body !== prevProps.body) {
			this.setState({
				body: this.props.body
			});
		}
		if (this.props.subject !== prevProps.subject) {
			this.setState({
				subject: this.props.subject
			});
		}
	}
	render() {
		let query = {};
		if (this.state.subject) query.subject = this.state.subject;
		if (this.state.body) query.body = this.state.body;
		return this.props.children(`mailto:${this.state.email || ''}?${stringify(query)}`);
	}
}

EmailShare.propTypes = {
	body: PropTypes.string,
	email: PropTypes.string,
	subject: PropTypes.string
};

export default EmailShare;