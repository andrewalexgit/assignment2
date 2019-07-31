function oddNumber(n) {

	s = n.toString()
	x = parseInt(s.substring(0, 1));
	y = parseInt(s.substring(1, 2));

	sum = x + y

	console.log("(even) " + (n/2) + " -> " + s + " = " + x + ", " + y + " = " + sum);

	return (sum);

}

function algorithm(ccnumber, isOdd, sum) {

	n = ccnumber.length;

	if (n > 0) {

		console.log("ENTER");

		if (isOdd) {
			item = ccnumber.substring(0, 1);
			console.log("(odd) " + item);
			sum += parseInt(item);
		} else {

			item = ccnumber.substring(0, 1);
			prod = parseInt(item) * 2;

			if (prod > 9) {
				sum += oddNumber(prod);
			} else {
				console.log("(even) " + item + " -> " + prod);
				sum += prod;
			}
		}

		console.log("(sum) " + sum);

		return algorithm(ccnumber.substring(1, n), !isOdd, sum);

	} else {

		console.log(sum);
		return sum;

	}

}

function luhn() {

	isReady = check_card_length()

	if (isReady) {

		document.getElementById("prompt").innerHTML = "Enter a credit card number in the box and see if it passes the Luhn test!";

		ccnumber = document.getElementById("ccnumber").value;

		if ((algorithm(ccnumber, false, 0) % 10) == 0) {
			document.getElementById("result").innerHTML = "Passed!";
		} else {
			document.getElementById("result").innerHTML = "Failed!";
		}
	} else {

		document.getElementById("prompt").innerHTML = "Sorry that number was invalid, try again with a longer number!";

	}

}

function check_card_length() {

	ccnumber = document.getElementById("ccnumber").value;

	n = ccnumber.length;

	if (n < 15) {
		document.getElementById("ccnumber").style.border = "thick solid red";
		return false;
	} else {
		document.getElementById("ccnumber").style.border = "thick solid green";
		return true;
	}

}