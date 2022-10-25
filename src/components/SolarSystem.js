import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section data-testid="planets">
          <hr />
          {planets
            .map((planet, index) => (<PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
