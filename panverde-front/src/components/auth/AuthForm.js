import React, {useState} from 'react'

function AuthForm() {
    const [user, setUser] = useState({})
    
    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setUser({[name]: value,})

    }
    const hanldeClick = (event) => {
        event.preventDefault();
        console.log('el click')
        console.log('>>>>>>>',user)
    }
    return (
        
            <div className="uk-width-1-2">
        <form className="uk-form-stacked">

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Email:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input name ="email" onChange={handleChange} className="uk-input" type="email" />
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="password">Password:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                    <input  name ="password" onChange={handleChange} className="uk-input" type="password" />
                </div>
            </div>

            <div>
                <button  onClick={hanldeClick}className="uk-button uk-button-primary">Login</button>
            </div>

        </form>
    </div>
        
    )
}

export default AuthForm
