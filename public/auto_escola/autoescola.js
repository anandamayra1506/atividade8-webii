import { checkLogin } from "../login/login.js";
import { urlBaseAPI, urlBaseFront } from "../url/base.js";

let dados = [];

function desenhaTabela() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const btEx = document.createElement('button');
        const btEd = document.createElement('button');

        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');

        btEx.innerText = '-';
        btEx.setAttribute('data-id', dados[i].id);
        btEx.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            alternaModal();
            enviaDadosParaDelecao(id);
        });

        btEd.innerText = '.';
        btEd.setAttribute('data-index', i);
        btEd.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            alternaModal();
            preencheFormParaEdicao(index);
        });

        td1.innerText = dados[i].id;
        td2.innerText = dados[i].nome;
        td3.innerText = dados[i].endereco;
        td4.innerText = dados[i].telefone;
        td5.innerText = dados[i].site;
        td6.innerText = dados[i].email;

        td7.append(btEd, btEx);

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        tbody.append(tr);
    }
}
// function carregaAutoescolas() {
//     const opcoes = {
//         method: 'get',
//         credentials: 'include'
//     };
//     fetch(`${urlBaseAPI}/autoescolas`, opcoes)
//         .then((res) => {
//             //console.log(res);
//             return res.json();
//         })
//         .then((json) => {
//             const select = document.getElementById('VeiculoId');
//             select.innerHTML = '';
//             for (let i = 0; i < json.length; i++) {
//                 const option = document.createElement('option');
//                 option.innerText = json[i].nome + ' ' + json[i].endereco + ' ' + json[i].telefone + ' ' + json[i].site + ' ' + 
//                 json[i].email;
//                 option.value = json[i].id;
//                 select.append(option);                
//             }            
//         })
// }
function carregaDados() {
    const opcoes = {
        method: 'get',
        credentials: 'include'
    };
    fetch(`${urlBaseAPI}/autoescolas`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            //alert(json);
            dados = json;
            desenhaTabela();
        })
}

function enviaDadosParaCadastro() {
    const dados = new FormData(document.querySelector('form'));
    const opcoes = {
        method: 'post',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/autoescolas`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Auto Escola ' + json.modelo + ' cadastrada!');
            carregaDados();
        })
    alternaModal();
}

function enviaDadosParaDelecao(id) {
    const dados = new FormData();
    dados.append('id', id);
    const opcoes = {
        method: 'delete',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/autoescolas`, opcoes)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Auto Escola ' + json.modelo + ' deletada com sucesso!');
            carregaDados();
        })
    alternaModal();
}

function preencheFormParaEdicao(index) {
    document.querySelector('#id').value = dados[index].id;
    document.querySelector('#nome').value = dados[index].nome;
    document.querySelector('#endereco').value = dados[index].endereco;
    document.querySelector('#telefone').value = dados[index].telefone;
    document.querySelector('#site').value = dados[index].site;
    document.querySelector('#email').value = dados[index].email;
}

function enviaDadosParaEdicao() {
    const dados = new FormData(document.querySelector('form'));
    const opcoes = {
        method: 'put',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/autoescolas`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Auto Escola ' + json.modelo + ' alterada com sucesso!');
            carregaDados();
        })
    alternaModal();
}

function alternaModal() {
    document.querySelector('#modal').classList.toggle('mostrarModal');
}

document.querySelector('form button').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('#id').value) {
        enviaDadosParaEdicao();
    } else {
        enviaDadosParaCadastro();
    }
    document.querySelector('#id').value = '';
    e.target.parentNode.reset();
});

document.querySelector('#btNovo').addEventListener('click', alternaModal);
window.addEventListener('load', () => {
    checkLogin()
    .then((res)=>{
        if(res){
            // carregaAutoescolas();
            carregaDados();
        } else {
            window.location = `${urlBaseFront}/login/login.html`;
        }
    })    
});

