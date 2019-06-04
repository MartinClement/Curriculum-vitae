import React from 'react'

import 'styles/History/history.scss'
import {
  ReactJs,
  Javascript,
  NodeJs,
  Php,
  Magento,
  ES6,
  Html,
  Css,
  Symfony,
  Haskell,
  Python,
} from 'logos'

const ICON_SIZE = 20

const Icons = {
  magento: require('assets/images/logos/magento.jpg'),
}

const Facts = [
  {
    label: 'Mastère 2 Alternance - Informatique et système de gestion',
    dates: { start: '01/09/2018', stop: '31/08/2019' },
    socity: { name: 'LiveMon', img: require('assets/images/logos/livemon.jpg') },
    desc: '12 mois en tant que développeur front. ( Ecole IPSSI Paris )',
    bulletPoints: [
      'Intégration des visuels pour le tableau de bord',
      'Intégration des visuels pour le site web',
      'Refonte responsive du site web',
      'Développement des fonctionnalités pour le tableau de bord',
    ],
    technos: [
      k => <ReactJs key={k} height={ICON_SIZE} width={ICON_SIZE} color="#61dafb" />,
      k => <Javascript key={k} height={ICON_SIZE} width={ICON_SIZE} color="#f6de4a" />,
      k => <ES6 key={k} height={ICON_SIZE} width={ICON_SIZE} color="#f6de4a" />,
      k => <NodeJs key={k} height={ICON_SIZE} width={ICON_SIZE} color="#43853d" />,
    ],
  },
  {
    label: 'Mastère 1 Alternance - Développement web,mobile et logiciel',
    dates: { start: '01/09/2017', stop: '31/08/2018' },
    socity: { name: 'Pandacraft', img: require('assets/images/logos/pandacraft.png') },
    desc: '12 mois en tant développeur fullstack. ( Ecole IPSSI Paris )',
    bulletPoints: [
      'Développement des modules magento pour la plateforme e-commerce',
      'Intégration des visuels pour les partenariats',
      'Synchronisation du catalogue de produits avec un gestionnaire de flux ( synchronisation Facebook, Amazon )',
      'Responsable technique emailing (Bronto)',
      'Responsable du parc informatique',
    ],
    technos: [
      k => <Magento key={k} height={ICON_SIZE} width={ICON_SIZE} color="#EB6021" />,
      k => <Php key={k} height={ICON_SIZE} width={ICON_SIZE} color="#8892BF" />,
      k => <Javascript key={k} height={ICON_SIZE} width={ICON_SIZE} color="#f6de4a" />,
    ],
  },
  {
    label: 'Licence 3 Pro ATC Webmestre',
    dates: { start: '2017', stop: '2018' },
    socity: { name: 'Faculté de Caen Normandie', img: require('assets/images/logos/unicaen.png') },
    desc: 'Licence 3 parcours professionel spécialité développement web',
    bulletPoints: [
      "Projet tutoré : Création d'un site de gestion de tournoi de jeu video (Symfony 3)",
      'Pattern MVC',
      'Methode Agile',
      'Printemps Agile 2017',
    ],
    technos: [
      k => <Html key={k} height={ICON_SIZE} width={ICON_SIZE} color="#e44d32" />,
      k => <Css key={k} height={ICON_SIZE} width={ICON_SIZE} color="#399ad6" />,
      k => <Javascript key={k} height={ICON_SIZE} width={ICON_SIZE} color="#f6de4a" />,
      k => <Php key={k} height={ICON_SIZE} width={ICON_SIZE} color="#8892BF" />,
      k => <Symfony key={k} height={ICON_SIZE} width={ICON_SIZE} />,
    ],
  },
  {
    label: 'Licence 1/2 Informatique',
    dates: { start: '2015', stop: '2017' },
    socity: { name: 'Faculté de Caen Normandie', img: require('assets/images/logos/unicaen.png') },
    desc: 'Première et deuxième année de Licence Informatique',
    bulletPoints: [
      'Option traitement automatique des langues',
      'Option documents structurés et architectures orientées services',
      'Option imagerie',
      'Système UNIX',
      "Projet annuel : Développement d'un manic shooter en Python3 (Object)",
    ],
    technos: [
      k => <Html key={k} height={ICON_SIZE} width={ICON_SIZE} color="#e44d32" />,
      k => <Css key={k} height={ICON_SIZE} width={ICON_SIZE} color="#399ad6" />,
      k => <Javascript key={k} height={ICON_SIZE} width={ICON_SIZE} color="#f6de4a" />,
      k => <Python key={k} height={ICON_SIZE} width={ICON_SIZE} />,
      k => <Haskell key={k} height={ICON_SIZE} width={ICON_SIZE} color="#8e508a" />,
    ],
  },
  {
    label: 'Terminal S',
    dates: { start: 2012, stop: 2013 },
    socity: { name: 'Lycée Victor Grignard, Cherbourg' },
    desc: 'Terminale filière scientifique.',
    bulletPoints: ['Spécialité "Informatique et science du numérique" (ISN)', 'Mention assez-bien'],
    technos: [
      k => <Html key={k} height={ICON_SIZE} width={ICON_SIZE} color="#e44d32" />,
      k => <Css key={k} height={ICON_SIZE} width={ICON_SIZE} color="#399ad6" />,
    ],
  },
  {
    label: 'Personnel',
    desc: 'Hobbies et mobilité',
    bulletPoints: [
      "Centres d'intérêt : Programmation, sport, musique, E-sport",
      'Hobbies : Escalade, Roller, Longboard, Rubgy, Musculation, Jeux vidéos',
      'Permis B',
    ],
    technos: [],
  },
]

