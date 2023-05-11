const mongoose = require('mongoose');

const CadastroModelo = mongoose.Schema(
    {
        nome:{
            type: String,
            required: [true,'Insira um nome']
        },
        email:{
            type: String,
            required: [true,'Insira o endereço de email']
        },
        endereco:{
            type: String,
            required: [true,'Insira o endereço']
        },
        complemento:{
            type: String,
            required: false
        },
        cidade:{
            type: String,
            required: false
        },
        cep:{
            type: String,
            required: [true,'Insira o CEP']
        },
        cpf:{
            type: String,
            required: [true,'Insira o CPF']
        }
        
    },
    {
        timestamps: true
    }
)

const Cadastro = mongoose.model('Cadastro',CadastroModelo);
module.exports = Cadastro;