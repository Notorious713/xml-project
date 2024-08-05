function loadXML(xmlFile, elementId) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayXML(this, elementId);
        }
    };
    xhttp.open("GET", xmlFile, true);
    xhttp.send();
}

function displayXML(xml, elementId) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName(xmlDoc.documentElement.nodeName)[0].children;
    let html = "<h2>Content</h2><ul>";
    
    for (let i = 0; i < x.length; i++) {
        const name = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        const price = x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
        const description = x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        
        html += `<li><strong>${name}</strong> - ${price}<br>${description}</li>`;
    }
    
    html += "</ul>";
    document.getElementById(elementId).innerHTML = html;
}
