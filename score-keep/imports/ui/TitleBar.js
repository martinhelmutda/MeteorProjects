import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSUbtitle() {
    if (this.props.subtitle) {
      return <p className="title-bar__subtitle">{this.props.subtitle}</p>;
    }
  }
  render() {
    return(
      <div className='title-bar'>
        <div className='wrapper'>
          <h1>{this.props.title}</h1>
          {this.renderSUbtitle()}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

TitleBar.defaultProps = {
  title: 'Hola',
  // subtitle: 'Por Martín Helmut',
}
