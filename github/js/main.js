var out = false;
var slide_video = $(".slide_video");
var slide_about = $(".slide_about");
var slide_projects = $(".slide_projects");
var video = $(".video_main_");

$(document).ready(function(){

    var player;
    var lastSlide = slide_video;
    var order = ['video', 'about', 'projects'];

	$(".burger_wrapper").on("click", function(){
		if( $(this).hasClass("active") )
			$(this).removeClass("active");
		else
			$(this).addClass("active");
		slide_video.removeClass("hidden");
		slide_about.removeClass("hidden");
		slide_projects.removeClass("hidden");

		out==true?out=false:out=true;

		if( out )
		{
			$(".fast_info").addClass("active");
			slide_video.removeClass("active");
			slide_about.removeClass("active");
			slide_projects.removeClass("active");
		}
		else
		{
			$(".fast_info").removeClass("active");
			$(lastSlide).addClass("active");
		}
	});

	/*Lighting start*/
	$(".slide_video, .slide_projects, .slide_about").hover(function(){
		if( !$(this).hasClass("active") )
			$(this).css({'border': '2px solid white'});
		if( out )
		{
			if( $(this).attr('id') == slide_video.attr('id') )//hover to video slide
				$(".home").addClass("lighting");
			if( $(this).attr('id') == slide_about.attr('id') )//hover to aboutME slide
				$(".about").addClass("lighting");
			if( $(this).attr('id') == slide_projects.attr('id') )//hover to projects slide
				$(".projects").addClass("lighting");
		}
	});

	$(".slide_video, .slide_projects, .slide_about").mouseleave(function(){
		if( !$(this).hasClass("active") )
			$(this).css({'border': 'none'});
		$(".home").removeClass("lighting");
		$(".about").removeClass("lighting");
		$(".projects").removeClass("lighting");
	});
	/*Lighting end*/

	/*Turn on/off volume start*/
	$(".turnOn, .turnOff").on("click", function(){
		if( $(this).attr('id') == "vol_off" )//mute video
		{
			$(".turnOn").addClass('active');
			$(this).removeClass('active');
			video.prop("volume", 1);
		}
		else//unmute video
		{
			$(".turnOn").removeClass('active');
			$(".turnOff").addClass('active');
			video.prop("volume", 0);
		}
	});
	/*Turn on/off volume end*/

	$(".slide_video, .slide_projects, .slide_about, .paragraph_text").on("click", function(){
		if(out == false)
			return;

		$(".fast_info").removeClass("active");
		var id;
		if( $(this).hasClass("paragraph_text") )//clicked to a link_nav
		{
			var link_nav = $(this);
			if( link_nav.hasClass("home") )
				id = slide_video.attr('id');
			if( link_nav.hasClass("about") )
				id = slide_about.attr('id');
			if( link_nav.hasClass("projects") )
				id = slide_projects.attr('id');

		}
		else//clicked to a slide
			id = $(this).attr('id');

		var lastSlideID = lastSlide.attr('id');
		out = false;
		$(".burger_wrapper").toggleClass("active");
		$(this).css({'border': 'none'});


		if(id == slide_video.attr('id'))//Slide video
		{
			if(id == lastSlideID)//if click to last slide
			{
				slide_video.addClass("active");
				return;
			}
			else//if click to an other slide(about or projects)
			{
				if(slide_video.hasClass("middle"))//middle
				{
					slide_video.removeClass("middle");
					if(lastSlideID == slide_about.attr('id'))//last was slide about
					{
						slide_about.removeClass("first");
						slide_about.addClass("middle");
					}
					else//last was slide projects
					{
						slide_projects.removeClass("first");
						slide_projects.addClass("middle");
					}
				}
				else//last
				{
					slide_video.removeClass("last");
					if(lastSlideID == slide_about.attr('id'))//last was slide about
					{
						slide_about.removeClass("first");
						slide_about.addClass("middle");
						slide_projects.removeClass("middle");
						slide_projects.addClass("last");
					}
					else//last was slide projects
					{
						slide_projects.removeClass("first");
						slide_projects.addClass("middle");
						slide_about.removeClass("middle");
						slide_about.addClass("last");
					}
				}
			}
			slide_about.addClass("hidden");
			slide_projects.addClass("hidden");
			slide_video.addClass("active");
			slide_video.addClass("first");
			lastSlide = slide_video;
		}

		if( id == slide_about.attr('id') )//Slide about
		{
			if(id == lastSlideID)//if click to last slide
			{
				slide_about.addClass("active");
				return;
			}
			else//if click to an other slide(video or projects)
			{
				if(slide_about.hasClass("middle"))//middle
				{
					slide_about.removeClass("middle");
					if(lastSlideID == slide_video.attr('id'))//last was slide video
					{
						slide_video.removeClass("first");
						slide_video.addClass("middle");
					}
					else//last was slide projects
					{
						slide_projects.removeClass("first");
						slide_projects.addClass("middle");
					}
				}
				else//last
				{
					slide_about.removeClass("last");
					if(lastSlideID == slide_video.attr('id'))//last was slide video
					{
						slide_video.removeClass("first");
						slide_video.addClass("middle");
						slide_projects.removeClass("middle");
						slide_projects.addClass("last");
					}
					else//last was slide projects
					{
						slide_projects.removeClass("first");
						slide_projects.addClass("middle");
						slide_video.removeClass("middle");
						slide_video.addClass("last");
					}
				}
			}
			slide_video.addClass("hidden");
			slide_projects.addClass("hidden");
			slide_about.addClass("active");
			slide_about.addClass("first");
			lastSlide = slide_about;
		}

		if( id == slide_projects.attr('id') )//Slide projects
		{
			if(id == lastSlideID)//if click to last slide
			{
				slide_projects.addClass("active");
				return;
			}
			else//if click to an other slide(video or about)
			{
				if(slide_projects.hasClass("middle"))//middle
				{
					slide_projects.removeClass("middle");
					if(lastSlideID == slide_video.attr('id'))//last was slide video
					{
						slide_video.removeClass("first");
						slide_video.addClass("middle");
					}
					else//last was slide about
					{
						slide_about.removeClass("first");
						slide_about.addClass("middle");
					}
				}
				else//last
				{
					slide_projects.removeClass("last");
					if(lastSlideID == slide_video.attr('id'))//last was slide video
					{
						slide_video.removeClass("first");
						slide_video.addClass("middle");
						slide_about.removeClass("middle");
						slide_about.addClass("last");
					}
					else//last was slide about
					{
						slide_about.removeClass("first");
						slide_about.addClass("middle");
						slide_video.removeClass("middle");
						slide_video.addClass("last");
					}
				}
			}
			slide_video.addClass("hidden");
			slide_about.addClass("hidden");
			slide_projects.addClass("active");
			slide_projects.addClass("first");
			lastSlide = slide_projects;
		}

	});

});

