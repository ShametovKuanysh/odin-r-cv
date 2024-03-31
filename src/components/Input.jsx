function Input({title, type, code, updFunc, profile}){

    return <div className="input-field">
        <label htmlFor={title}>{title}</label>
        <input id={title}
                type={type} 
                value={profile[code]} 
                onChange={(e) => updFunc(code, e.target.value)}/>
    </div>
}

export default Input