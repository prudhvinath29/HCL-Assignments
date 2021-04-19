const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');
const sec_element = document.querySelector('.time-picker .second .sec');

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
let second=d.getSeconds();

setTime();

function setTime () {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	sec_element.value = formatTime(second);
	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute) + ':' + formatTime(second);
}

function formatTime (time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}