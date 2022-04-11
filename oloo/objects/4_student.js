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

  listCourses() {
    console.log(this.courses);
  },

  addCourse(course) {
    this.courses.push(course);
  },

  addNote(courseCode, note) {
    const course = this.findCourse(courseCode);

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

  findCourse(courseCode) {
    return this.courses.find(course => course['code'] === courseCode);
  },

  updateNote(courseCode, note) {
    const course = this.findCourse(courseCode);
    course['note'] = note;
  }
};

let foo = Object.create(StudentPrototype).init('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"