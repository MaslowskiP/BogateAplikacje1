var app = {
    sendSms: function() {
        var number = document.getElementById('numer').value;
        var message = document.getElementById('wiadomosc').value;
        console.log("number=" + number + ", message= " + message);

        var options = {replaceLineBreaks: false, android: { intent: 'INTENT'} };

        var success = function () { alert('Wiadomość wysłana'); };
        var error = function (e) { alert('Błąd wysyłania wiadomości: ' + e); };
        sms.send(number, message, options, success, error);
    }
};