import React from 'react'

import 'styles/History/history.scss'

const Icons = {
  javascript: require('assets/images/logos/javascript.png'),
  magento: require('assets/images/logos/magento.jpg'),
  php: require('assets/images/logos/php.png'),
  react: require('assets/images/logos/react.png'),
  nodejs: require('assets/images/logos/nodejs.png'),
}

const Facts = [
  {
    label: 'Mastère 2 Alternance - Informatique et système de gestion',
    dates: { start: '01/09/2018', stop: '31/08/2019' },
    socity: { name: 'LiveMon', img: require('assets/images/logos/livemon.jpg') },
    desc:
      '12 mois en tant que développeur front. Intégration des mockups pour le website et développement des features pour le dashboard',
    technos: [Icons.javascript, Icons.react, Icons.nodejs],
  },
  {
    label: 'Master 1 Alternance - Developpement web,mobile et logiciel',
    dates: { start: '01/09/2017', stop: '31/08/2018' },
    socity: { name: 'Pandacraft', img: require('assets/images/logos/pandacraft.png') },
    desc:
      '12 mois en tant développeur fullstack. Développement et intégration des modules pour la plateforme e-commerce',
    technos: [Icons.magento, Icons.php, Icons.javascript],
  },
  {
    label: 'Licence 3 Pro ATC Webmestre',
    dates: { start: '2017', stop: '2018' },
    socity: { name: 'Faculté de Caen Normandie', img: require('assets/images/logos/unicaen.png') },
    desc: 'Licence 3 parcour professionel spécialité développement web',
    technos: [],
  },
  {
    label: 'Licence 1/2 Informatique',
    dates: { start: '2015', stop: '2017' },
    socity: { name: 'Faculté de Caen Normandie', img: require('assets/images/logos/unicaen.png') },
    desc:
      'Licence 1 et licence 2 informatique parcour classiques, options web et traitement automatique des langues',
    technos: [],
  },
]

const Fact = ({ fact }) => (
  <div className="fact-wrapper">
    <div className="fact-label">{fact.label}</div>
    <div className="fact-infos">
      <div className="fact-infos-socity-name">{fact.socity.name}</div>
      <div className="fact-infos-dates">
        {fact.dates.start}
        <span className="date-arrow">-></span>
        {fact.dates.stop}
      </div>
    </div>
    <div className="fact-desc-wrapper">
      <img className="fact-socity-img" src={fact.socity.img} />
      <div
        className="fact-desc-infos"
        style={{ ...(!fact.technos.length ? { justifyContent: 'center', padding: '0 10px' } : {}) }}
      >
        <div className="fact-desc-text" style={{ ...(!fact.technos.length ? { margin: 0 } : {}) }}>
          {fact.desc}
        </div>
        <div className="fact-desc-technos">
          {fact.technos.length !== 0 && fact.technos.map(t => <img src={t} />)}
        </div>
      </div>
    </div>
  </div>
)

const History = () => (
  <div className="history-wrapper">
    {Facts.map(f => (
      <Fact fact={f} />
    ))}
  </div>
)

export default History
