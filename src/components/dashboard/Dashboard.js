import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const {projects, auth} = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                 <div className="row">
                    <div className="col-md-6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col-md-6">
                        <Notifications />
                    </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.project.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)