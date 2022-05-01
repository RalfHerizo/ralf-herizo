var x = document.getElementById('slide-1');
var y = document.getElementById('slide-2');
var z = document.getElementById('slide-3');
var slideContent = document.getElementById('slider-content');

function slide0 ()
{
	slideContent.innerHTML = " RECYCLER";
	x.classList.add('active');
	y.classList.remove('active');
	z.classList.remove('active');
}


function slide1 ()
{
	slideContent.innerHTML = " NETTOYER";
	x.classList.remove('active');
	y.classList.add('active');
	z.classList.remove('active');
}


function slide2 ()
{
	slideContent.innerHTML = " ENLEVER";
	x.classList.remove('active');
	y.classList.remove('active');
	z.classList.add('active');
}

setInterval(slider,6000);
function slider()
{
	setTimeout(slide0,1000);
	setTimeout(slide1,3000);
	setTimeout(slide2,5000);
}

var navbar = document.getElementById('my_nav_bar');

var progressContent = document.getElementById('progressContent');
var progressContent1 = document.getElementById('progressContent-1');
var progressContent2 = document.getElementById('progressContent-2');
var progressContent3 = document.getElementById('progressContent-3');
var progressContent4 = document.getElementById('progressContent-4');

window.addEventListener('scroll',()=>{
	if(window.scrollY > 1)
	{
		navbar.classList.add('navbar-fix');
	}
	else
	{
		navbar.classList.remove('navbar-fix')
	}
});

/*Animation dessous de chaque liens*/

window.addEventListener('scroll',()=>
{
	if(window.scrollY >= 0 && window.scrollY <= 580)
	{
		progressContent.classList.add("progress-content");
		progressContent2.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent4.classList.remove("progress-content");
	}
	else if(window.scrollY > 580 && window.scrollY <= 900)
	{
		progressContent2.classList.add("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent4.classList.remove("progress-content");
	}
	else if(window.scrollY >= 1200 && window.scrollY <= 2800)
	{
		progressContent1.classList.add("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent2.classList.remove("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent4.classList.remove("progress-content");
	}
	else if(window.scrollY > 2800 && window.scrollY <= 3400)
	{
		progressContent2.classList.add("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent4.classList.remove("progress-content");
	}
	else if(window.scrollY > 3400 && window.scrollY <= 4000)
	{
		progressContent3.classList.add("progress-content");
		progressContent2.classList.remove("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
		progressContent4.classList.remove("progress-content");
	}
	else if(window.scrollY > 4000 && window.scrollY <= 4500)
	{
		progressContent2.classList.add("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent4.classList.remove("progress-content");
	}
	else if(window.scrollY > 5500)
	{
		progressContent4.classList.add("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent2.classList.remove("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
	}
	else
	{
		progressContent4.classList.remove("progress-content");
		progressContent3.classList.remove("progress-content");
		progressContent2.classList.remove("progress-content");
		progressContent.classList.remove("progress-content");
		progressContent1.classList.remove("progress-content");
	}	
	// else if(window.scrollY > 580 || window.scrollY <= 900)
	// {
	// 	progressContent2.classList.add("progress-content");
	// 	progressContent.classList.remove("progress-content");
	// 	progressContent1.classList.remove("progress-content");
	// }
});