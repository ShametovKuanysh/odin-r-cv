// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Cv from './components/Cv'
import Section from './components/Section'

function App() {
  const gifields = [{type: 'text', code: 'name', title: 'Name'},{type: 'email', code: 'email', title: 'Email'},{type: 'number', code: 'phone', title: 'Phone'}]
  const eefields = [{type: 'text', code: 'school_name', title: 'School name'},{type: 'text', code: 'study_title', title: 'Title of study'},{type: 'date', code: 'date_study', title: 'Date of study'}]
  const pefields = [{type: 'text', code: 'company_name', title: 'Company name'},{type: 'text', code: 'position', title: 'Position title'},{type: 'text', code: 'respon', title: 'Main responsibilities'},{type: 'date', code: 'work_from', title: 'Worked from'},{type: 'date', code: 'work_to', title: 'Worked until'}]
  const [profile, setProfile] = useState({
    name:'', email: '', phone: '', school_name: '', study_title: '', date_study: '', company_name: '', position: '', respon: '', work_from: '', work_to: ''
  })

  const updateProfile = (field, value) => {
    setProfile({...profile, [field]: value})
  }

  return (
    <div className='main'>
      <div className='sections'>
        <Section updFunc = {updateProfile} profile={profile} title={'General Information'} fields={gifields}/>
        <Section updFunc = {updateProfile} profile={profile} title={'Educational experience'} fields={eefields}/>
        <Section updFunc = {updateProfile} profile={profile} title={'Practical experience'} fields={pefields}/>
      </div>
      <div className='cv'>
        <Cv profile={profile}></Cv>
      </div>
    </div>
  )
}

export default App
