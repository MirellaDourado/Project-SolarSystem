import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination, current, value } = this.props;
    return (
      <div data-testid="mission-card">
        {value === current && (
          <div className="missionCard">
            <p data-testid="mission-name">
              { name }
            </p>
            <p data-testid="mission-year">
              { year }
            </p>
            <p data-testid="mission-country">
              { country }
            </p>
            <p data-testid="mission-destination">
              { destination }
            </p>
          </div>
        )}
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default MissionCard;
