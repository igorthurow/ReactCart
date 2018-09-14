import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const items = [
    {
        id: 1,
        name: 'Ar condicionado',
        description: 'Ar Condicionado Samsung Split Hi Wall Max Plus 9000 BTUs Quente/Frio 220V',
        longDescription: 'Ar Condicionado Samsung Split Hi Wall Max Plus 9000 BTUs Quente/Frio 220V. O des' +
                'ign diferenciado dos condicionadores de ar Max Plus da Samsung são a solução per' +
                'feita para a sua casa ou escritório. Além de bonitos eles oferecem muito frescor' +
                ', ar mais puro e baixo consumo de energia.',
        price: 1229.9,
        img_url: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v3810731433280' +
                '184451/products/webcontinental-samsung-ar-condicionado-split-max-plus-2017.jpg',
        stock: 5
    }, {
        id: 2,
        name: 'Refrigerador',
        description: 'Refrigerador Consul Duplex Bem Estar  Frost Free Evox Platinum 405L CRM51AK',
        longDescription: 'A geladeira Consul Bem Estar vem com Filtro Bem Estar, que acaba com o cheiro ru' +
                'im da geladeira. Sua geladeira agora sem cheiro ruim e odores fortes**. E o espa' +
                'ço Frutaria, garante uma vida mais saudável com frutas frescas sempre à vista. E' +
                ' para ficar ainda mais prático, ela tem o Porta Latas Flex, conheça!',
        price: 1999.9,
        img_url: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v8188054076839' +
                '912413/products/14932.30073.jpg',
        stock: 2
    }, {
        id: 3,
        name: 'Forno',
        description: 'Forno Elétrico de Embutir Electrolux Inox Grill Timer 80L OE8MX',
        longDescription: 'Deixe suas refeições ainda mais saborosas com o Forno Elétrico de Embutir da Ele' +
                'ctrolux. Ideal para dourar, gratinar ou dar àquele toque especial nos seus prato' +
                's. Com 80 litros de capacidade, ele é perfeito tanto para pratos simples como pa' +
                'ra aquele prato super elaborado. Possui indicador luminoso que avisa quando o fo' +
                'rno está aquecido e controle de temperatura.',
        price: 1117.91,
        img_url: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v8304950994512' +
                '783670/products/16265.26938.jpg',
        stock: 1
    }, {
        id: 4,
        name: 'Lava e Seca',
        description: 'Lava e Seca 8,5Kg LG Direct Drive WD1485ATB - Água Quente com 14 Programas',
        longDescription: 'Desenvolvida para garantir roupas limpas sem danificá-las, a lavadora Direct Dri' +
                've possui 14 programas de lavagem, motor Direct Drive com 10 anos de garantia, P' +
                'ainel Digital Touch LED, trava de segurança e cesto 100% em aço inox.',
        price: 2299,
        img_url: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v4717902029479' +
                '684265/products/18256.31920.jpg',
        stock: 3
    }, {
        id: 5,
        name: 'Bicicleta',
        description: 'Bicicleta MTB Aro 20 V-Brake Feminina Rosa - Polimet 7139',
        longDescription: 'Condições de saúde mental, como depressão, ansiedade e estresse podem ter conseq' +
                'uências reduzidas, pois assim como os demais exercícios físicos, andar de bicicl' +
                'eta favorece aos níveis de endorfina, o que dá fim ao mau humor.',
        price: 378,
        img_url: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v4821165613265' +
                '084775/products/98916.75245-693-784-1521557209324.jpg',
        stock: 3
    }, {
        id: 6,
        name: 'Trampolim',
        description: 'Trampolim Elastic Jump Polimet',
        longDescription: 'O Trampolim Elastic Jump é ideal para a prática de exercícios aeróbicos. Utiliza' +
                'ndo diariamente, poderá reduzir a gordura corporal, melhorando o estado de saúde' +
                ' mental e físico, pois é uma forma divertida de se exercitar.',
        price: 159,
        img_url: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v8615444716704' +
                '156694/products/18766.33139.jpg',
        stock: 6
    }
]

class App extends Component {
    state = {
        modal: '',
        cartItems: {},
        price: 0
    }
    render() {
        return (
            <div className="App">
                <div className="container-fluid">{
                    Object.keys(this.state.cartItems).length > 0 && 
                    <div className="cart"> {
                        Object.keys(this.state.cartItems).map((item) => (
                            <div className="cart-items">
                                Preço: {this
                                    .state
                                    .cartItems[item]
                                    .price
                                    .toFixed(2)}
                                Nome: {this.state.cartItems[item].name}
                            </div>
                                ))}
                    </div>
                    }
                    <div className="container">
                        <h2 className="main-title">Confira nossos produtos</h2>
                        <div className="row">
                            {items.map((item, index) => (
                                <div className="col-md-4">
                                    <div className="item">
                                        <img className="img-fluid" src={item.img_url}/>
                                        <h2 className="item-title">{item.name}</h2>
                                        <h2 className="item-description">{item.description}</h2>
                                        <span className="item-price">R$ {item.price},00</span>
                                        <span className="item-button">
                                            <button onClick={() => this.setState({modal: item.name})}>Ver detalhes</button>
                                        </span>
                                        {this.state.modal == item.name && (
                                            <div
                                                className="modal"
                                                onClick={(e) => e.target.classList.contains('modal') && this.setState({modal: false})}>
                                                <div className="modal-container">
                                                    <img className="img-fluid" src={item.img_url}/>
                                                    <h2 className="item-title">{item.name}</h2>
                                                    <h2 className="item-description">{item.description}</h2>
                                                    <span className="item-price">R$ {item.price},00</span>
                                                    <button onClick={() => this.sendToCart(item.stock, index)}>Adicionar ao carrinho</button>
                                                    <span className="item-button">
                                                        <button onClick={() => this.setState({modal: false})}>Fechar</button>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    sendToCart(stock, index) {
        if (stock > 0) {
            items[index].stock += -1
            this.setState({
                cartItems: {
                    ...this.state.cartItems,
                    [items[index].name]: {
                        name: items[index].name,
                        stock: this.state.cartItems[items[index].name]
                            ? this.state.cartItems[items[index].name].stock + 1
                            : 1,
                        price: this.state.cartItems[items[index].name]
                            ? this.state.cartItems[items[index].name].price + items[index].price
                            : items[index].price
                    }
                },
                price: this.state.price + items[index].price
            })
        }
    }
}

export default App;
