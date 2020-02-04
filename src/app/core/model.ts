export class Cliente {
    id: number;
    nome: string;
    telefone: string;
    endereco: Endereco;
}

export class Endereco {
    logradouro: string;
    numero: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
}

export class Usuario {
    nome: string;
    email: string;
    senha: string;
}