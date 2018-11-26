import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Row, Label, Col,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';


class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return (<div>
            <Button outline onClick={this.toggleModal}><span className="fa far fa-edit fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)}>
                        <Row className="form-group">
                            <Label md={12} htmlFor="rating">rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" className="form-control">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}> author name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author" placeholder="author name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" rows={6} id="comment" name="comment" placeholder="comment" className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>);
    }
}
function RenderComments({ comments, dishId, addComment }) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    if (comments != null) {
        return (<div style={{ textAlign: 'left' }}>
            <h4>Comments</h4>
            {
                comments.map((comment) => {
                    const currentDate = new Date(comment.date);
                    const date = currentDate.getDate();
                    const month = currentDate.getMonth();
                    const year = currentDate.getFullYear();
                    return (
                        <ul key={comment.id} className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {monthNames[month]} {date}, {year}</li>
                        </ul>
                    );

                })
            }
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>);
    }
    else
        return (<div></div>);
}

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}


const DishDetail = (props) => {
    if (props.isLoading === true) {
        return (<div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>)
    }
    else if (props.errorMessage) {
        return (<div className="container">
            <div className="row">
                <h4>{props.errorMessage}</h4>
            </div>
        </div>)
    }
    else if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
            </div>
        );
    else {
        return (<div> </div>)
    }
}


export default DishDetail;