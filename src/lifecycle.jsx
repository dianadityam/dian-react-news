import React from "react";
import { Card, Button, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';

export default class Lifecycle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            value: ''
        }

        // this.search = this.search.bind(this)
    }

    // search() {
    //     this.setState({value: this.state.value})
    // }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6b6b9cc0346d414f87a770c2db391516'
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            this.setState({ data: res.articles })
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <h1>News API React Task</h1>
                <Container>
                    <Row>
                        <InputGroup className="my-3">
                            <Form.Control
                            onChange={(e) => this.setState({value: e.target.value})}
                            placeholder="Search News"
                            />
                        </InputGroup>
                        {this.state.data.filter((news) => {
                            return this.state.value.toLowerCase() === '' ? news : news.title.toLowerCase().includes(this.state.value)
                        }).map((news) => (
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={news.urlToImage} />
                                        <Card.Body>
                                        <Card.Title>{news.title}</Card.Title>
                                        <Card.Text>{news.description}</Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        </Row>
                    </Container>
            </div>
        )
    }
}