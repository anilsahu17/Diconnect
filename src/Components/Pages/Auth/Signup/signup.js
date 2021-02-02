import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Testimonials from '../../../../Components/Elements/Testimonial/testimonial';
import Animation from 'react-animate-on-scroll';
import './signup.css';

function Signup() {

    // form validation
    const [ btnClass, setBtnClass ] = useState(" ");
    const [ user, setUser ] = useState({
        userName:"",
        emailId:"",
        password:"",
        c_password:""
    });
    
    const {userName, emailId, password, c_password} = user;

    const onChangeInput = (e)=> {
      setUser({ ...user, [e.target.name] : e.target.value });
    }


    const SignupForm = (e) =>{
        e.preventDefault();
        setBtnClass("clicked");

        console.log(userName,emailId,password);
        
        setTimeout( ()=>{ setBtnClass("clicked done"); },2000);
        setTimeout( ()=>{ setBtnClass(""); setUser({userName:"",emailId:"",password:"",c_password:""}); },3000);

        
    }

    return (
            <section className="fxt-template-animation fxt-template-layout20 loaded" id="roboto">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-12 fxt-none-9911 fxt-bg-img mobile_none" >
                            <div className="disc_logo"><img src={process.env.PUBLIC_URL + '/disconnect_logo.png'}/></div>

                            <Testimonials ></Testimonials>

                        </div>
                        
                        <div className="col-xl-6 col-lg-6 col-12 fxt-bg-color">

                            <div className="fxt-content">
                                <Animation className="fxt-header " animateIn="fadeInUp" delay={400} initiallyVisible={false} >
                                    <h2 className="mt-25">Registration</h2>
                                </Animation>
                                <div className="fxt-form">
                                    <form  id="registerfrm" onSubmit={ (e) => SignupForm(e) } >
 
                                        <input id="website" name="website" type="hidden" value="" />
                                        
                                        <input type="hidden" name="_token" value="" />
                                        <Animation className="form-group" animateIn="fadeInUp" delay={550} initiallyVisible={false}>

                                            <div className="fxt-transformY-50 fxt-transition-delay-1">

                                                <input type="text" className="form-control" id="userName" value={userName}

                                                    name="userName" placeholder="Name" onChange={ (e)=> onChangeInput(e) } />

                                            </div>

                                        </Animation>

                                        <Animation className="form-group" animateIn="fadeInUp" delay={600} initiallyVisible={false}>

                                            <div className="fxt-transformY-50 fxt-transition-delay-2">

                                                <input type="email" className="form-control" id="emailId" value={emailId}

                                                    name="emailId" placeholder="Email" onChange={ (e)=> onChangeInput(e)} />

                                            </div>

                                        </Animation>

                                        <Animation className="form-group" animateIn="fadeInUp" delay={650} initiallyVisible={false}>

                                            <div className="fxt-transformY-50 fxt-transition-delay-2">

                                                <input type="password" className="form-control" id="password" value={password}

                                                    name="password" placeholder="Password" onChange={ (e)=> onChangeInput(e)} />

                                            </div>

                                        </Animation>

                                        <Animation className="form-group" animateIn="fadeInUp" delay={700} initiallyVisible={false}>

                                            <div className="fxt-transformY-50 fxt-transition-delay-2">

                                                <input type="password" className="form-control" id="c_password" id="password" value={c_password}

                                                    name="c_password" placeholder="Confirm Password" onChange={ (e)=> onChangeInput(e)}  />

                                            </div>

                                        </Animation>

                                        <Animation className="form-group" animateIn="fadeInUp" delay={750} initiallyVisible={false}>

                                            <div className="fxt-transformY-50 fxt-transition-delay-2">

                                                <div className="g-recaptcha" data-sitekey="6Lf6PM8ZAAAAAHiqkqDIeB4UGXT0XYOIeDb2UpyB"></div>

                                            </div>

                                        </Animation>

                                        <div className="form-group" >

                                            <Animation className="fxt-transformY-50 fxt-transition-delay-4" animateIn="fadeInUp" delay={800} initiallyVisible={false}>

                                                <button type="submit" className={`animateBtn fxt-btn-fill `+ btnClass }  >
                                                    <span>Create Account</span>
                                                    <svg className="load" version="1.1"x="0px" y="0px" width="30px" height="30px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                                                        <path opacity="0.3" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                                                        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                                                        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                                                        <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                                                        C22.32,8.481,24.301,9.057,26.013,10.047z">
                                                        <animateTransform attributeType="xml"
                                                        attributeName="transform"
                                                        type="rotate"
                                                        from="0 20 20"
                                                        to="360 20 20"
                                                        dur="0.5s"
                                                        repeatCount="indefinite"/>
                                                        </path>
                                                    </svg>
                                                    <svg className="check" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                                    </svg>
                                                </button>

                                            </Animation>

                                            <Animation className="fxt-style-line" animateIn="fadeInUp" delay={600} initiallyVisible={false}>
                                                <div className="fxt-transformY-50 fxt-transition-delay-5">
                                                    <h3>Or Signup With</h3>
                                                </div>
                                            </Animation>
                                            <ul className="fxt-socials">
                                                <li className="fxt-google">
                                                    <Animation className="fxt-transformY-50 fxt-transition-delay-6" animateIn="fadeInUp" delay={700} initiallyVisible={false}>
                                                        <a href="#" title="Login with Google">
                                                            <i className="fab fa-google-plus-g"></i><span>Signup with Google +</span>
                                                        </a>
                                                    </Animation>
                                                </li>

                                                <li className="fxt-facebook">
                                                    <Animation className="fxt-transformY-50 fxt-transition-delay-8" animateIn="fadeInUp" delay={750} initiallyVisible={false}>
                                                        <a href="#" title="Login with Facebook">
                                                            <i className="fab fa-facebook-f"></i><span>Signup with Facebook</span>
                                                        </a>
                                                    </Animation>
                                                </li>
                                            </ul>

                                        </div>

                                    </form>

                                </div>

                                <Animation className="fxt-footer" animateIn="fadeInUp" delay={850} initiallyVisible={false}>

                                    <div className="fxt-transformY-50 fxt-transition-delay-5 disc">

                                        <p className="mb-0">Already have a <span>DisConnect</span> account?<Link to="/" className="switcher-text">Login</Link></p>

                                    </div>

                                </Animation>

                            </div>

                        </div>


                        
                        <div className="col-xl-6 col-lg-6 col-12 fxt-none-9911 fxt-bg-img mobile_display" >
                            <div className="disc_logo mobile_none"><img src={process.env.PUBLIC_URL + '/disconnect_logo.png'} /></div>


                             <Testimonials ></Testimonials>
                           

                        </div>
                    </div>
                </div>
            </section>
    );
  
}
  
export default Signup;