var myVideo = document.getElementById("videoPlayer");
myVideo.play();

setInterval(RandText1, 20);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var count_changes = 0;
var istrue = [];
var delay_for_main_text = 0;
var returning = false;

function RandText1()
{
	var main_text = "";
	if(count_changes < 35)
	{
		var text_for_name = $(".main_name").text();
		if(text_for_name == null)
		{
			text_for_name = $(".main_name").text();
		}
		var pos = Math.floor(Math.random() * text_for_name.length);
		text_for_name = text_for_name.replace(text_for_name.charAt(pos), chars.charAt(Math.floor(Math.random() * chars.length)));
		$(".main_name").text(text_for_name);
 		count_changes += 1;
	}
	else
	{
		var Namee = "Maxim Liubushkin";
		main_txt = $(".main_name").text();
		if(main_txt != Namee)
		{
			if(istrue == null)
			{
				for(var i = 0; i < main_txt.length; i++)
				{
					istrue.push("0");
				}
			}
			else
			{
				if(returning == false)
				{
					for(var i = 0; i < main_txt.length; i++)
					{
						istrue[i] = "0";
					}
					returning = true;
				}
			}
		}
		for(var i = 0; i < main_txt.length; i++)
		{
				if(((main_txt.charAt(i) == Namee.charAt(i)) && (istrue[i] == "0")))
				{
					istrue[i] = "1"
					continue;
				}
				else
					if(istrue[i] == "1")
						continue;
				if(((main_txt.charAt(i) != Namee.charAt(i)) && (istrue[i] == "0")))
				{
					main_txt = main_txt.replace(main_txt.charAt(i), Namee.charAt(i));
					istrue[i] = "1";
					break;
				}
		}
		var count_nulls = 0;
		for(var i = 0; i<main_txt.length; i++)
		{
			if(istrue[i] == "0")
				count_nulls++;
		}
		if(count_nulls == 0)
		{
			main_txt = Namee;
			text_for_name = main_txt;
		}
		if(returning == true)
			$(".main_name").text(main_txt);
		if(main_txt == Namee)
		{
			delay_for_main_text++;
			if(delay_for_main_text == 75)//1.5sec (20*75 = 1500mls = 1.5sec)
			{
				delay_for_main_text = 0;
				count_changes = 0;
			}
			returning = false;
		}
	}
}

function burgDelay()
{
	return;
	/*var burger = $(".burger_wrapper");
	var delay = setInterval(function(){
	if( (burger.hasClass("active") && out == false) || ((!burger.hasClass("active")) && out == true))
		burger.toggleClass("active");
	}, 200);*/
}

setInterval(TimeGo, 1000);
function TimeGo()
{
	var time = new Date();
	var h = time.getHours().toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();

	if(h.length < 2)
		h = '0' + h;
	if(m.length < 2)
		m = '0' + m;
	if(s.length < 2)
		s = '0' + s;

	var clockResult = h + ':' + m + ':' + s;

	$("#time").text(clockResult);
}
