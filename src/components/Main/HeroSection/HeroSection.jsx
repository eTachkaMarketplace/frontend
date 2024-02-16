import React from 'react';
import { HeroSection } from './HeroSection.styled';
import HeroForm from './HeroForm/HeroForm'
import { Rblock } from './Rblock/Rblock';

const HeroSectionComponent = () => {
  return (
    <HeroSection>
             
      <HeroForm />
      <Rblock/>
                
    </HeroSection>
  );
};

export default HeroSectionComponent;
