import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {

    const {
        id,
        title,
        description,
        url,
        votes,
        submitterAvatarUrl,
        productImageUrl,
        onVote
    } = props;

    const handleUpVote = () => {
        onVote(id)
    };

    return (
        <div className='item my-5'>
            <Container>
                <Row>
                    <Col sm='3'>
                        <div className='image-product'>
                            <img src={productImageUrl} alt='' className="img-fluid"/>
                        </div >
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <div className=" align-items-center h-100">
                            <div className=" header align-items-center">
                                <FontAwesomeIcon
                                    icon={faCaretUp}
                                    size='3x'
                                    onClick={handleUpVote}
                                    className='font-icon'/>
                                <span className='ml-3 vote'>{votes}</span>
                            </div>
                            <div className='description'>
                                <div className='mb-5'>
                                    <a href={url}>{title}</a>
                                    <p>{description}
                                    </p>
                                </div>
                                <div className="extra mt-5 align-items-end">
                                    <span>Submitted by:</span>
                                    <img src={submitterAvatarUrl} alt="avatar use" className="avatar image ml-3"/>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}
