import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {
  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'jQuery'},
    ],
    current : ''
  }

  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current) {
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
  }}

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses
    })
  }

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }
  render() {
    const {courses} = this.state;
    const courseList = courses.map( (course , index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return (
        <section className="App">
       
         <h2>Add Course</h2>
         <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
         <ul>{ this.state.courses.length > 0 ? courseList : <p>No Courses To Show! Please Add A New Course.</p>}</ul>

        </section>
      );
  }
}

export default App;
