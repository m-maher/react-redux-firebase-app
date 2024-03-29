import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {

    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
    }
    render() {
        const {auth} = this.props
        if (!auth.uid) return <Redirect to='signin' />
        return (
            <section className="create-project my-5">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h4>Create Project</h4>
                        <div className="form-group">
                            <label>Title: </label>
                            <br/>
                            <input name="title" type="text" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Content: </label>
                            <br/>
                            <textarea name="content" className="form-control" onChange={this.handleChange}></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps, {createProject})(CreateProject)