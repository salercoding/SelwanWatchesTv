import React from 'react';
import { searchPartyProfile, bojackHorsemanProfile,  desperateHousewivesProfile, kingOfTheHillProfile } from './tvshows';
import Header from './Header';
import './styles.css';



function App() {
  return (
    <main>
      <Header />
      <div className='tvShowProfiles'>
      {searchPartyProfile.display()}
      {bojackHorsemanProfile.display()}
      {desperateHousewivesProfile.display()}
      {kingOfTheHillProfile.display()}
      {searchPartyProfile.display()}
      </div>
    </main>
  );
}

export default App;
