// =====================================================
// KOBE ORIENTAL - SISTEMA DE CADASTRO E LOGIN
// =====================================================


// =====================================================
// CADASTRO
// =====================================================

const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {

    cadastroForm.addEventListener("submit", function (event) {

        // Impede o formulário de recarregar a página
        event.preventDefault();


        // =================================================
        // PEGA OS DADOS DO FORMULÁRIO
        // =================================================

        const nome = document.getElementById("nome").value.trim();

        const email = document
            .getElementById("emailCadastro")
            .value
            .trim()
            .toLowerCase();

        const telefone = document
            .getElementById("telefone")
            .value
            .trim();

        const senha = document
            .getElementById("senhaCadastro")
            .value;

        const confirmarSenha = document
            .getElementById("confirmarSenha")
            .value;


        // =================================================
        // VALIDAÇÕES
        // =================================================

        // Verifica se todos os campos foram preenchidos

        if (
            !nome ||
            !email ||
            !telefone ||
            !senha ||
            !confirmarSenha
        ) {

            alert("Por favor, preencha todos os campos.");

            return;
        }


        // Verifica tamanho da senha

        if (senha.length < 6) {

            alert(
                "A senha precisa ter pelo menos 6 caracteres."
            );

            return;
        }


        // Verifica se as senhas são iguais

        if (senha !== confirmarSenha) {

            alert(
                "As senhas não são iguais!"
            );

            return;
        }


        // =================================================
        // VERIFICA SE JÁ EXISTE UMA CONTA
        // =================================================

        const usuarioExistente =
            localStorage.getItem("usuarioKobe");


        if (usuarioExistente) {

            const usuario = JSON.parse(usuarioExistente);


            if (usuario.email === email) {

                alert(
                    "Este e-mail já está cadastrado!"
                );

                return;
            }
        }


        // =================================================
        // CRIA O USUÁRIO
        // =================================================

        const usuario = {

            nome: nome,

            email: email,

            telefone: telefone,

            senha: senha

        };


        // =================================================
        // SALVA NO NAVEGADOR
        // =================================================

        localStorage.setItem(
            "usuarioKobe",
            JSON.stringify(usuario)
        );


        // =================================================
        // MENSAGEM DE SUCESSO
        // =================================================

        alert(
            `Cadastro realizado com sucesso, ${nome}! 🍣`
        );


        // Vai para a tela de login

        window.location.href = "login.html";

    });

}



// =====================================================
// LOGIN
// =====================================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        // Impede o formulário de recarregar a página
        event.preventDefault();


        // =================================================
        // PEGA OS DADOS DO LOGIN
        // =================================================

        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const senha =
            document.getElementById("senha").value;


        // =================================================
        // VERIFICA SE OS CAMPOS ESTÃO PREENCHIDOS
        // =================================================

        if (!email || !senha) {

            alert(
                "Digite seu e-mail e sua senha."
            );

            return;
        }


        // =================================================
        // BUSCA O USUÁRIO SALVO
        // =================================================

        const usuarioSalvo =
            localStorage.getItem("usuarioKobe");


        // Se não existir usuário

        if (!usuarioSalvo) {

            alert(
                "Nenhuma conta encontrada. Faça seu cadastro primeiro."
            );

            return;
        }


        // =================================================
        // CONVERTE OS DADOS
        // =================================================

        const usuario =
            JSON.parse(usuarioSalvo);


        // =================================================
        // VERIFICA E-MAIL E SENHA
        // =================================================

        if (
            email === usuario.email &&
            senha === usuario.senha
        ) {

            // Login realizado

            alert(
                `Bem-vindo ao Kobe Oriental, ${usuario.nome}! 🍣`
            );


            // Salva informação de login

            localStorage.setItem(
                "usuarioLogado",
                "true"
            );


            // Salva o nome do usuário logado

            localStorage.setItem(
                "nomeUsuario",
                usuario.nome
            );


            // Volta para a página inicial

            window.location.href =
                "index.html";


        } else {

            // Login incorreto

            alert(
                "E-mail ou senha incorretos!"
            );

        }

    });

}



// =====================================================
// LOGOUT
// =====================================================

function logout() {

    // Remove o status de login

    localStorage.removeItem(
        "usuarioLogado"
    );


    // Remove o nome do usuário

    localStorage.removeItem(
        "nomeUsuario"
    );


    // Mensagem

    alert(
        "Você saiu da sua conta."
    );


    // Volta para a página inicial

    window.location.href =
        "index.html";
}



// =====================================================
// MOSTRAR USUÁRIO LOGADO
// =====================================================

const usuarioLogado =
    localStorage.getItem("usuarioLogado");

const nomeUsuario =
    localStorage.getItem("nomeUsuario");


if (usuarioLogado === "true" && nomeUsuario) {

    const elementoUsuario =
        document.getElementById("nomeUsuario");

    if (elementoUsuario) {

        elementoUsuario.textContent =
            `Ola, ${nomeUsuario}!`;

    }

}



// =====================================================
// CARRINHO
// =====================================================

let carrinho = [];


function adicionarCarrinho(nome, preco) {

    const produto = {

        nome: nome,

        preco: preco

    };


    carrinho.push(produto);


    atualizarCarrinho();


    alert(
        `${nome} foi adicionado ao carrinho! 🍣`
    );
}



function atualizarCarrinho() {

    const contador =
        document.getElementById("cart-count");


    if (contador) {

        contador.textContent =
            carrinho.length;

    }

}

