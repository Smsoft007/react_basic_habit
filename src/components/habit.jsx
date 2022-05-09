import React, { PureComponent } from 'react';

class Habit extends PureComponent {
com
  componentDidUpdate() {
    // component 업데이트 될때마다 수행된다. 
    // 로딩 스피너
    // 소겥 초기화 
    console.log(`habit: ${this.props.habit.name} mounted`)
  }
  componentWillUnmount() {

    console.log(`habit: ${this.props.habit.name} will unmount`)
    // 소겥 초기화 
  }
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    //const {name} = this.props.habit;
    //const {count} = this.props;
    console.log('habit');
    //console.log(this.props.habit);
    const { name, count } = this.props.habit;
    //console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
