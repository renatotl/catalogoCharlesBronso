require("dotenv").config();// foi necessário instalar o npm i dotenv para o heroko pegando as configurações do DOTENV e chamando pro projeto
const { render } = require("ejs");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");//importando uma lib do proprio express chamada path  essencial link o frontend com o backend
const port = process.env.PORT || 3000; //esse code é pro heroko

app.use(express.urlencoded())//navegador envia as informações pelo json e essas informçãoes vem do body pega as informações que o cliente digitou no unput e envia pelo json 
app.set("view engine", "ejs"); //motor engine da view é o ejs essencial
app.use(express.static(path.join(__dirname,"public")));//dizendo ao express a pasta que irá guardar esses arquivos   ecencial  express estatico path se junta 
// O EXPRESS eu guardei todos os arquivos em public por isso não precisou ../ na hora de linkar

//app.use faz o nosso app usar os arquivos estáticos html e JS para front esses arquivos estáticos estão em path.join para juntar __dirname nome da pasta principal(,) nome da past a que é public
//A gora nosso servidor sabe onta está os arquivos estáticos


const filmes =[//um arrey de objetos
  { //objetos são separados por vírgula

    id: 1,
    nome: "Desejo de Matar",
    descricao: "Em Nova York vive Paul Kersey (Charles Bronson), um homem pacífico que tem sua vida destroçada quando três marginais invadem seu apartamento, estupram sua filha, que fica em estado gravíssimo, e matam Joanna, sua mulher. Após uma viagem a uma cidade do Arizona na qual todos andam armados e a criminalidade é mínima, Kersey decide eliminar qualquer um que o ameace, pois a polícia se mostra incapaz de encontrar os culpados. Assim Kersey se arma e começa a patrulhar as ruas, matando assassinos e ladrões e ficando obcecado em fazer justiça. Paralelamente ele é caçado por Frank Ochoa (Vincent Gardenia), um detetive da polícia que deseja encontrar o homem que está fazendo o trabalho dos tiras.",
    tipo: "Suspense" ,
    imagem: "img/desejo.jpg",
    
       },
       { 
       id: 2,
       nome: "Era uma Vez no Oeste",
       descricao: "Em virtude das terras que possuía serem futuramente a rota da estrada de ferro, um pai e todos os filhos são brutalmente assassinados por um matador profissional. Entretanto, ninguém sabia que ele, viúvo há seis anos, tinha se casado com uma outra mulher, de Nova Orleans, que passa ser a dona do local e recebe a proteção de um hábil atirador, que tem contas a ajustar com o frio matador.",
       tipo: "Suspense" ,
       imagem: "img/oeste.jpg",
       
          },
          { 
            id: 3,
            nome: "Lutador de Rua",
            descricao: "Durante a Grande Depressão, Chaney luta boxe para sobreviver. Speed, um ávido apostador, reconhece seu talento e torna-se seu empresário. Eles contratam Poe, que será responsável em cuidar dos ferimentos dos lutadores; Speed pede dinheiro emprestado de gangsters para apostar na luta de Chaney; ele vence, mas Speed joga, perde sua parte e continua com dívidas. No fim, um empresário rival chamado Gandi, compra a dívida de Speed e força Chaney a lutar contra ele.",
            tipo: "Suspense" ,
            imagem: "img/lutador.jpg",
            
               },
    ]

    let filme = undefined;

    app.get("/", (req, res) => {

       
        
        res.render("index", {filmes});// É MUITO IMPORTANDO COLOCAR O elemento ENTRE CHAVES COMO JSON SÓ ASSIM A NOSSA RESPOSTA É ENVIADA foi esse code que consegui imprimir na tela está renderizando index na pasta index
      });

      app.post("/add", (req,res) =>{
        const filme = req.body;// o que vem da requisição .body
        message = `Filme, cadastrado com sucesso`;
        //todo filme add já recebe um id automático
        filme.id = filmes.length + 1;
        //no code abaixo que pegamos as informações e inserimos em filmes
        filmes.push(filme);
        res.redirect("/#cards")// retorna pra rota "/" que logo em seguida renderiza o index 
     });

     //rota responsável por caastrar
     app.get("/cadastrar", (req,res) =>{
       res.render("index2", {})
      

     })

     // rota responável pela pg sobre o ator
     app.get("/sobre", (req,res) =>{
        res.render("index3", {})
       
 
      })
//rota responsável por mostrar a lista de filmes
      app.get("/filmess", (req,res) =>{
        res.render("index4", {filmes})
       
 
      })

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));//ouvindo a porta 3000, rodando nessa porta