/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      const course = this.courses.find(course => course.code === code);

      if (course) {
        if (course.hasOwnProperty('note')) {
          course['note'] += `; ${note}`;
        } else {
          course['note'] = note;
        }
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty('note')) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(code, note) {
      const course = this.courses.find(course => course.code === code);

      if (course) {
        course['note'] = note;
      }
    }
  };
}

const school = {
  students: [],

  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

    if (VALID_YEARS.includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
      return null;
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({course: courseName, code: courseCode});
  },

  addGrade(student, courseCode, grade) {
    let course = student.courses.find(course => course.code === courseCode);
    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.hasOwnProperty('grade')) {
        console.log(`${course.course}: ${course.grade}`);
      } else {
        console.log(`${course.course}: In Progress`);
      }
    });
  },

  courseReport(courseName) {
    const studentsCompletedCourse = this.students.filter(student => {
      return student.courses.find(course => {
        return (course.course === courseName && course.hasOwnProperty('grade'));
      });
    });

    if (studentsCompletedCourse.length === 0) {
      console.log('undefined');
      return;
    }

    const grades = studentsCompletedCourse.map(student => {
      let indexOfCourse = student.courses.findIndex(course => {
        return course.course === courseName;
      });

      return [student.name, student.courses[indexOfCourse].grade];
    });

    const courseAverage = (grades.reduce((acc, val) => acc + val[1], 0)) /
      grades.length;

    console.log(`=${courseName} Grades=`);
    grades.forEach(grade => {
      console.log(`${grade[0]}: ${grade[1]}`);
    });
    console.log(`---`);
    console.log(`Course Average: ${courseAverage.toFixed(0)}`);
  },
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 101, 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');