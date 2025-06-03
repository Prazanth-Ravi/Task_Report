import img from "../image/Mobile login-rafiki.png"

const Mb = () => {
  return (
    <div>
      <div className="mob">
        <div>
          <img src={img} alt="UnGraduation" className="img" />
        </div>
        <form>
          <div className="login">
            <label className="lb">
              <h4 className="lb">Login</h4>
            </label>
            <br></br>
            <label className="lb">Enter Your Credentials</label>
            <br></br>
            <input className="input" placeholder="Email"></input>
            <br></br>
            <input
              className="input"
              placeholder="Password"
              type="password"
            ></input>
            <a className="lb" href="#">
              Forgot Password?
            </a>
            <br></br>
            <button className="btn btn-primary">Login</button>
            <br></br>
            <label className="lb">
              Don't have an account?{" "}
              <a className="lb" href="/signup">
                Sign Up
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>  
    )
}

export default Mb