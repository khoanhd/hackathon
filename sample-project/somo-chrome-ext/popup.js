function click(e) {
	var select = document.getElementById('cateSelect');
	localStorage.channelCode = select.options[select.selectedIndex].value;
	chrome.extension.getBackgroundPage().window.location.reload();
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var saveBtn = document.getElementById('chooseCateBtn');
  saveBtn.addEventListener('click', click);
  var notifyMess = document.getElementById('notifySaved');
  if (!localStorage.channelCode) {
    localStorage.channelCode = '';
    notifyMess.style.display = "none";
	} else {
		notifyMess.style.display = "block";
		var select = document.getElementById('cateSelect');
		 select.value = localStorage.channelCode;

	}
});