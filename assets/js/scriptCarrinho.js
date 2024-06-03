
//objeto literal dos produtos que o site possui
const products = {
  0: {
    nome: 'Apple Iphone 11',
    desc: 'Muito Utilizado no seu dia a dia...',
    valor: 3320.0,
    img: '<img src="assets/img/projects/iphone.png">',
    qtd: 1
  },

  1: {
    nome: "Controle Xbox",
    desc: "Muito Utilizado em VideoGame, Pc...",
    valor: 290.0,
    img: '<img src="assets/img/projects/console.png">',
    qtd: 1
  },

  2: {
    nome: "Headset Gamer",
    desc: "Muito Utilizado para jogos de fps...",
    valor: 349.99,
    img: '<img src="assets/img/projects/headphone1.png">',
    qtd: 1
  },

  3: {
    nome: "Air Jordan",
    desc: "Muito Utilizado no seu dia dia...",
    valor: 329.99,
    img: '<img src="assets/img/projects/nike-jordan.png">',
    qtd: 1
  },

  4: {
    nome: "Xiaomi Mi Band",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 169.99,
    img: '<img src="assets/img/projects/relógio.png">',
    qtd: 1
  },

  5: {
    nome: "Nutriwhey",
    desc: "Muito Utilizado no seus treinos...",
    valor: 48.49,
    img: '<img src="assets/img/projects/whey.png">',
    qtd: 1
  },

  6: {
    nome: "Slant Summer",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 131.19,
    img: '<img src="assets/img/projects/tenis-masc.png">',
    qtd: 1
  },

  7: {
    nome: "Philco Smart TV",
    desc: "Muito Utilizado na sua casa...",
    valor: 1399.00,
    img: '<img src="assets/img/projects/Philco-Tv.png">',
    qtd: 1
  },

  8: {
    nome: "Alexa Echo Dot",
    desc: "Muito Utilizado no seu quarto...",
    valor: 379.05,
    img: '<img src="assets/img/projects/alexa.png">',
    qtd: 1
  },
  
  20: {
    nome: "Notebook HP",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 3149.10,
    img: '<img src="assets/img/pag-produtos/Notebook.png">',
    qtd: 1
  },
  21: {
    nome: "playstation-5",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 3998.90,
    img: '<img src="assets/img/pag-produtos/playstation-5_qjz1.png">',
    qtd: 1
  },
  22: {
    nome: "Pc Gamer Computador",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 2472.96,
    img: '<img src="assets/img/pag-produtos/Pc-Gamer-Computador-PNG.png">',
    qtd: 1
  },
  23: {
    nome: "Camera de Segurança",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 832.05,
    img: '<img src="assets/img/pag-produtos/Camera-De-Segurança.png">',
    qtd: 1
  },
  24: {
    nome: "Drone DJI FPV",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 1057.00,
    img: '<img src="assets/img/pag-produtos/Drone.png">',
    qtd: 1
  },
  25: {
    nome: "SMARTPHONE GAMER",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 9719.19,
    img: '<img src="assets/img/pag-produtos/smartphone-mobile.png">',
    qtd: 1
  },
  26: {
    nome: "Carregador Veicular",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 8307.31,
    img: '<img src="assets/img/pag-produtos/Carregador_Veicular.png">',
    qtd: 1
  },
  27: {
    nome: "Robô Aspirador de Pó",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 599.00,
    img: '<img src="assets/img/pag-produtos/robot_unee_side_1.png">',
    qtd: 1
  },

}

//gera o objeto do id clicado no site
class Product {
  constructor(id) {
    const { nome,
      desc,
      valor,
      img,
      qtd
    } = products[id]

    this.nome = nome
    this.desc = desc
    this.valor = valor
    this.img = img
    this.qtd = qtd
  }
}
document.querySelector('body').addEventListener('click', ({
  target: {
    dataset: {
      produtoid: id
    }
  }
}) => {
  if ((id >= 0) &&
    (id <= 100) && //Adicionando Quantidade de Produtos Que o site pode ter
    (id != '')) {

    if (localStorage.getItem('userLogado')) {
      let idUserLogado = getIdUser()


      const produto = new Product(id)

      let cart = {} //cria o carrinho
      if (Object.entries(JSON.parse(localStorage.getItem(`conta${idUserLogado}`))['cart']).length === 0) {
        cart[id] = produto 

      } else {
        cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart 
    

        let possui = false 

        Object.keys(cart).forEach(el => {
          if (el === id) {
            possui = true 
          }
        })

        if (!possui) { 
          cart[id] = produto
        } else {
          Swal.fire({
            title: produto.nome,
            text: 'produto ja foi adicionado no Carrinho',
            confirmButtonColor: "#DD6B55",

          })
        }

      }

      reajustarObjeto(cart)

      setarValores(idUserLogado)
    } else {
      window.location.href = 'login-page.html'
    }

  }
})

