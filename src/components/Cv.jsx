function Cv({profile}){
    return ( 
        <div className="cv-main">
            <div className="cv-section">
                <h3>General Information</h3>
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>Phone: {profile.phone}</p>
            </div>
            <div className="cv-section">
                <h3>Education</h3>
                <p>School name: {profile.school_name}</p>
                <p>Title of study: {profile.study_title}</p>
                <p>Date of study: {profile.date_study}</p>
            </div>
            <div className="cv-section">
                <h3>Practical experience</h3>
                <p>Company name: {profile.company_name}</p>
                <p>Position: {profile.position}</p>
                <p>Main responsibilities: {profile.respon}</p>
                <p>Work dates: {profile.work_from && new Date(profile.work_from).toDateString()} - {profile.work_to && new Date(profile.work_to).toDateString()}</p>
            </div>
        </div>
    )
}

export default Cv