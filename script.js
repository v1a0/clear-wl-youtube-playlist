// Copy and paste this code into web browser console on page: https://www.youtube.com/playlist?list=WL
// v1a0, November 2021

var items = $('body').getElementsByClassName("style-scope yt-icon-button");

function deleter(i) {
  setTimeout(function timer() {
    items[30].click();
		try {
			var temp = $('body').getElementsByClassName("style-scope ytd-menu-popup-renderer")[3].click();
		}
		catch (e) {
			var temp = $('body').getElementsByClassName("style-scope ytd-menu-popup-renderer")[1].click()
		}
  }, 500*i);
}

for (var i = 0; i < items.length-30; ++i) {
  deleter(i)
}