const formatarValorRS = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format((valor).toFixed(2))
}

const setText = texto => {
  document.querySelector('.cart-item').innerHTML = texto
}

const getText = (id, {
  nome,
  desc,
  valor,
  img,
  qtd
}) => {
  let texto = ` 

  <div id="item-estilizing" class="div${id}" >
  
    <header>
      
      <figure class="imageEfect" onclick='removerFromCart(${id})'>
        ${img}
        <div id="hoverEfectImage">
        <i class="fas fa-trash-alt"></i>
        </div>
      </figure>
      <figcaption>
        <h6>${nome} </h6>
        <p>${desc}</p>
      </figcaption>
    </header>
    <li>
      
        <button class="btn plus" onclick="adicionarQtd(${id}, ${qtd})"> + </button>
        <p> ${qtd} </p>
        <button class="btn minus" onclick="removerQtd(${id}, ${qtd})"> - </button>
      
    </li>
    <section>
      <p> ${formatarValorRS((valor * qtd * 0.9))} <br /> <span style='color: red;'>10% OFF</span></p>
    </section>
  </div>`

  return texto
}

const setTotal = (total) => document.querySelector('.total').innerHTML = total * 0.9 > 0
  ?
  `
  <h2>Subtotal: <b>${formatarValorRS((total * 0.9))}</b> </h2>
`
  :
  `
  <h2>Subtotal: NENHUM ITEM ESCOLHIDO </h2>
`
const getTotal = ({ valor, qtd }) => valor * qtd

const setNumeroProdutos = numero => document.querySelector('#cont-itens-carrinho').innerHTML = numero > 0 ? numero : ''

const getNumeroProdutos = obj => Object.keys(obj).length

const setarValores = (id) => {
  let idUserLogado = getIdUser()
  const cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart

  let texto = ''

  Object.entries(cart).forEach(el => texto += getText(el[0], el[1]))

  let total = 0

  Object.entries(cart).forEach(el => total += getTotal(el[1]))



  let numero_de_produtos = getNumeroProdutos(cart)

  setTotal(total)
  setText(texto)
  setNumeroProdutos(numero_de_produtos)
}

const removerQtd = (id, qtd) => {
  let idUserLogado = getIdUser()
  let cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart

  if (qtd === 1) {  
    delete cart[id]  
    document.querySelector(`.div${id}`).remove()
    reajustarObjeto(cart)

  } else {
    qtd--

    cart[id].qtd = qtd

    reajustarObjeto(cart)
  }
  setarValores(idUserLogado) 
}

const adicionarQtd = (id, qtd) => {
  let idUserLogado = getIdUser()
  let cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart

  if (qtd <= 1) { 
    qtd++

    cart[id].qtd = qtd

    reajustarObjeto(cart)
  } else {
    Swal.fire({
      title: 'Quer comprar minha loja toda não ?',
      width: 600,
      padding: '3em',
      color: '#E63946',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(#E63946)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      confirmButtonColor: "#DD6B55"
    })
  }

  setarValores(idUserLogado) 
}


document.body.onload = () => {
  let idUserLogado = getIdUser()
  if (localStorage.getItem(`conta${idUserLogado}`) && Object.entries(JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart).length != 0) { 
    setarValores(idUserLogado)
  }
}

const getIdUser = () => {
  for (let i = 1; i < localStorage.getItem('id'); i++) {
    if (JSON.parse(localStorage.getItem(`conta${i}`)).e === localStorage.getItem('userLogado')) {
      return i
    }
  }
}

const reajustarObjeto = (cart) => {
  let idUserLogado = getIdUser()
  const { e, s } = JSON.parse(localStorage.getItem(`conta${idUserLogado}`))

  localStorage.setItem(`conta${idUserLogado}`, JSON.stringify({ e, s, cart }))
}

// Sistema de compras em Desenvolvimento, Com alert Personalizado
const btnFinalizarCompras = document.querySelector("#btnFinalizarCarrinho")
btnFinalizarCompras.addEventListener("click", function () {
  Swal.fire({
    title: 'Me Desculpa?',
    text: 'A melhor parte que é de receber ainda está em fase de desenvolvimento!',
    confirmButtonColor: "#DD6B55",
    icon: 'question'
  })
})

const removerFromCart = id => {
  let idUserLogado = getIdUser()
  let cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart
  delete cart[id]
  document.querySelector(`.div${id}`).remove()
  reajustarObjeto(cart)
  setarValores(id)
}

