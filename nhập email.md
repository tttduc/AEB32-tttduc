const EMAIL =
            /^(?![-_.+])([a-zA-Z0-9-_.+](?![-_.+]{2,}))+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
elm.value = elm.value.replace(/[0-9]/g, "")
            elm.value = elm.value.replace(/[^\d]/g, "")
if (EMAIL.test(elm.value)) {
                document.getElementById('error').innerHTML = ''
            } else {
                document.getElementById('error').innerHTML = 'yeu cau nhap lai email'
            }