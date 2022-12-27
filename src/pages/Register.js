
import "../style.scss";
import addAvatar from "../img/addAvatar.png";
const Register = () => {
    return (
        <div className="form_container">
            <div className="form_wrapper">
                <span className="logo">Catch-Up Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={addAvatar}  />
                        <span>add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    )
};

export default Register;