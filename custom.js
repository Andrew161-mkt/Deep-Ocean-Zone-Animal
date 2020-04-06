function myFunction1() {
	var dots = document.getElementById("d1");
	var moreText = document.getElementById("more1");
	var btnText = document.getElementById("t1");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction2() {
	var dots = document.getElementById("d2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("t2");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction3() {
	var dots = document.getElementById("d3");
	var moreText = document.getElementById("more3");
	var btnText = document.getElementById("t3");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction4() {
	var dots = document.getElementById("d4");
	var moreText = document.getElementById("more4");
	var btnText = document.getElementById("t4");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction5() {
	var dots = document.getElementById("d5");
	var moreText = document.getElementById("more5");
	var btnText = document.getElementById("t5");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction6() {
	var dots = document.getElementById("d6");
	var moreText = document.getElementById("more6");
	var btnText = document.getElementById("t6");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction7() {
	var dots = document.getElementById("d7");
	var moreText = document.getElementById("more7");
	var btnText = document.getElementById("t7");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
function myFunction8() {
	var dots = document.getElementById("d8");
	var moreText = document.getElementById("more8");
	var btnText = document.getElementById("t8");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton = "block";
  } else {
    mybutton = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}