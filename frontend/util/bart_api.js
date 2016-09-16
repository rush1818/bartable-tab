import $ from 'jquery';

export const fetchAllStationsAPI = (success) => {
  if (!success){
    success = (data) => {
      let jsonData = xmlToJson(data);
      return jsonData;
    };
  }

  $.ajax({
    method: 'GET',
    url: "http://api.bart.gov/api/stn.aspx?cmd=stns&key=ZH44-549V-929T-DWE9",
    success
  });
};



export const xmlToJson = (xml) => {

	// Create the return object
	let obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (let j = 0; j < xml.attributes.length; j++) {
				let attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(let i = 0; i < xml.childNodes.length; i++) {
			let item = xml.childNodes.item(i);
			let nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					let old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
