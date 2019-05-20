import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import FadeIn from 'react-fade-in'

import {
  Symfony,
  Javascript,
  ReactJs,
  Angular,
  Git,
  Photoshop,
  Illustrator,
  Html,
  Sql,
  Css,
  Php,
  NodeJs,
  Magento,
} from 'logos'

import 'styles/Skills/skills.scss'

const CIRCLE_ICON_SIZE = 50
const BAR_ICON_SIZE = 25

const SkillList = {
  circle: [
    {
      label: 'React',
      pct: 50,
      logo: () => <ReactJs height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} color="#61dafb" />,
    },
    {
      label: 'NodeJs',
      pct: 50,
      logo: () => <NodeJs height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} color="#43853d" />,
    },
    {
      label: 'Symfony',
      desc: '3 et 4',
      pct: 50,
      img: null,
      logo: () => <Symfony height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} />,
    },
    {
      label: 'PHP',
      desc: '5.6 / 7.2',
      pct: 50,
      logo: () => <Php height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} color="#8892BF" />,
    },
    {
      label: 'JavaScript',
      desc: 'Vanilla / ES6',
      pct: '70',
      logo: () => <Javascript height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} color="#f6de4a" />,
    },
    {
      label: 'HTML',
      pct: 40,
      logo: () => <Html height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} color="#e44d32" />,
    },
    {
      label: 'CSS',
      desc: 'sass, less',
      pct: 40,
      logo: () => <Css height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} color="#399ad6" />,
    },
    {
      label: 'SQL',
      pct: 60,
      logo: () => <Sql height={CIRCLE_ICON_SIZE} width={CIRCLE_ICON_SIZE} />,
    },
  ],
  bar: [
    {
      label: 'Angular',
      pct: 40,
      logo: () => <Angular height={BAR_ICON_SIZE} width={BAR_ICON_SIZE} color="#de3432" />,
    },
    {
      label: 'Magento',
      pct: 40,
      logo: () => <Magento height={BAR_ICON_SIZE} width={BAR_ICON_SIZE} color="#EB6021" />,
    },
    {
      label: 'Git',
      desc: 'commandes de base',
      pct: 50,
      logo: () => <Git height={BAR_ICON_SIZE} width={BAR_ICON_SIZE} color="#f05133" />,
    },
    {
      label: 'Photoshop',
      pct: 40,
      logo: () => <Photoshop height={BAR_ICON_SIZE} width={BAR_ICON_SIZE} color="#00C8FF" />,
    },
    {
      label: 'Illustrator',
      pct: 40,
      logo: () => <Illustrator height={BAR_ICON_SIZE} width={BAR_ICON_SIZE} color="#FF7C00" />,
    },
  ],
  word: ['MySQL', 'NoSQL', 'MongoDB', 'Python', 'Haskell', 'Kotlin', 'MacOS', 'Windows', 'Linux'],
}

const SkillCircle = ({ skill }) => (
  <div className="skill-circle">
    {skill.logo && skill.logo()}
    <div className="skill-circle-desc">{skill.desc ? skill.desc : '-'}</div>
  </div>
)

const SkillBar = ({ skill }) => (
  <div className="skill-bar">
    {skill.img && <img className="skill-bar-img" src={skill.img} />}
    {skill.logo && skill.logo()}
    <div className="skill-bar-label">{skill.label}</div>
  </div>
)

const Skills = () => (
  <div className="skills-wrapper">
    <div className="skills-circle-wrapper">
      {SkillList.circle.map((skill, k) => (
        <SkillCircle key={k} skill={skill} />
      ))}
    </div>
    <div className="skills-bar-wrapper">
      {SkillList.bar.map((skill, k) => (
        <SkillBar key={k} skill={skill} />
      ))}
    </div>
    <div className="skills-word-wrapper">
      {SkillList.word.map((skill, k) => (
        <span key={k} className="skill-word">{`${skill}, `}</span>
      ))}
    </div>
  </div>
)

export default Skills
