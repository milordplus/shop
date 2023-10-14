import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import Details from "./components/Details";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Стул серый',
                    img: 'chair-grey.jpeg',
                    desc: 'Hello world',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стол',
                    img: 'table.webp',
                    desc: 'Hello world',
                    category: 'tables',
                    price: '129.00'
                },
                {
                    id: 3,
                    title: 'Диван',
                    img: 'sofa.jpeg',
                    desc: 'Hello world',
                    category: 'sofa',
                    price: '33.00'
                },
                {
                    id: 4,
                    title: 'Лампа',
                    img: 'wall-light.jpeg',
                    desc: 'Hello world',
                    category: 'light',
                    price: '25.50'
                },
                {
                    id: 5,
                    title: 'Стул белый',
                    img: 'chair-white.jpeg',
                    desc: 'Hello world',
                    category: 'chairs',
                    price: '50.99'
                }
            ],
            details: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onDetails = this.onDetails.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onDetails={this.onDetails} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.details && <Details onAdd={this.addToOrder} onDetails={this.onDetails} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onDetails(item) {
        this.setState({fullItem: item})
        this.setState({details: !this.state.details})
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        });
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
}

export default App;
