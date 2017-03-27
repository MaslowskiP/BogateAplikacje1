function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function authorInfo() {
	
	info = 'Hej moje imie to: Piotrek\nTo jest moja druga ap[likacja.';
	
	navigator.notification.alert(info);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Nieznane połączenie';
    states[Connection.ETHERNET] = 'Połaczenie Ethernet';
    states[Connection.WIFI]     = 'Połączenie WiFi';
    states[Connection.CELL_2G]  = 'Telefoniczna sieć 2G';
    states[Connection.CELL_3G]  = 'Telefoniczna sieć 3G';
    states[Connection.CELL_4G]  = 'Telefoniczna sieć 4G';
    states[Connection.CELL]     = 'Telefoniczna sieć';
    states[Connection.NONE]     = 'Brak połączenia';

    navigator.notification.alert('Connection type: ' + states[networkState]);
}