import './App.css';
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Left } from './Components/layout/Left';
import { Right } from './Components/layout/Right';
import NavBar from './Components/navbar/NavBar';
import Resume from './Components/Resume';

function App() {
  const [name, setName] = useState('');
  const [stack, setStack] = useState(' ');
  const [address, setAddress] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [photo, setPhoto] = useState(' ');
  const [education, setEducation] = useState('');
  const [language, setLanguage] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <Fragment>
              <div>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your full name'
                />
                <input
                  type='text'
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                  placeholder='Enter Stack '
                />
                <input
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Enter your Address (City, State, Country)'
                />
                <input
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Enter your phone number'
                />
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email '
                />
                <input
                  type='file'
                  name='fileToUpload'
                  id='fileToUpload'
                  filename={photo}
                  onChange={(e) => setPhoto(e.value)}
                />

                <button onClick={submitHandler}>
                  <Link to='/resume'>Submit</Link>
                </button>
              </div>
            </Fragment>
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
                  <Left photo={photo} education={education} />
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
