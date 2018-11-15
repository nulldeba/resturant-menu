import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {
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
            </div>);
        }
        else
            return (<div></div>);
    }
    render() {
        if (this.props.dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail;