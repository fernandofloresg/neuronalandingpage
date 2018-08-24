function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var url = 'https:' + window.location.href.substring(window.location.protocol.length);

    xhr.open('HEAD', url, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
          location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
      }
    }
}

doesConnectionExist()
