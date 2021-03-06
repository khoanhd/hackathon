/******************/
//*DEFAULT CONFIG*//
/******************/
var secret = 'dc9b9efd3e02d2e6e2800fb2b61421f7';
// Production config
var domain = 'http://0103a17e.ngrok.io/';
var io_connect = 'http://8369f9cc.ngrok.io';

// Development config
// var domain = 'http://127.0.0.1/';
// var io_connect = 'http://127.0.0.1:3000';

/**************************************/
//*Function showPushed or showDefault*//
/**************************************/
/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "Notification.requestPermission" beforehand).
*/
function showPushed() {
  var currentTime = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var scheduleTime = localStorage.time;
  var body = mess = "";
  if(localStorage.message != null) {
      body = localStorage.message;
  }

  if(scheduleTime == currentTime[0]) {
    mess = localStorage.title;
    body = scheduleTime;
    if(localStorage.url != null) {
        body = localStorage.message;
    }

    var myNotificationID = null;
    chrome.notifications.create("", {
        type:    "basic",
        iconUrl: "64.png",
        title:   mess,
        message: body,
        contextMessage: body,
        buttons: [{
            title: "Apply"
        }]
    }, function(id) {
        myNotificationID = id;
    });
    chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
        if (notifId === myNotificationID) {
            window.open('http://0103a17e.ngrok.io/thankyou.html');
        }
    });
    chrome.notifications.onClicked.addListener(function(notifId, btnIdx) {
        if (notifId === myNotificationID) {
            window.open(localStorage.url);
        }
    });
  }
}

function showDefault() {
    var currentTime = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var body = mess = "";
    var defaultData = [];
    $.ajax({
        url: domain + 'notification/get-default-notifications',
        type: 'get',
        data: {secret: secret},
        success: function (resp) {
            defaultData = JSON.parse(resp.defaultData);
            if (JSON.parse(localStorage.firstRun)) {
                $.each(defaultData, function () {
                    var notify_data = this;
                    body = "Schedule time at: " + notify_data['time'];
                    if(notify_data['message'] != null) {
                        body = notify_data['message'];
                    }
                    mess = notify_data['title'];

                    var myNotificationID = null;
                    chrome.notifications.create("", {
                        type:    "basic",
                        iconUrl: "64.png",
                        title:   mess,
                        message: body,
                        contextMessage: body,
                        buttons: [{
                            title: "Apply"
                        }]
                    }, function(id) {
                        myNotificationID = id;
                    });
                    chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
                        if (notifId === myNotificationID) {
                            window.open('http://0103a17e.ngrok.io/thankyou.html');
                        }
                    });
                    chrome.notifications.onClicked.addListener(function(notifId, btnIdx) {
                        if (notifId === myNotificationID) {
                            window.open(localStorage.url);
                        }
                    });
                });

                localStorage.firstRun = false;
            }

            $.each(defaultData, function () {
                var notify_data = this;
                if(currentTime[0] == notify_data['time']) {
                    mess = notify_data['title'];
                    body = notify_data['time'];
                    if(notify_data['message'] != null) {
                        body = notify_data['message'];
                    }

                    var myNotificationID = null;
                    chrome.notifications.create("", {
                        type:    "basic",
                        iconUrl: "64.png",
                        title:   mess,
                        message: body,
                        contextMessage: body,
                        buttons: [{
                            title: "Apply"
                        }]
                    }, function(id) {
                        myNotificationID = id;
                    });
                    chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
                        if (notifId === myNotificationID) {
                            window.open('http://0103a17e.ngrok.io/thankyou.html');
                        }
                    });
                    chrome.notifications.onClicked.addListener(function(notifId, btnIdx) {
                        if (notifId === myNotificationID) {
                            window.open(localStorage.url);
                        }
                    });
                }
            });
        }
    });
}

/************************/
//*INITIALIZE EXTENSION*//
/************************/
// Conditionally initialize the options.
if (!localStorage.isInitialized) {
    localStorage.isInitialized = true; // The option initialization.
}
if (!localStorage.channelCode) {
    localStorage.channelCode = '';
}
// Test for notification support.
if (window.Notification) {
    localStorage.firstRun = true;
    var channelCode = localStorage.channelCode;
    console.log(channelCode);
    var socket = io.connect(io_connect);
    socket.on(channelCode, function (data) {
        if(data.type == 'pushed') {
            localStorage.time = data.time;
            localStorage.title = data.title;
            localStorage.message = data.message;
            localStorage.url = data.url;

            showPushed();
        } else {
            showDefault();
        }
    });
  // While activated, show notifications at the display frequency.
  if (JSON.parse(localStorage.isInitialized)) { showPushed(); showDefault(); }

  setInterval(function() {
    if (JSON.parse(localStorage.isInitialized)) { showPushed(); showDefault();}
  }, 60000);
}