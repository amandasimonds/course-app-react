import React, { Component } from 'react';

class Course extends Component {

    state={
        courseTitle: ""
    }

    //extract the query params and set them to course title state
    componentDidMount(){
        this.parseQueryParams();
    }

    componentDidUpdate(){
        this.parseQueryParams();
    }

    parseQueryParams () {
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        console.log(query)
        for (let param of query.entries()){
            console.log(param);
            if (this.state.courseTitle !== param[1]){
                this.setState({courseTitle: param[1]})
            }
        }
    }

    render () {
        return (
            <div>
                <h1>Course Title: {this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}
                </p>
            </div>
        );
    }
}

export default Course;