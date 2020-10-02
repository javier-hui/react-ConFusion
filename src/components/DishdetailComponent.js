import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            const list = comments.map((comment) =>
                <li key={comment.id} className="py-3">{comment.comment}<br />-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>

            );
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{list}</ul>
                </div>
            );
        }
        else
            return (
                <div></div>
            );

    }

    render() {
        let selectedDish = this.props.dish;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish == null ? null : selectedDish.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;