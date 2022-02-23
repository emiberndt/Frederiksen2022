var password = "whoopwhoop";

function passcheck() {

    if (document.getElementById('whoopwhoop').value != password) {
        alert('Wrong Password, Try Again');
        return false;
    }
    if (document.getElementById('whoopwhoop').value == password) {
        alert('Correct Password, You Are Granted Access To The Party Of The Year!');
    }
}