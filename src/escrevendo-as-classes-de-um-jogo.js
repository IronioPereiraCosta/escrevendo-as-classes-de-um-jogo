class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque indefinido";
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);

    }

}

//Criar heróis
const mago = new heroi("The Witcher", 30, "mago");
const guerreiro = new heroi("Shenna", 28, "guerreiro");
const monge = new heroi("João", 54, "monge");
const ninja = new heroi("Scorpion", 25, "ninja");

//ataques
mago.atacar(); // "O mago The Witvher atacou usando magia"
guerreiro.atacar(); // "O guerreiro Shenna atacou usando espada"
monge.atacar(); // "O monge João atacou usando artes marciais"
ninja.atacar(); // "O ninja Scorpion atacou usando shuriken"

