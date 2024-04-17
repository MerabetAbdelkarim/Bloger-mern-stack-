
function Login() {
  return (
    <div className="container mt-4">


      <h2 className="text-center"> Login to author account </h2>

      <div className="col-6 mx-auto">




        <input type="text" className="form-control m-1" placeholder="email" />
        <input type="password" className="form-control m-1" placeholder="password" />

        <button className="btn btn-dark form-control m-1">Login</button>


      </div>

    </div>
  )
}

export default Login