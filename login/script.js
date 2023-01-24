var email = document.querySelector('input#email')
        var pass = document.querySelector('input#pass')
        var btn = document.querySelector('.btn-login')
        var eye = document.querySelector('#reveal')

        function reveal() {
            inputTypeIsPassoword = pass.type == "password"

            if(inputTypeIsPassoword) {
                showPassword()
            } else {
                hidePassword()
            }
        }

        function showPassword() {
            pass.setAttribute("type", "text")
            eye.src = "../login/img/open.svg"
        }

        function hidePassword() {
            pass.setAttribute("type", "password")
            eye.src = "../login/img/close.svg"
        }

        function Verificar() {
            if (email.value == 0 || pass.value == 0) {
                alert('[ERRO], Campo inválido!')
            } else {
                alert('Sucesso!')
            }
        }