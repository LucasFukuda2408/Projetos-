// =========================================
// CARRINHO
// =========================================

let carrinho = [];



function adicionarCarrinho(nome, preco) {

    carrinho.push({

        nome: nome,

        preco: preco

    });


    document.getElementById("cart-count").textContent =
        carrinho.length;


    alert(
        nome + " foi adicionado ao carrinho! 🍣"
    );

}



// =========================================
// CADASTRO
// =========================================

const cadastroForm =
    document.getElementById("cadastroForm");


if (cadastroForm) {


    cadastroForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome").value;


            const email =
                document.getElementById(
                    "emailCadastro"
                ).value;


            const telefone =
                document.getElementById(
                    "telefone"
                ).value;


            const senha =
                document.getElementById(
                    "senhaCadastro"
                ).value;


            const confirmarSenha =
                document.getElementById(
                    "confirmarSenha"
                ).value;



            // Verificar senha

            if (senha !== confirmarSenha) {

                alert(
                    "As senhas não são iguais!"
                );

                return;

            }



            // Criar usuário

            const usuario = {

                nome: nome,

                email: email,

                telefone: telefone,

                senha: senha

            };



            // Salvar no navegador

            localStorage.setItem(

                "usuarioKobe",

                JSON.stringify(usuario)

            );



            alert(
                "Cadastro realizado com sucesso! 🍣"
            );



            window.location.href =
                "login.html";

        }
    );

}



// =========================================
// LOGIN
// =========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {


    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "email"
                ).value;


            const senha =
                document.getElementById(
                    "senha"
                ).value;



            const usuarioSalvo =
                localStorage.getItem(
                    "usuarioKobe"
                );



            if (!usuarioSalvo) {

                alert(
                    "Você ainda não possui uma conta. Faça seu cadastro."
                );

                return;

            }



            const usuario =
                JSON.parse(usuarioSalvo);



            if (

                email === usuario.email &&

                senha === usuario.senha

            ) {


                localStorage.setItem(
                    "usuarioLogado",
                    "true"
                );


                alert(
                    "Login realizado com sucesso! 🍣"
                );


                window.location.href =
                    "index.html";


            } else {


                alert(
                    "E-mail ou senha incorretos!"
                );


            }

        }
    );

}

