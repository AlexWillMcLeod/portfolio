import type { Component } from 'solid-js';
import { Navbar } from './components/navbar/Navbar';
import { Card } from './components/card/Card';
import config from './config.json';
import './App.css';
import { Container } from './components/container/Container';
import { Project } from './components/project/Project';
import { Course } from './components/course/Course';
import { Timeline } from './components/timeline/Timeline';
import {
  Assembly,
  Inzight,
  Javascript,
  Latex,
  Logisim,
  Matlab,
  Python,
  React,
  Rust,
  TechIcon,
  TypeScript,
  SolidJS,
  Vite,
} from './components/tech-icon/TechIcon';
import { TimelineCard } from './components/timeline/timeline-point/TimelineCard';
import { User } from './components/user/User';
import { Contact } from './components/contact/Contact';
import { ContactCard } from './components/contact/contact-card/ContactCard';
import TuringMachineImgLink from '../assets/turing-machine.png';
import ScheduleImgLink from '../assets/schedule.png';
import ResumeAssetLink from '../assets/resume.pdf';

const AlexMcLeodUser = () => (
  <User
    name="Alex McLeod"
    subtitle="Software Engineer"
    icon="https://media.licdn.com/dms/image/D5603AQHYxrAaw90Ftg/profile-displayphoto-shrink_400_400/0/1666222795504?e=1677110400&v=beta&t=xwfaDvNmIGhUZdbXLqjc-Kmd6Ph2nsypOm4rJZLNvOU"
  />
);

const App: Component = () => {
  const leftNavbarLinks = config['left-navbar-links'];
  const rightNavbarLinks = config['right-navbar-links'];

  // Use static resume asset
  rightNavbarLinks[2].href = ResumeAssetLink;

  return (
    <div class="main">
      <Navbar
        left_links={leftNavbarLinks}
        right_links={rightNavbarLinks}
      />
      <Card
        title={<AlexMcLeodUser />}
        id=""
      >
        <p class="desc">
          Kia Ora 👋, I'm a second year computer science student at the
          University of Auckland with an 8.25 GPA 🥰. I'm a very quick
          independent learner and have developed applications in {Rust},{React},
          and, {TypeScript}. I'm looking to work on more projects with more
          people!
        </p>
      </Card>
      <Card
        title={<h1 style={{ 'font-family': 'Cascadia Code' }}>Projects</h1>}
        id="projects"
        back
      >
        <Container>
          <Project
            title="Portfolio Website"
            desc="Component-based reactive SolidJS-Vite web application with custom personal styling and scrolling"
            github_link="https://github.com/AlexWillMcLeod/portfolio"
            technologies={[TypeScript, SolidJS, Vite]}
          >
            <img src="https://github.com/AlexWillMcLeod/portfolio/raw/main/assets/landing-page-screenshot.png" />
          </Project>
          <Project
            title="Caesar Cipher"
            desc="Quick and simple desktop app for caesar ciper conversions built using Electron Typescript with Material UI."
            github_link="https://github.com/AlexWillMcLeod/caesar-cipher"
            technologies={[React, TypeScript]}
          >
            <img src="https://user-images.githubusercontent.com/85547635/204930479-b106c179-5666-47bc-ae01-28b065ba8bee.png" />
          </Project>
          <Project
            title="Connect Four"
            desc="University of Auckland assignment for Computer Science 130 with an A+ grade. Built a connect four game with python, using the eel ui library."
            technologies={[Python, Javascript]}
            github_link="https://github.com/AlexWillMcLeod/connect-four-assignment"
          >
            <img src="https://user-images.githubusercontent.com/85547635/204931524-269a4c6d-7829-4a5e-9d05-b10f200a7eb4.png" />
          </Project>
          <Project
            title="Brainstormer"
            desc="Python Tkinter UI app for brainstorming ideas with movable post it notes and savable, sharable files."
            technologies={[Python]}
            github_link="https://github.com/AlexWillMcLeod/brainstormer"
          >
            <img src="https://github.com/AlexWillMcLeod/brainstormer/raw/main/img/veloce-icon.png" />
          </Project>
          <Project
            title="Schedule"
            desc="Rust library for sorting secondary school students into classes by subjects, a task that takes schools many months, automated into millisecond speed."
            technologies={[Rust]}
            github_link="https://github.com/AlexWillMcLeod/schedule"
          >
            <img src={ScheduleImgLink} />
          </Project>
          <Project
            title="Turing Machine"
            desc="Turing machine implementation in rust with iterator model for learning. "
            technologies={[Rust]}
            github_link="https://github.com/AlexWillMcLeod/turing-machine"
          >
            <img src={TuringMachineImgLink} />
          </Project>
        </Container>
      </Card>
      <Card
        title={<h1 style={{ 'font-family': 'Cascadia Code' }}>Experience</h1>}
        id="experience"
        back
      >
        <Timeline>
          <TimelineCard
            role="Market Research Associate"
            company="One Picture Group"
            timeperiod="Jun '22 -> Oct '22"
            desc="Enthusiastically interviewed participants and entered data for important social market research projects for clients such as Auckland Transport, Metlink, GWRC and MBIE. Integrated into company culture and learnt to use internal company software as well as teams, excel and email professionally."
          />
          {/* <TimelineCard
            role="Volunteer Uniguide"
            company="University of Auckland"
            timeperiod="Feb '23 -> Nov '23"
            desc=""
          /> */}
        </Timeline>
      </Card>
      <Card
        title={<h1 style={{ 'font-family': 'Cascadia Code' }}>Academic</h1>}
        id="academic"
        back
      >
        <Container>
          <Course
            title="Computer Science 225"
            subtitle="Discrete Structures in Mathematics and Computer Science"
            grade="A+"
            technologies={[Latex]}
            website_link="https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/225/1235"
          />
          <Course
            title="Computer Science 130"
            subtitle="Introduction to Software Fundamentals "
            grade="A+"
            technologies={[Python, Javascript, Latex]}
            website_link="https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/130/1235"
          />
          <Course
            title="Computer Science 120"
            subtitle="Mathematics for Computer Science"
            grade="A+"
            technologies={[Latex]}
            website_link="https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/120/1235"
          />
          <Course
            title="Statistics 101"
            subtitle="Introduction to Statistics"
            technologies={[Inzight]}
            grade="A+"
            website_link="https://courseoutline.auckland.ac.nz/dco/course/STATS/101/1235"
          />
          <Course
            title="Physics 140"
            subtitle="Digital Fundamentals"
            technologies={[Logisim]}
            grade="A"
            website_link="https://courseoutline.auckland.ac.nz/dco/course/PHYSICS/140"
          />
          <Course
            title="Computer Science 110"
            subtitle="Introduction to Computer Systems"
            technologies={[Assembly]}
            grade="A"
            website_link="https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/110/1235"
          />
          <Course
            title="Mathematics 120"
            subtitle="Algebra"
            technologies={[Latex]}
            grade="A-"
            website_link="https://courseoutline.auckland.ac.nz/dco/course/MATHS/120/1235"
          />
          <Course
            title="Mathematics 162"
            subtitle=""
            technologies={[Latex, Matlab]}
            grade="A-"
            website_link="https://courseoutline.auckland.ac.nz/dco/course/MATHS/162/1235"
          />
        </Container>
      </Card>
      <Card
        title={<h1 style={{ 'font-family': 'Cascadia Code' }}>Contact</h1>}
        id="contact"
        back
      >
        <Contact>
          <ContactCard
            user={<AlexMcLeodUser />}
            email="alexwillmcleod@gmail.com"
          />
        </Contact>
      </Card>
    </div>
  );
};

export default App;
