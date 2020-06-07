import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>Course Title: {this.props.courseTitle}</h1>
                <p>You selected the Course with ID: _ID_</p>
            </div>
        );
    }
}

export default Course;