import React from 'react'
import {Link} from 'react-router-dom'

const Headers = () => {
  const signup = () => (
    <div className="container">
   {/* The Modal */}
   <div className="modal fade" id="signup">
     <div className="modal-dialog">
       <div className="modal-content pb-4">
         {/* Modal Header */}
         <div className="modal-header">
            
          
           <button type="button" className="close btn  btn-circle" style={{color:"#000",fontSize:'1.2rem', background:"#fff", padding:"10px", width:"40px", height:"40px"}}  data-dismiss="modal">×</button>
         </div>
         {/* Modal body */}
         <div className="modal-body">
           <div className="text-intro" style={{fontFamily:"poppins"}}>
               <div className="container header-title">
               <h6 className="modal-title">CREATE A FREE ACCOUNT</h6>
               <p className="text-danger" >Play your first game for FREE!</p>
               </div>
              <div className="container d-flex align-items-center justify-content-md-between" >
              <button type="button" className="btn  py-2 px-3 my-0" style={{background:"#3b5998",
                  color:"#fff",
                  fontSize: ".8rem",
                  textTransform: "uppercase",}}><i className="fa fa-facebook  pr-2"></i> Sign In with facebook
                  </button> 
                  <button type="button" className="btn  py-2 px-3 my-0" style={{background:"#BA0B0B",
                  color:"#fff",
                  fontSize: ".8rem",
                  textTransform: "uppercase",}}><i className="fa fa-google-plus pr-2"></i> Sign In with Google
                  </button> 
              </div>
               <div className="container">
               <p className="divider-text">
                  <span className="bg-light">OR</span>
              </p>
               </div>
             {/*  Modal submit  */}

             <form >     
               <div className="container">
                <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Full name<span>*</span></label>
                    <input type="text"     className="form-control form-control-alternative"  />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Email<span>*</span></label>
                    <input type="text"     className="form-control form-control-alternative" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Date of birth<span>*</span></label>
                    <input type="text"  className="form-control form-control-alternative"  />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Password<span>*</span></label>
                    <input type="text"   className="form-control form-control-alternative"   />
                  </div>
                </div>
              </div>
            </div>
            <br />
           
            
            <div className="col-12">
                <button type="submit" className="btn  py-2 px-3 my-0" style={{background:"#BA0B0B",
                  color:"#fff",
                  fontSize: ".8rem",
                  textTransform: "uppercase",}}>Create Account
                  </button>  <small className="pl-3 small">Have an account? <span className="text-danger ">Sign In</span></small>
            </div>
            
            </form>
              </div>
          
         </div>
       </div>
     </div>
   </div>
 </div>
 
   
  )


 const  signin =()=>(
  <div className="container">
  {/* The Modal */}
  <div className="modal fade" id="signin">
    <div className="modal-dialog">
      <div className="modal-content pb-4">
        {/* Modal Header */}
        <div className="modal-header">   
          <button type="button" className="close btn  btn-circle" style={{color:"#000",fontSize:'1.2rem', background:"#fff", padding:"10px", width:"40px", height:"40px"}}  data-dismiss="modal">×</button>
        </div>
        {/* Modal body */}
        <div className="modal-body">
          <div className="text-intro" style={{fontFamily:"poppins"}}>
              <div className="container header-title">
              <h6 className="modal-title pb-4">LOGIN</h6>
              </div>
            {/*  Modal submit  */}

            <form >     
              <div className="container">
             <div className="row">
               <div className="col-lg-12">
                 <div className="form-group focused">
                   <label className="form-control-label" >Email<span>*</span></label>
                   <input type="text"  className="form-control form-control-alternative"  />
                 </div>
               </div>
               <div className="col-lg-12">
                 <div className="form-group focused mb-1">
                   <label className="form-control-label" >Password<span>*</span></label>
                   <input type="text"   className="form-control form-control-alternative"   />
                 </div>
               </div>
               <div className="col-lg-12">
                
                  <div className="pull-right">
                  <label className="form-control-label " >Forgot password?</label>
                  </div>
                
               </div>
             </div>
           </div>
           <br />
          
           
           <div className="col-12">
               <button type="submit" className="btn  py-2 px-3 my-0" style={{background:"#BA0B0B",
                 color:"#fff",
                 fontSize: ".8rem",
                 textTransform: "uppercase",}}>Sign In
                 </button>  <small className="pl-3 small">Don't have an account? <span className="text-danger ">Sign up</span></small>
           </div>
           
           </form>
             </div>
         
        </div>
      </div>
    </div>
  </div>
</div>
  )
    return (
  <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"/create"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/index"} className="nav-link">
                Records
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  </div>


    )
}

export default Headers
