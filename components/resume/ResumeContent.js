'use client'

import { useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import Footer from '../ui/Footer'

import mapIcon from '../icons/map.svg'
import mailIcon from '../icons/mail.svg'
import linkedinIcon from '../icons/linkedin.svg'
import githubIcon from '../icons/github.svg'

export default function ResumeContent({ fullData }) {
  const [lang, setLang] = useState('tr')
  const data = fullData[lang]
  const labels = data.interface

  return (
    <div className="container">

      <div className="page-controls">
        <LanguageToggle currentLang={lang} onToggle={setLang} />
        <ThemeToggle />
      </div>

      <div className="glass-card">
        <Sidebar data={data} labels={labels} />
        <MainContent data={data} labels={labels} />
      </div>

      <Footer />
    </div>
  )
}

function Sidebar({ data, labels }) {
  const { basics, skills, education, certificates } = data

  return (
    <aside className="sidebar">
      <ProfileSection basics={basics} />
      <hr />
      <SkillSection skills={skills} title={labels.stack} />
      <EducationSection education={education} title={labels.education} />
      <CertificateSection certificates={certificates} title={labels.certificates} />
    </aside>
  )
}

function MainContent({ data, labels }) {
  const { basics, experience, projects } = data

  return (
    <div className="main-content">
      <SummarySection summary={basics.summary} title={labels.about} />
      <ExperienceSection experience={experience} title={labels.experience} />
      <ProjectSection projects={projects} title={labels.projects} />
    </div>
  )
}

function ProfileSection({ basics }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h1 className="profile-name">{basics.name}</h1>
      <p className="profile-label">{basics.label}</p>

      <div className="contact-list">
        <ContactItem icon={mapIcon.src} text={basics.location} />
        <ContactItem icon={mailIcon.src} text={basics.email} href={`mailto:${basics.email}`} />
        <ContactItem icon={linkedinIcon.src} text="in/omerserifyildiz" href={basics.social.linkedin} />
        <ContactItem icon={githubIcon.src} text="omerserifyildiz" href={basics.social.github} />
      </div>
    </div>
  )
}

function ContactItem({ icon, text, href }) {
  const content = (
    <>
      <img src={icon} alt="" className="contact-icon" />
      <span>{text}</span>
    </>
  )

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className="contact-item">{content}</a>
  }
  return <div className="contact-item">{content}</div>
}

function SkillSection({ skills, title }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <SectionTitle title={title} />
      <div className="skill-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

function EducationSection({ education, title }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <SectionTitle title={title} />
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="edu-school">{edu.institution}</div>
            <div className="edu-area">{edu.area}</div>
            <div className="edu-date">{edu.period}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CertificateSection({ certificates, title }) {
  return (
    <div style={{ marginTop: 'auto' }}>
      <SectionTitle title={title} />
      <ul className="cert-list">
        {certificates.map((cert, index) => (
          <li key={index} className="cert-item">
            <div className="cert-dot"></div>
            {cert}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SummarySection({ summary, title }) {
  return (
    <section style={{ marginBottom: '56px', maxWidth: '600px' }}>
      <h2 className="h2-title">{title}</h2>
      <p className="paragraph">{summary}</p>
    </section>
  )
}

function ExperienceSection({ experience, title }) {
  return (
    <section style={{ marginBottom: '56px' }}>
      <h2 className="h2-title">{title}</h2>
      <div className="timeline-wrapper">
        {experience.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="job-header">
              <h3 className="job-company">{job.company}</h3>
              <span className="job-date">{job.period}</span>
            </div>
            <div className="job-position">{job.position}</div>
            <p className="paragraph">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectSection({ projects, title }) {
  return (
    <section>
      <h2 className="h2-title">{title}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tech">
              <span className="tech-dot"></span>
              {project.tech}
            </p>
            <p className="paragraph">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionTitle({ title }) {
  return <h3 className="section-title">{title}</h3>
}