class Schedule {
	constructor(owner, courselist) {
		this.owner = owner;
		this.courselist = courselist;
	}
}

function testSchedule() {
	let course1 = new Course("CS4610", "Compilers", "");
	let course2 = new Course("STS4500", "STS", "");
	let course3 = new Course("CS4610", "Programming Languages", "Mary Sofa");

	let schedule = new Schedule("Hunter", [course1, course2, course3]);
	console.log("" + schedule);
}

function save_data() {
	var data = $("form > input")
		.map(function() {
			var obj = {};
			$(this).each(function() {
				obj[$(this).attr("id")] = $(this).val();
			});
			return obj;
		})
		.get();
	console.log(data);
	set_data(data);
}

function pull_data() {
	let a = get_data();
}

function display_data(data) {
	console.log("------");
	console.log(data);
	console.log("------");
}

function get_data() {
	$.ajax({
		type: "PUT",
		url: "/read",
		data: { name: $("#name").val() },
		success: function(data) {
			display_data(data);
		},
		error: function(xhr, status, error) {
			console.log("FAILURE");
			console.log("Error: " + error.message);
		}
	});
}

function set_data(data) {
	$.ajax({
		type: "PUT",
		url: "/write",
		data: { name: $("#name").val(), data: data },
		success: function(data) {
			console.log(data);
		},
		error: function(xhr, status, error) {
			console.log("Error: " + error.message);
		}
	});
}

Schedule.prototype.toString = function() {
	let courselist = this.courselist;
	let result = `${this.owner}'s Schedule:\n`;
	for (let i = 0; i < courselist.length; i++) {
		result += courselist[i] + "\n";
	}
	return result;
};
