class Conta {
    constructor() {
        const [email, senha, rSenha] = getData()
        this.email = email
        this.senha = senha
        this.rSenha = rSenha

    }

    verify() {
        const vazio = this.verifyEmpty()
        const senhaFraca = this.verifyFraca()
        if (!vazio && !senhaFraca) {
            return true
        } else {
            return false
        }

    }

    verifyEmpty() {
        let array = [this.email, this.senha, this.rSenha]
        let teste = false

        array.forEach(el => {
            if (el === undefined ||
                el === null ||
                el === '') {
                teste = true
            }
        })

        return teste
    }

    verifyFraca(obedeceParametros = () => {
        return this.senha === this.rSenha &&
            this.senha.length >= 6
    }) {

        if (!obedeceParametros()) {
            return true
        } else {
            return false
        }

    }

}

class Bd {
    save({ email: e, senha: s }) {
        let id = localStorage.getItem('id')
            ? localStorage.getItem('id')
            : 1

        localStorage.setItem(`conta${id}`, JSON.stringify({ e, s, 'cart': {} }))
        localStorage.setItem('id', ++id)
    }

    verifyAccounts({ email }) {
        let id = localStorage.getItem('id')
            ? localStorage.getItem('id')
            : 1

        for (let i = 1; i < id; i++) {
            let emailSis = JSON.parse(localStorage.getItem(`conta${i}`)).e
            if (email === emailSis) {
                return false
            }
        }
        return true
    }
}

document.querySelector('#register-btn').addEventListener('click', () => {
    const conta = new Conta()
    const bd = new Bd()
    if (conta.verify()) {
        if (bd.verifyAccounts(conta)) {
            bd.save(conta)
            limparInputs(3)
            // Alerta Personalizado
            Swal.fire({
                icon: 'success',
                title: 'Cadastro realizado com sucesso',
                confirmButtonColor: "#DD6B55",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }

            })
            setTimeout(function () {
                window.location.href = 'login-page.html'

            }, 2000)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'já existe uma conta com esse e-mail',
                confirmButtonColor: "#DD6B55"
            })
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha deve possuir no mínimo 6 caracteres e as senhas devem ser iguais',
            confirmButtonColor: "#DD6B55"
        })
        limparInputs(2)
    }


})

if (document.getElementById('modal_desc_button')) {
    document.querySelector('#modal_desc_button').addEventListener('click', () => {
        fecharDialog()
    })
}

const getData = () => [document.getElementById('email').value,
document.getElementById('senha').value,
document.getElementById('rSenha').value
]

const limparInputs = (num) => {
    switch (num) {
        case 3:
            document.getElementById('email').value = ''
        case 2:
            document.getElementById('senha').value = ''
            document.getElementById('rSenha').value = ''
            break;
    }
}

document.getElementById('toggleSenha').addEventListener('click', function () {
    const senhaInput = document.getElementById('senha');
    const senhaIcon = this.querySelector('i');
    
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        senhaIcon.classList.remove('fa-eye-slash');
        senhaIcon.classList.add('fa-eye');
    } else {
        senhaInput.type = 'password';
        senhaIcon.classList.remove('fa-eye');
        senhaIcon.classList.add('fa-eye-slash');
    }
});







