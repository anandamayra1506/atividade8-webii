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
        td2.innerText = dados[i].cliente;
        td3.innerText = dados[i].veiculo.quantidade + ' ' + dados[i].veiculo.modelo + ' ' + dados[i].veiculo.fabricante + ' ' + dados[i].veiculo.preco + ' ' +
        dados[i].veiculo.ano + ' ' + dados[i].veiculo.placa + ' ' + dados[i].veiculo.km + ' ' + dados[i].veiculo.cor + ' ' + dados[i].veiculo.descricao;
        td4.innerText = dados[i].inicio;
        td5.innerText = dados[i].fim;
        td6.append(btEd, btEx);

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    }
}

function carregaVeiculos() {
    const opcoes = {
        method: 'get',
        credentials: 'include'
    };
    fetch(`${urlBaseAPI}/veiculos`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            //alert(json);
            const select = document.getElementById('VeiculoId');
            select.innerHTML = '';
            for (let i = 0; i < json.length; i++) {
                const option = document.createElement('option');
                option.innerText = json[i].quantidade + ' ' + json[i].modelo + ' ' + json[i].fabricante + ' ' + json[i].preco + ' ' + 
                json[i].ano + ' ' + json[i].placa + ' ' + json[i].km + ' ' + json[i].cor + ' ' + json[i].descricao;
                option.value = json[i].id;
                select.append(option);                
            }            
        })
}
function carregaDados() {
    const opcoes = {
        method: 'get',
        credentials: 'include'
    };
    fetch(`${urlBaseAPI}/locacoes`, opcoes)
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
    fetch(`${urlBaseAPI}/locacoes`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Locação cadastrada!');
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
    fetch(`${urlBaseAPI}/locacoes`, opcoes)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Locação deletada!');
            carregaDados();
        })
    alternaModal();
}

function preencheFormParaEdicao(index) {
    document.querySelector('#id').value = dados[index].id;
    document.querySelector('#cliente').value = dados[index].cliente;
    document.querySelector('#VeiculoId').value = dados[index].VeiculoId;
    document.querySelector('#inicio').value = dados[index].inicio;
    document.querySelector('#fim').value = dados[index].fim;
}

function enviaDadosParaEdicao() {
    const dados = new FormData(document.querySelector('form'));
    const opcoes = {
        method: 'put',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/locacoes`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Locação alterada!');
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
            carregaVeiculos();
            carregaDados();
        } else {
            window.location = `${urlBaseFront}/login/login.html`;
        }
    })    
});

