import Product from './Product';
import Seed from '../js/seed.js';
import {Container, Row, Col} from 'reactstrap';

import React, {Component} from 'react'

export default class ProductList extends Component {
    render() {
        const products = Seed
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
            ={product.productImageUrl}/>));
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
