function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var url = 'https://neuronawireless.com/images/agriculture.jpg';

    xhr.open('HEAD', url, true);
    xhr.send();

    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
          location.href = 'https://www.neuronawireless.com/'
        }
      }
    }
}


if (location.protocol != 'https:')
{
  location.href = 'https://www.neuronawireless.com/'
}
