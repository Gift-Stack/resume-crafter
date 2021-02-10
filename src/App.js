import './App.css';
import { useState, createRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Left } from './Components/layout/Left';
import { Right } from './Components/layout/Right';
import NavBar from './Components/navbar/NavBar';
import { Education } from './Components/educations/Education';
import { Experience } from './Components/Experience';

import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

import Pdf from 'react-to-pdf';

const ref = createRef();

function App() {
  // General From States
  const [name, setName] = useState('');
  const [stack, setStack] = useState(' ');
  const [address, setAddress] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [educations, setEducations] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [link, setLink] = useState('');
  const [showLink, setShowLink] = useState([]);

  // Education Modal States
  const [course, setCourse] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  // Education Modal Handler
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const submitHandler = () => {};
  const handleAddEducation = async () => {
    setEducations([
      ...educations,
      {
        course,
        degree,
        startDate,
        endDate,
        checkbox,
      },
    ]);

    setCourse('');
    setDegree('');
    setStartDate('');
    setEndDate('');
    setCheckbox(false);
    setShowModal(false);
  };

  const handleAddLanguage = () => {
    if (language === '') {
      alert('E be like sey na ment');
    } else {
      setLanguages([...languages, language]);
      setLanguage('');
    }
  };

  // Experience Modal Classes
  const [title, setTitle] = useState('');
  const [employer, setEmployer] = useState('');
  const [experienceStartDate, setExperienceStartDate] = useState('');
  const [experienceEndDate, setExperienceEndDate] = useState('');
  const [experienceCheckbox, setExperienceCheckbox] = useState(false);
  const [jobDescription, setJobDescription] = useState('');

  // Experience Modal Handler
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const handleShowExperienceModal = () => setShowExperienceModal(true);
  const handleCloseExperienceModal = () => setShowExperienceModal(false);

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        title,
        employer,
        experienceStartDate,
        experienceEndDate,
        experienceCheckbox,
        jobDescription,
      },
    ]);
    setTitle('');
    setEmployer('');
    setExperienceStartDate('');
    setExperienceEndDate('');
    setExperienceCheckbox(false);
    setJobDescription('');
    setShowExperienceModal(false);
  };

  // Skills Handler
  const handleAddSkill = () => {
    if (skill === '') {
      alert('I fit deck you oh');
    } else {
      setSkills([...skills, skill]);
      setSkill('');
    }
  };
  const handleAddLink = () => {
    setShowLink([...showLink, link]);
    setLink('');
    console.log('link', link);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <div style={{ background: '#f4f4f4' }}>
              <h3
                className='text-white text-center py-3 '
                style={{ background: '#003366' }}
              >
                Build Your Resume in 5mins
              </h3>

              <div className='container px-5'>
                <div
                  className='card my-5'
                  style={{
                    borderColor: '#003366',
                    borderRadius: 10,
                  }}
                >
                  <div className='card-body '>
                    <div className='container'>
                      <form className='container my-3  form-group'>
                        <input
                          type='text'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className='form-control mb-3'
                          placeholder='Enter your full name'
                          required
                        />
                        <input
                          type='text'
                          value={stack}
                          onChange={(e) => setStack(e.target.value)}
                          className='form-control mb-3'
                          placeholder='Job?'
                          required
                        />
                        <input
                          type='text'
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className='form-control mb-3'
                          placeholder='Enter your Address (City, State, Country)'
                        />
                        <input
                          type='text'
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className='form-control mb-3'
                          placeholder='Enter your phone number'
                        />
                        <input
                          type='text'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='form-control mb-3'
                          placeholder='Enter your email '
                        />

                        {educations &&
                          educations.map((edu) => (
                            <Education
                              key={Math.random() * 1000000000}
                              education={edu}
                            />
                          ))}
                        <Button
                          variant='none'
                          className='btn mb-3 waves-effect waves-light '
                          onClick={handleShowModal}
                        >
                          Add Education
                          <span style={{ fontSize: '20px' }}> &#43; </span>
                        </Button>

                        <Modal show={showModal} onHide={handleCloseModal}>
                          <Modal.Header closeButton>
                            <Modal.Title>Add Education</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <input
                              type='text'
                              placeholder='Enter Course of Study'
                              className='form-control mb-3'
                              value={course}
                              onChange={(e) => setCourse(e.target.value)}
                            />
                            <input
                              type='text'
                              placeholder='Enter Degree'
                              className='form-control mb-3'
                              value={degree}
                              onChange={(e) => setDegree(e.target.value)}
                            />
                            <div className='d-flex justify-content-between mb-3'>
                              <div className='start'>
                                <input
                                  type='month'
                                  className='form-control'
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                />
                              </div>
                              <div className='end'>
                                <input
                                  type={checkbox ? 'text' : 'month'}
                                  className='form-control '
                                  value={checkbox ? 'Present' : endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <input
                              type='checkbox'
                              className='checkbox'
                              checked={checkbox}
                              onChange={(e) => {
                                setCheckbox(!checkbox);
                                setEndDate('Present');
                              }}
                            />{' '}
                            I currently school here
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant='secondary'
                              onClick={handleCloseModal}
                            >
                              Close
                            </Button>
                            <Button
                              style={{ background: '#003366' }}
                              onClick={handleAddEducation}
                            >
                              Add
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <br />
                        {languages &&
                          languages.map((language) => (
                            <div
                              className='card py-1 px-4 my-3  flex-row justify-content-between align-items-center'
                              style={{ display: 'inline-flex' }}
                            >
                              {language}
                              <span
                                className='pl-3 '
                                style={{
                                  fontSize: 23,
                                  color: '#003366',
                                  fontWeight: 'bold',
                                }}
                              >
                                &times;
                              </span>
                            </div>
                          ))}
                        <div className=' d-flex'>
                          <input
                            type='text'
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className='form-control'
                            placeholder='Languages Spoken...'
                          />
                          <input
                            type='button'
                            value='Add'
                            className='btn '
                            onClick={handleAddLanguage}
                          />
                        </div>
                        <br />
                        {experience &&
                          experience.map((curExperience) => (
                            <Experience experience={curExperience} />
                          ))}
                        <Button
                          variant='none'
                          className='btn mb-3'
                          onClick={handleShowExperienceModal}
                        >
                          Add Work Experience{' '}
                          <span style={{ fontSize: '20px' }}> &#43; </span>
                        </Button>

                        <Modal
                          show={showExperienceModal}
                          onHide={handleCloseExperienceModal}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Work Experience</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className='d-flex justify-content-between'>
                              <input
                                type='text'
                                placeholder='Job Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='form-control mr-4'
                              />
                              <input
                                type='text'
                                placeholder='Employed at?'
                                value={employer}
                                onChange={(e) => setEmployer(e.target.value)}
                                className='form-control ml-4'
                              />
                            </div>
                            <br />
                            <div className='d-flex justify-content-between'>
                              <div className=' form-group'>
                                <label className='text-muted'>Start Date</label>
                                <input
                                  type='month'
                                  value={experienceStartDate}
                                  onChange={(e) =>
                                    setExperienceStartDate(e.target.value)
                                  }
                                  className='form-control'
                                />
                              </div>
                              <div className='form-group'>
                                <label className='text-muted'>End Date</label>
                                <input
                                  type={experienceCheckbox ? 'text' : 'month'}
                                  value={
                                    experienceCheckbox
                                      ? 'Present'
                                      : experienceEndDate
                                  }
                                  onChange={(e) =>
                                    setExperienceEndDate(e.target.value)
                                  }
                                  className='form-control'
                                />
                              </div>
                            </div>
                            <input
                              type='checkbox'
                              checked={experienceCheckbox}
                              onChange={(e) => {
                                setExperienceCheckbox(!experienceCheckbox);
                                setExperienceEndDate('Present');
                              }}
                              className='checkbox'
                            />{' '}
                            <span className='text-muted'>
                              I currently work here
                            </span>
                            <br />
                            <br />
                            <textarea
                              cols='30'
                              rows='10'
                              placeholder='Job Description. Feel free to brag about your position and what you do/did.'
                              value={jobDescription}
                              onChange={(e) =>
                                setJobDescription(e.target.value)
                              }
                              className='form-control'
                              style={{ height: 180 }}
                            ></textarea>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              style={{ background: '#003366' }}
                              onClick={handleAddExperience}
                            >
                              Add
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <br />
                        {skills &&
                          skills.sort().map((skill) => (
                            <div className='card p-2 my-3 d-flex flex-row justify-content-between'>
                              <div>{skill}</div>
                              <div>
                                <svg
                                  stroke='currentColor'
                                  fill='currentColor'
                                  strokeWidth='0'
                                  viewBox='0 0 16 16'
                                  height='1em'
                                  width='1em'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z'></path>
                                  <path
                                    fillRule='evenodd'
                                    d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                                    clipRule='evenodd'
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          ))}

                        <div className=' d-flex '>
                          <input
                            type='text'
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                            className='form-control'
                            placeholder='Enter Relevant Skill...'
                          />
                          <input
                            type='button'
                            value='Add'
                            className='btn '
                            onClick={handleAddSkill}
                          />
                        </div>
                        <br />
                        {showLink &&
                          showLink.map((link) => (
                            <div
                              key={1}
                              className='card p-2 mb-3 mr-3 flex-row justify-content-between align-items-center'
                              style={{ display: 'inline-flex' }}
                            >
                              {link}
                              <span
                                className='pl-3 '
                                style={{
                                  fontSize: 23,
                                  color: '#003366',
                                  fontWeight: 'bold',
                                }}
                              >
                                &times;
                              </span>
                            </div>
                          ))}
                        <div className='d-flex'>
                          <input
                            type='text'
                            placeholder='E.g. link to website, portfolio or github repository'
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className='form-control'
                          />
                          <input
                            type='button'
                            value='Add Link'
                            onClick={handleAddLink}
                            className='btn'
                          />
                        </div>
                        <br />
                        <Link
                          to='/resume'
                          className='btn btn-block text-white'
                          onClick={submitHandler}
                          style={{ background: '#003366' }}
                        >
                          Submit
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path='/resume'
          render={() => (
            <>
              <Pdf targetRef={ref} filename='resume.pdf'>
                {({ toPdf }) => (
                  <button onClick={toPdf}>Generate as Pdf</button>
                )}
              </Pdf>
              <div ref={ref} className='display'>
                <NavBar
                  name={name}
                  stack={stack}
                  address={address}
                  phone={phone}
                  email={email}
                />
                <div className='grid'>
                  <div className='grid-1'>
                    <Left
                      education={educations}
                      languages={languages}
                      links={showLink}
                    />
                  </div>
                  <div className='grid-2'>
                    <Right experience={experience} skills={skills} />
                  </div>
                </div>
              </div>
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
