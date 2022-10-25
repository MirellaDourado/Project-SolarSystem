import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

function Missions({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="missions">
      <Title headline="Missões" />
      <div data-testid="missions">
        <FaArrowAltCircleLeft className="left-arrow" onClick={ prevSlide } />
        <FaArrowAltCircleRight className="right-arrow" onClick={ nextSlide } />
        {missions.map((mission, index) => (<MissionCard
          className={ index === current ? 'slide active' : 'slide' }
          key={ index }
          value={ index }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
          current={ current }
        />))}
      </div>
    </section>
  );
}

Missions.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    country: PropTypes.string,
    destination: PropTypes.string,
  })).isRequired,
};

export default Missions;
