import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Left } from './Components/layout/Left';
import { Right } from './Components/layout/Right';
import NavBar from './Components/navbar/NavBar';
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function App() {
  // General From States
  const [name, setName] = useState('');
  const [stack, setStack] = useState(' ');
  const [address, setAddress] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [education, setEducation] = useState([]);
  const [language, setLanguage] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  // Education Madal States
  const [course, setCourse] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Modal State
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const submitHandler = () => {
    // console.log(course, degree, startDate, endDate);
  };
  const handleAddEducation = () => {
    // console.log(course, degree, startDate, endDate);
    setEducation([
      ...education,
      {
        course,
        degree,
        startDate,
        endDate,
      },
    ]);
    setShowModal(false);
  };
  console.log(education);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <div style={{ background: '#f3f3f3' }}>
              <h3
                className='text-white text-center py-3 '
                style={{ background: '#003366' }}
              >
                Build Your Resume in 5mins
              </h3>

              <div className='container px-5'>
                <div className='card my-5'>
                  <div className='card-body '>
                    <div className='container'>
                      <form className='container my-3  form-group required'>
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
                                  type='date'
                                  className='form-control'
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                />
                              </div>
                              <div className='end'>
                                <input
                                  type='date'
                                  className='form-control '
                                  value={endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <input type='checkbox' className='checkbox' />{' '}
                            Currently schooling there
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant='secondary'
                              onClick={handleCloseModal}
                            >
                              Close
                            </Button>
                            <Button
                              variant='primary'
                              onClick={handleAddEducation}
                            >
                              Add
                            </Button>
                          </Modal.Footer>
                        </Modal>

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
          render={(props) => (
            <>
              <NavBar
                name={name}
                stack={stack}
                address={address}
                phone={phone}
                email={email}
              />
              <div className='grid'>
                <div className='grid-1'>
                  <Left education={education} />
                </div>
                <div className='grid-2'>
                  <Right
                    language={language}
                    experience={experience}
                    skills={skills}
                  />
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
