
function CreateArticle() {
  return (
    <div className="container mt-4">


      <h2 className="text-center"> Create article  </h2>

      <div className="col-6 mx-auto">



        <input type="text" className="form-control m-1" placeholder="title"/>
          <ul>
            <li > tag </li>
          </ul>
          <div className="row m-1" >
            <input type="text" className="form-control w-75" placeholder="tag"/>
              <button className="btn btn-dark w-25"  >Add</button>

          </div>

          <input type="file" className="form-control m-1" placeholder="image"/>
            <textarea title="" id="" cols="30" rows="4" placeholder="description" className="form-control m-1" ></textarea>

            <div className="m-1">
              <textarea  placeholder="Enter text here..." ></textarea>

          </div>

          <button className="btn btn-dark form-control m-1">create</button>


      </div>

    </div>
  )
}

export default CreateArticle