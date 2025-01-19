//Factory functions
function criaPessoa(nome, sobrenome, idade, peso, altura) {
    return {
        nome,
        idade,
        sobrenome,
        especie: "humano",
        fala: function() {
            console.log(`Olá! Meu nome é ${this.nome}. Eu sou um ${this.especie}`);
        },
        //Getter
        get imc() {
            return (peso/(altura ^ 2)).toFixed(2);
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(value) {
            value = value.split(" ");
            this.nome = value.shift();
            this.sobrenome = value.join(' ')
        },
    }
}

const p1 = criaPessoa('João', 17, 82, 1.8);
p1.nomeCompleto = "João Aquino Ribeiro"
console.log(p1.sobrenome);
p1.fala();
