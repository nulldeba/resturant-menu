import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';
import DishDetail from './DishDetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    return (
      <div >
        <Header/>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer/>

      </div>
    );
  }
}

export default Main;