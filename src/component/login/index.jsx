import { useState } from 'react';
import './index.css'
const Login = () =>{

    const [allValue,setValue]=useState({
        username:"",
        password:"",
        showErrorMsg:false,
        errorMsg:""
    })

    const onSubmitUserDetails =async (Event) =>{
        Event.preventDefault();

        let url="https://apis.ccbp.in/login"



       let userDetails={
        username:allValue.username,
        password:allValue.password
       }



        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }


          let response=await fetch(url,options)
          let fetchData= await response.json();

          console.log(fetchData.error_msg);

          if (response.ok===true){
            setValue({...allValue,showErrorMsg:false,errorMsg:""});
          }             
         else{
            setValue({...allValue,showErrorMsg:true,errorMsg:fetchData.error_msg})
         }
    }

    const onChangeusername =(event)=>{
        setValue({...allValue,username:event.target.value});
        
    }

    const onChangepassword = (event)=>{
        setValue({...allValue,password:event.target.value});

        
    }
        
        
      




    return(
        <div className="login-cont">
    <form onSubmit={onSubmitUserDetails} className="form-cont">
        <div className="img-cont">
            <img className="web-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
             alt="website logo" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail"  className="from-label mb-1">USERNAME</label>
            <input type="text" className="form-control" id="exampleInputEmail" onChange={onChangeusername}/>
        </div>
        <div className="mb-2">
            <label htmlFor="ExampleInputPassword" className="form-label">PASSWORD</label>
            <input type="password" className="form-control" id="ExampleInputPassword" onChange={onChangepassword} />
        </div>
        <br />
        <button type="submit" className="btn btn-primary w-100 mb-1 red">Submit</button>
        <br />
         {allValue.showErrorMsg ? (<p className='text-danger'>{allValue.errorMsg}</p>):null }
    </form>
   </div> 
    )
}

   

    export default Login