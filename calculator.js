/**
 * Author:yjw
 * 2019.11.20
 */
$(document).ready(function () {
	var a = 0;
	var op = null;
	var clear = 0;
	var re = 0;
	function cal() {
		if (op == null) {
			re = b;
		} else if (op == "multiply") {
			re = a * b;
		} else if (op == "divide") {
			re = a / b;
		} else if (op == "plus") {
			re = Number(a) + Number(b);
		} else if (op == "minus") {
			re = a - b;
		} else {
			alert("Bug!");
		}
		document.getElementById("result").value = re;
		a = re;
	}

	$('.number').click(function () {
		if (document.getElementById("result").value == 0) {
			document.getElementById("result").value =""
		}
		if (clear == 0) {
			document.getElementById("result").value += this.value;
		} else if (clear == 1) {
			document.getElementById("result").value = this.value;
			clear = 0;
		}
		
		});
	
	$('#clearzero').click(function () {
		document.getElementById("result").value = 0;
		clear = 0;
	});

	$('.tool').click(function () {
		if (op == null) {
			a = document.getElementById("result").value;
			op = this.id;
		} else {
			b = document.getElementById("result").value;
			op = this.id;
			cal();
		}
		clear = 1;
	});

	$('#calculate').click(function () {
		b = document.getElementById("result").value;
		cal();
		clear = 1;
		op = null;
	});

	$('#hundred').click(function () {
		document.getElementById("result").value += 0;
		document.getElementById("result").value += 0;
	});

	$('#percentage').click(function () {
		document.getElementById("result").value /= 100;
	});

	$('#backspace').click(function () {
		var temp = document.getElementById("result").value;
		document.getElementById("result").value = temp.substring(0, temp.length - 1);

	});

	$('#dot').click(function () {
		var temp = document.getElementById("result").value;
		if (temp.indexOf(".") == -1) {
			document.getElementById("result").value += '.';
		}
	});

	});	