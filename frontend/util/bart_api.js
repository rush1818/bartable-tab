/*globals chrome*/
import $ from 'jquery';
const bartKey = 'ZH44-549V-929T-DWE9';
window.$ = $;

export const fetchAllStationsAPI = (success) => {
  if (!success){
    success = (data) => {
      let jsonData = xmlToJson(data);
      return jsonData;
    };
  }

  $.ajax({
    method: 'GET',
    url: `http://api.bart.gov/api/stn.aspx?cmd=stns&key=${bartKey}`,
    success
  });
};


export const fetchAllRoutesAPI = success => {
  $.ajax({
    url: `https://api.bart.gov/api/route.aspx?cmd=routes&key=${bartKey}`,
    method: 'GET',
    success
  });
};


export const fetchRouteDataAPI = (success, routeNo) => {
  $.ajax({
    url: `https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=${routeNo}&key=${bartKey}`,
    method: 'GET',
    success
  });
};

export const fetchRTDStationAPI = (success, station) => {
  $.ajax({
    url: `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${station}&key=${bartKey}`,
    method: 'GET',
    success
  });
};



export const fetchRouteScheduleAPI = (success, orig, dest) => {
  $.ajax({
    url: `http://api.bart.gov/api/sched.aspx?cmd=depart&orig=${orig}&dest=${dest}&date=now&b=0&a=4&key=${bartKey}`,
    method: 'GET',
    success
  });
};





// Chrome APIs



export const fetchAllStationsStorage = success => {
  chrome.storage.local.get('allStationsList', (data) => {
    if (data){
      success(data);
    }
  });
};

export const saveAllStationsStorage = (info) => {
  chrome.storage.local.set({'allStationsList': info }, () => {
    // Notify that we saved.
    console.log('Stations saved');
  });
};


export const fetchSavedSchedulesStorage = success => {
  chrome.storage.local.get('scheduleInfo', (data) => {
    return success(data);
  });
};



// Helpers

export const xmlToJson = (xml) => {
// https://davidwalsh.name/convert-xml-json
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
