import PropTypes from 'prop-types';
import { Component } from 'react';
import { ButtonLoadMore } from './Button.styled'; // ✅ Import corect

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.onClick(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <ButtonLoadMore type="button" onClick={this.handleClick}> {/* ✅ Folosește direct styled-component */}
        Load More
      </ButtonLoadMore>
    );
  }
}

export default Button;
