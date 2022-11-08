

window.onload = feedbackForm;

function feedbackForm() {

    document.forms[0].onsubmit = function () {

        if(this.checkValidity()) {

            if (confirm("Confirm to submit this Feedback Form??")== 1) {
                var nameFirst = document.getElementById('nameBox1').value;
                var nameLast = document.getElementById('nameBox2').value;

                alert(nameFirst + nameLast + " , your Feedback Form have been successfully submitted.");
                return true;
            } else {
                return false;
            }
        }
    }
}



function submitFunction() {
    document.forms[1].onsubmit = function () {

        if(this.checkValidity()) {

            if (confirm("Confirm to submit this Rating Form??")== 1) {
                document.open();
                document.write("<h1>Thank You.</h1>");
                document.body.style.color ="Blue";
                document.body.style.fontSize ="30px";
                document.body.style.backgroundColor ="rgb(105, 211, 237)";
                document.close();
            } else {
                return false;
            }
        }

    }
}










