import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

import 'styles/Skills/skills.scss'

const SkillList = {
  circle: [
    {
      label: 'JavaScript',
      desc: 'Vanilla',
      pct: '70',
      img: require('assets/images/logos/javascript.png'),
    },
    {
      label: 'React',
      pct: 60,
      img:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
    },
    {
      label: 'HTML / CSS',
      desc: 'sass, less',
      pct: 40,
      img: require('assets/images/logos/css.png'),
    },
    {
      label: 'Symfony',
      desc: '3 et 4',
      pct: 50,
      img: require('assets/images/logos/symfony.png'),
    },
    {
      label: 'NodeJs',
      pct: 50,
      img: require('assets/images/logos/nodejs.jpg'),
    },
  ],
  bar: [
    {
      label: 'Angular',
      pct: 40,
      img: require('assets/images/logos/angular.png'),
    },
    {
      label: 'SQL / NoSQL',
      desc: '+bdd relationnelle, orm',
      pct: 70,
      img: require('assets/images/logos/bdd.png'),
    },
    {
      label: 'Suite Adobe',
      pct: 40,
      desc: 'Ps, Ai, Pr, Ae',
      img: require('assets/images/logos/creativesuite.jpg'),
    },
  ],
}

const SkillCircle = ({ skill }) => (
  <div className="skill-circle">
    {/* <div className="skill-label">{skill.label}</div> */}
    <img className="skill-circle-img" src={skill.img} />
    <div className="skill-circle-desc">{skill.desc ? skill.desc : '-'}</div>
  </div>
)

const SkillBar = ({ skill }) => (
  <div className="skill-bar">
    <img className="skill-bar-img" src={skill.img} />
    <div className="skill-bar-label">{skill.label}</div>
  </div>
)

const Skills = () => (
  <div className="skills-wrapper">
    <div className="skills-circle-wrapper">
      {SkillList.circle.map(skill => (
        <SkillCircle skill={skill} />
      ))}
    </div>
    <div className="skills-bar-wrapper">
      {SkillList.bar.map(skill => (
        <SkillBar skill={skill} />
      ))}
    </div>
  </div>
)

export default Skills
