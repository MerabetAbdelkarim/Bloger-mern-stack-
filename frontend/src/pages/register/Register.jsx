
function Register() {
  return (
    <>
      <div className="container mt-4">


        <h2 className="text-center"> Create author account </h2>

        <div className="col-6 mx-auto">



          <input type="text" className="form-control m-1" placeholder="name" />
          <input type="text" className="form-control m-1" placeholder="lastname" />
          <input type="text" className="form-control m-1" placeholder="email" />
          <input type="password" className="form-control m-1" placeholder="password" />
          <input type="file" className="form-control m-1" placeholder="image" />
          <textarea name="" id="" cols="30" rows="4" placeholder="about" className="form-control m-1" ></textarea>

          <button className="btn btn-dark form-control m-1">Register</button>


        </div>

      </div>
    </>
  )
}

export default Register