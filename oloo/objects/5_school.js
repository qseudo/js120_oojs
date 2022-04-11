let StudentPrototype = {
  init(name, year) {
    this.name = name;
    this.year = year;
    this.courses = [];
    return this;
  },

  info() {
    console.log(`${this.name} is a ${this.year} year student`);
  },

  getCourses() {
    return this.courses;
  },

  listCourses() {
    console.log(this.courses);
  },

  addCourse(course) {
    this.courses.push(course);
  },

  addNote(courseCode, note) {
    const course = this.findCourseByCode(courseCode);

    if (course.hasOwnProperty('note')) {
      course['note'] += `; ${note}`;
    } else {
      course['note'] = note;
    }
  },

  viewNotes() {
    this.courses.forEach(course => {
      if (course.hasOwnProperty('note')) console.log(`${course['name']}: ${course['note']}`);
    });
  },

  findCourseByCode(courseCode) {
    return this.getCourses().find(course => course['code'] === courseCode);
  },

  findCourseByName(courseName) {
    return this.getCourses().find(course => course['name'] === courseName);
  },

  updateNote(courseCode, note) {
    const course = this.findCourseByCode(courseCode);
    course['note'] = note;
  }
};

let school = {
  VALID_YEARS: ['1st', '2nd', '3rd', '4th', '5th'],
  students: [],

  addStudent(name, year) {
    if (this.VALID_YEARS.includes(year)) {
      const student = Object.create(StudentPrototype).init(name, year);
      this.students.push(student);
      return student;
    } else {
      return 'Invalid Year';
    }
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    const course = student.findCourseByCode(courseCode);
    course['grade'] = grade;
  },

  getReportCard(student) {
    student.getCourses().forEach(course => {
      if (course.hasOwnProperty('grade')) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  findStudentsInCourse(courseName) {
    return this.students.filter(student => {
      return student.getCourses().find(course => course['name'] === courseName);
    });
  },

  findAverage(studentsInCourse) {
    const sum = studentsInCourse.reduce((acc, val) => acc + val.grade, 0);
    return (sum / studentsInCourse.length).toFixed(0);
  },

  courseReport(courseName) {
    let studentsInCourse = this.findStudentsInCourse(courseName);

    console.log(`=${courseName} Grades=`);
    studentsInCourse = studentsInCourse.map(student => {
      return {
        name: student.name,
        grade: student.findCourseByName(courseName).grade
      };
    });

    let studentsWithGrade = studentsInCourse.filter(student => student.grade);

    studentsWithGrade.forEach(student => {
      console.log(`${student.name}: ${student.grade}`);
    });
    if (studentsWithGrade.length > 0) {
      console.log('---');
      console.log(`Course Average: ${this.findAverage(studentsInCourse)}`);
    }
  }
};

let foo = school.addStudent('foo', '3rd');
console.log(foo);

school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.getReportCard(foo);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);
school.getReportCard(bar);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);
school.getReportCard(qux);

school.courseReport('Math');