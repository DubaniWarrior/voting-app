import Product from './Product';
import Seed from '../js/seed.js';
import {Container, Row, Col} from 'reactstrap';

import React, {Component} from 'react'

export default class ProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.setState({products: Seed.products})
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this
            .state
            .products
            .map((product) => {
                if (product.id === productId) {
                    return Object.assign({}, product, {
                        votes: product.votes + 1
                    });
                } else {
                    return product;
                }
            });
        this.setState({products: nextProducts})
    };

    render() {
        const products = this
            .state
            .products
            .sort((a, b) => (b.votes - a.votes));
        const productComponents = products.map((product) => (<Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl
            ={product.productImageUrl}
            onVote={this.handleProductUpVote}/>));
        return (
            <div className=''>
                <Container>
                    <Row className='my-5'>
                        <Col className='primary-heading text-center'>
                            <h3 >
                                <strong>Popular Products</strong>
                            </h3>
                        </Col>
                    </Row>
                    <Row className='mt-5 danger'>
                        <Col>
                            {productComponents}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
