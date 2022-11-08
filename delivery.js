

window.onload = deliveryForm;

function deliveryForm() {

    document.forms[0].onsubmit = function () {

        if(this.checkValidity()) {

            if (confirm("Confirm to submit this Delivery Form??")== 1) {
                var nameFirst = document.getElementById('nameBox1').value;
                var nameLast = document.getElementById('nameBox2').value;

                alert(nameFirst + nameLast + " , Your Delivery details have been saved.");
                return true;
            } else {
                return false;
            }
        }
    }
}