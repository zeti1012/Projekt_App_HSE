import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <input type="text" id="username" className="form-control" name='username'/>
                <label className="form-label" for="form2Example1">Username</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                {/* verwendung zu prüfen!!! <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div> */}
            </div>

                <div className="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Passwort vergessen?</a>
                </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

            {/* <!-- Register Info --> */}
            <div className="text-center">
                <p>Für die Registrierung bitte den Admin kontaktoieren</p>
                
            </div>
        </form>    
    </div>
  )
}

export default Login