class Fact extends React.Component {
  _root = undefined
  _facts = null
  _IO = undefined

  componentDidMount = () => {
    this._root = document.querySelector('#app')
    this._facts = document.querySelectorAll('.fact-desc-wrapper')

    if (this._root && this._facts) {
      const options = {
        root: this._root,
        rootMargin: '0px',
        threshold: 0.2,
      }

      this._IO = new IntersectionObserver(this.handleFadeIn, options)
      this._facts.forEach(fact => this._IO.observe(fact))
    }
  }

  handleFadeIn = (entries, observer) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.style.opacity = 1
      }
    })
  }

  render() {
    const { fact } = this.props

    return (
      <div className="fact-wrapper">
        <div className="fact-label">{fact.label}</div>
        <div className="fact-infos">
          {fact.socity && <div className="fact-infos-socity-name">{fact.socity.name}</div>}
          <div className="fact-infos-dates">
            {fact.dates ? (
              <>
                {fact.dates.start}
                <span className="date-arrow">-></span>
                {fact.dates.stop}
              </>
            ) : (
              <>-</>
            )}
          </div>
        </div>
        <div className="fact-desc-wrapper">
          {fact.socity && fact.socity.img && (
            <img className="fact-socity-img" src={fact.socity.img} />
          )}
          <div
            className="fact-desc-infos"
            style={{
              ...(!fact.technos.length > 0 ? { justifyContent: 'center', padding: '0 10px' } : {}),
            }}
          >
            <div
              className="fact-desc-text"
              style={{ ...(!fact.technos.length > 0 ? { margin: 0, padding: '5px 0' } : {}) }}
            >
              {fact.desc}
            </div>
            {fact.bulletPoints.length > 0 && (
              <ul className="fact-desc-bulletpoints">
                {fact.bulletPoints.map((f, k) => (
                  <li key={k}>{f}</li>
                ))}
              </ul>
            )}
            {fact.technos.length > 0 && (
              <div className="fact-desc-technos">{fact.technos.map((t, k) => t(k))}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const History = () => (
  <div className="history-wrapper">
    {Facts.map((f, k) => (
      <Fact key={k} fact={f} />
    ))}
  </div>
)

export default History
