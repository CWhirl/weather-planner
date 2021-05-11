var apiKey = "ae9965790c629f76714e5b5f971e8578";
var userIn = $("#username").val();
var data;

if(localStorage.getItem)

$('.btn').on('click', function (event) {
    event.preventDefault();
    userIn = $("#username").val();
    httpRequest = new XMLHttpRequest();


    localStorage.setItem("lastSearch", userIn);

    if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
        return;
    }

    httpRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${userIn}&appid=${apiKey}&units=imperial`, true);
    httpRequest.send();

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {

            if (httpRequest.status === 200) {
            data = JSON.parse(httpRequest.responseText);
            $(`<p>Temperature:${data.main.temp} °F</p>`).appendTo($('#repo-search-term'));
            $(`<p>Humidity:${data.main.humidity}%</p>`).appendTo($('#repo-search-term'));
            $(`<p>Wind Speed:${data.wind.speed}MPH</p>`).appendTo($('#repo-search-term'));
            $(`<img id="wicon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">`).appendTo($('#repo-search-term'));

            httpsRequest2 = new XMLHttpRequest();
            if (!httpsRequest2) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                    return;
            }
            
            httpsRequest2.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${userIn}&appid=${apiKey}&cnt=5&units=imperial`, true);
            httpsRequest2.send();

            httpsRequest2.onreadystatechange = function(){
                if (httpsRequest2.readyState === XMLHttpRequest.DONE) {
                    if (httpsRequest2.status === 200) {
                        console.log(JSON.parse(httpsRequest2.responseText));
                        data2 = JSON.parse(httpsRequest2.responseText);
        
                        for (const index in data2.list) {

                            $(`<tr>
                            <th scope="row">${data2.list[index].dt_txt}</th>
                            <td>${data2.list[index].main.humidity}%</td>
                            <td>${data2.list[index].main.temp}°F</td>
                            <td><img id="wicon" src="http://openweathermap.org/img/w/${data2.list[index].weather[0].icon}.png" alt="Weather icon"></td>
                          </tr>`).appendTo($('#tbody'));

                        }
                    
        
        
                    } else {
                        console.log('There was a problem with the second request.');
                    }
                }
            }

            


            } else {
            console.log('There was a problem with the request.');
            return;
            }
        }
    };
});
