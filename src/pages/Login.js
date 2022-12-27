
import "../style.scss";
export const Login = () => {
    return (
        <div className="form_container">
            <div className="form_wrapper">
                <span className="logo">Catch-Up Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign In</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    )
};

