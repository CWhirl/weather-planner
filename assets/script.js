var apiKey = "ae9965790c629f76714e5b5f971e8578";
var userIn = $("#username").val();
var data;

$('.btn').on('click', function (event) {
    event.preventDefault();
    userIn = $("#username").val();
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
        return;
    }

    httpRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${userIn}&appid=${apiKey}&units=imperial`, true);
    httpRequest.send();

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {

            if (httpRequest.status === 200) {
            console.log(JSON.parse(httpRequest.responseText));
            data = JSON.parse(httpRequest.responseText);
            $(`<p>Temperature:${data.main.temp} °F</p>`).appendTo($('#currentDay'));
            $(`<p>Humidity:${data.main.humidity}%</p>`).appendTo($('#currentDay'));
            $(`<p>Wind Speed:${data.wind.speed}MPH</p>`).appendTo($('#currentDay'));
            $(`<p>${data.weather[0].icon}</p>`).appendTo($('#currentDay'));
            $(`<div>id="uvIndex</div>`).appendTo($('#currentDay'));
            var uv = "";
            $(`<p>UV Index:</p>`).appendTo($('#uvIndex'));
            $(`<p>${uv}</p>`).appendTo($('#uvIndex'));
            if (uv <= 3) {
                //low
            } else if (uv <= 5) {
                // moderate
            } else {
                // high
            }

            httpRequest2 = new XMLHttpRequest();
            if (!httpRequest2) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                    return;
            }
            
            httpRequest2.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${userIn}&appid=${apiKey}`, true);
            httpRequest2.send();

            if (httpRequest2.status === 200) {
                console.log(httpRequest2.responseText);
                data2 = httpRequest2.responseText;

                var dayArray5 = [];
                // for (const Index in dayArray5) {
                //     //date
                //     $(`<p>${}</p>`).appendTo($('#currentDay'));
                //     //icon
                //     $(`<p>${}</p>`).appendTo($('#currentDay'));
                //     //temp
                //     $(`<p>Temp:${}</p>`).appendTo($('#currentDay'));
                //     //humidity
                //     $(`<p>Humidity:${}</p>`).appendTo($('#currentDay'));
                // }
            


            } else {
                console.log('There was a problem with the second request.');
            }


            } else {
            console.log('There was a problem with the request.');
            return;
            }
        }
    };

    



});
