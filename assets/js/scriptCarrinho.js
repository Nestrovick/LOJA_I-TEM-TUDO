
//objeto literal dos produtos que o site possui
const products = {
  0: {
    nome: 'Monitor AOC',
    desc: 'Muito Utilizado no seu dia a dia...',
    valor: 899.99,
    img: '<img src="assets/img/projects/monitoraoc.png">',
    qtd: 1
  },

  1: {
    nome: "Nike Air Force 1",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 999.99,
    img: '<img src="assets/img/projects/nikeair1.png">',
    qtd: 1
  },

  2: {
    nome: "Iphone 15 Pro",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 6799.99,
    img: '<img src="assets/img/projects/Iphone15pro.png">',
    qtd: 1
  },

  3: {
    nome: "Smartwatch",
    desc: "Muito Utilizado no seu dia dia...",
    valor: 379.99,
    img: '<img src="assets/img/projects/smartwatch.png">',
    qtd: 1
  },

  4: {
    nome: "Meta Oculus Quest 3",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 4097.00,
    img: '<img src="assets/img/projects/metaquest3.png">',
    qtd: 1
  },

  5: {
    nome: "Puma Suede Skate",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 339.90,
    img: '<img src="assets/img/projects/pumaskate.png">',
    qtd: 1
  },

  6: {
    nome: "Teclado Gamer Logitech G213",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 398.06,
    img: '<img src="assets/img/projects/tecladogamer.png">',
    qtd: 1
  },

  7: {
    nome: "Mouse Gamer Logitech G502",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 421.58,
    img: '<img src="assets/img/projects/g502.png">',
    qtd: 1
  },

  8: {
    nome: 'Air Pods 3 Pro',
    desc: 'Muito Utilizado no seu dia a dia...',
    valor: 1599.99,
    img: '<img src="assets/img/projects/airpods.png">',
    qtd: 1
  },

  9: {
    nome: "Garrafa Térmica",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 65.00,
    img: '<img src="assets/img/projects/garrafa.png">',
    qtd: 1
  },

  10: {
    nome: "Impressora",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 899.99,
    img: '<img src="assets/img/projects/impressora.png">',
    qtd: 1
  },

  11: {
    nome: "Churrasqueira",
    desc: "Muito Utilizado no seu dia dia...",
    valor: 199.99,
    img: '<img src="assets/img/projects/churrasqueira.png">',
    qtd: 1
  },

  12: {
    nome: "Telefone Escritório",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 210.00,
    img: '<img src="assets/img/projects/telefone.png">',
    qtd: 1
  },

  13: {
    nome: "Fechadura Eletrônica",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 799.99,
    img: '<img src="assets/img/projects/fechadura.png">',
    qtd: 1
  },

  14: {
    nome: "Perfume 212 Vip",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 199.99,
    img: '<img src="assets/img/projects/perfume.png">',
    qtd: 1
  },

  15: {
    nome: "Switch de Rede 8 Portas",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 210.00,
    img: '<img src="assets/img/projects/switch-de-rede.png">',
    qtd: 1
  },


  20: {
    nome: "Lava Louças 14 serviços",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 4324.70,
    img: '<img src="assets/img/pag-produtos/lavalouças.png">',
    qtd: 1
  },
  21: {
    nome: "Cama King Size",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 2799.00,
    img: '<img src="assets/img/pag-produtos/cama.png">',
    qtd: 1
  },
  22: {
    nome: "Camisa Social",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 69.00,
    img: '<img src="assets/img/pag-produtos/blusa.png">',
    qtd: 1
  },
  23: {
    nome: "Alto Falante",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 699.99,
    img: '<img src="assets/img/pag-produtos/altofalante.png">',
    qtd: 1
  },
  24: {
    nome: "Console Nitendo Switch",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 1847.75,
    img: '<img src="assets/img/pag-produtos/nitendoswitch.png">',
    qtd: 1
  },
  25: {
    nome: "Secador de Cabelo",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 110.00,
    img: '<img src="assets/img/pag-produtos/secadordecabelo.png">',
    qtd: 1
  },
  26: {
    nome: "Pc Gamer",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 5275.00,
    img: '<img src="assets/img/pag-produtos/pcgamer.png">',
    qtd: 1
  },
  27: {
    nome: "Webcam Full HD",
    desc: "Muito Utilizado no seu dia a dia...",
    valor: 399.99,
    img: '<img src="assets/img/pag-produtos/webcan.png">',
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
            text: 'Já foi adicionado ao carrinho',
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

