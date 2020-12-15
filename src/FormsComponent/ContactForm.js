import React, { Component } from "react";


class ContactForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            fullname: "sonali",
            email: "sona@sona.com",
            phone: "123456789",
            message:"Enter a message"
        }
    }


    HandleAllEvents = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    HandleSubmit = (event) => {
       
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label>Fullname</label><br/>
                    <input type="text" name="fullname" value = {this.state.fullname}
                           onChange={this.HandleAllEvents} /><br />
                    <label>Email</label><br/>
                    <input type="email" name="email" value = {this.state.email}
                                onChange={this.HandleAllEvents} /><br />
                    <label>Mobile</label><br/>
                    <input type="number" name="phone" value={this.state.phone}
                           onChange={this.HandleAllEvents} /><br />
                    <label>Message </label><br/>
                    <textarea value={this.state.message} name="message"
                              onChange={this.HandleAllEvents} /><br />
                    <input type="submit" value="Sent"/>
                </form>
            </div>
        )
    }
}
export default ContactForm;