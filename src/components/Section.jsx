import Input from "./Input"
import '../styles/main.css'
import { useState } from "react"

function Section({title, fields, updFunc, profile}){

    const [show, setShow] = useState(false)

    const showSection = () => {
        setShow(!show)
    }

    return <div className="section">
        <div className="section-header">
            <h3>{title}</h3>
            <button onClick={() => showSection()}>{show ? 'Hide' : 'Edit'}</button>
        </div>
        
        { show && 
        <div className="fields">
            {fields.map(field => 
                <Input  key={field.title} 
                        updFunc={updFunc} 
                        title={field.title} 
                        profile={profile}
                        code={field.code}
                        type={field.type}/>)}
        </div>
        }
    </div>
}

export default Section