import React from 'react';
import {Link} from 'react-router-dom';
import './404.css';

function page404(){
    return(
        <section className="error-wrapper page-404">
             <div className="row">
                <div className="col-auto" >
                    <div className="disc_logo mt-0"><img src={process.env.PUBLIC_URL + '/disconnect_logo.png'}/>

                    <div className="big-text">
                        <span>4</span>
                        <span>
                            <div className="l_loading">
                                
                                <svg className="animate-lp" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-highlight" width="200" height="200" stroke="white" strokeWidth="30" strokeDasharray="20,100" fill="none" cx="50" cy="50" r="30"></circle>
                                    <circle className="circle-white" width="200" height="200" stroke="white" strokeWidth="13" strokeDasharray="100,100" strokeLinecap="round" fill="none" cx="50" cy="50" r="16"></circle>
                                    <circle className="circle-white-animate" widht="100" height="100" stroke="#d9d9d9" strokeWidth="10" strokeLinecap="round" fill="none" cx="50" cy="50" r="16"></circle>
                                    <circle className="circle-purple" stroke="#12b8f0" strokeWidth="6" strokeDasharray="100,100" strokeLinecap="round" fill="none" cx="50" cy="50" r="6"></circle>
                                    <circle className="circle-purple-animate" stroke="#0a7cb3" strokeWidth="3" strokeDasharray="20,100" fill="none" cx="50" cy="50" r="6"></circle>
                                    <circle className="circle-lines" stroke="#333333" strokeWidth="0.5" strokeDasharray="50,100" strokeLinecap="round" fill="none" cx="50" cy="50" r="28"></circle>
                                    <circle className="circle-lines" stroke="#4d4d4d" strokeWidth="0.5" strokeDasharray="30,100" strokeLinecap="round" fill="none" cx="50" cy="50" r="33"></circle>
                                    <circle className="circle-lines" stroke="# #333333" strokeWidth="0.5" strokeDasharray="50,100" strokeLinecap="round" fill="none" cx="50" cy="50" r="33"></circle>
                                    <circle className="circle-lines" stroke=" #404040
                                    " strokeWidth="0.5" strokeDasharray="10,100" strokeLinecap="round" fill="none" cx="50" cy="50" r="40"></circle>
                                </svg>
                                
                                <p className="loader__label"></p>
                            </div>
                        </span>
                        <span>4</span>
                    </div>
                    <h3>Oops.. Page Not Found!</h3>
                    <Link to='/' type="submit" class="btn btn-success" id="submitBtn_customer" name="submit">Back To Home</Link>
                    </div>
                </div>
              </div>
        </section>
    );
}
export default page404;