class Course {
	constructor(courseName, courseTitle, professor) {
		this.courseName = courseName;
		this.courseTitle = courseTitle;
		this.professor = professor;
	}
}

function testClass() {
	let course1 = new Course("CS4120", "Compilers", "Mary Sofa");

	console.log(course1);
}

Course.prototype.toString = function() {
	return `${this.courseName} ${this.courseTitle} ${this.professor}`;
};
