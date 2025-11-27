"use strict";

function verificarSenha(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            
            const senhaCorreta = "minhasenha123";
            const input = document.getElementById('passwordInput');
            
            if (input.value === senhaCorreta) {
                window.location.href = "pagina-destino.html";
                return true;
            } else {
                alert("Senha incorreta!");
                input.value = "";
                return false;
            }
        }