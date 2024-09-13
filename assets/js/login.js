class Conta {
    verify() {
        const [email, senha] = getData();
        const id = localStorage.getItem('id');

        for (let i = 1; i < id; i++) {
            const { e: emailSis, s: senhaSis } = JSON.parse(localStorage.getItem(`conta${i}`));

            if (email === emailSis && senha === senhaSis) {
                this.approved(email);
                break;
            }

            if (i === id - 1) {
                this.disapproved();
            }
        }
    }

    // Sistema de verificação com Alerta personalizado
    approved(email) {
        Swal.fire({
            icon: 'success',
            title: 'Login aprovado, você será redirecionado(a) à tela inicial',
            showConfirmButton: false,
            timer: 1500,
            confirmButtonColor: "#DD6B55"
        });
        localStorage.setItem('userLogado', email);

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1500);
    }

    disapproved() {
        limparInput();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário ou Senha inválidos, favor tentar novamente.',
            confirmButtonColor: "#DD6B55"
        });
    }
}

document.querySelector('#login-btn').addEventListener('click', () => {
    const conta = new Conta();
    conta.verify();
});

// Funções
const getData = () => [
    document.querySelector('#email').value,
    document.querySelector('#senha').value
];

const limparInput = () => {
    document.querySelector('#senha').value = '';
};

// Validação de e-mail
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const loginBtn = document.querySelector('#login-btn');
const emailError = document.querySelector('#email-error');

// Função para validar o formato do e-mail
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Função para verificar se os dois campos (e-mail e senha) estão válidos
const validarCampos = () => {
    if (validarEmail(emailInput.value) && senhaInput.value.trim() !== '') {
        loginBtn.disabled = false; // Habilita o botão de login
        loginBtn.classList.remove('disabled'); // Remove o estilo de desabilitado
    } else {
        loginBtn.disabled = true; // Desabilita o botão de login
        loginBtn.classList.add('disabled'); // Aplica o estilo de desabilitado
    }
};

// Verifica se o e-mail está no formato correto quando o usuário sai do campo (blur)
emailInput.addEventListener('blur', () => {
    if (!validarEmail(emailInput.value)) {
        emailError.style.display = 'block'; // Mostra a mensagem de erro
    }
});

// Esconde a mensagem de erro assim que o e-mail estiver correto durante a digitação (input)
emailInput.addEventListener('input', () => {
    if (validarEmail(emailInput.value)) {
        emailError.style.display = 'none'; // Esconde a mensagem de erro
    }
    validarCampos(); // Verifica se ambos os campos estão preenchidos corretamente
});

// Verifica se a senha está preenchida durante a digitação (input)
senhaInput.addEventListener('input', () => {
    validarCampos(); // Verifica se ambos os campos estão preenchidos corretamente
});


// Alternar visibilidade da senha
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
