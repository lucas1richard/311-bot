import React from 'react';

class PubForm extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      message: '',
      description: ''
    };
    this.changeSubject = this.changeSubject.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeSubject(ev) {
    this.setState({ subject: ev.target.value });
  }

  changeDescription(ev) {
    this.setState({ description: ev.target.value });
  }

  changeMessage(ev) {
    this.setState({ message: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>Pub Form</h1>
        <form onSubmit={ this.submitForm }>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              value={ this.state.subject }
              onChange={ this.changeSubject }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              value={ this.state.description }
              onChange={ this.changeDescription }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              value={ this.state.message }
              onChange={ this.changeMessage }
              rows={4}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      );
  }
}

export default PubForm;
