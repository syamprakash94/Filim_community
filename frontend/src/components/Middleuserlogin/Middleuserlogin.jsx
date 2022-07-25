import React from "react";
import "./Middleuserlogin.css"

const Middleuserlogin = () => {



  return (
    <div className="middleregwrapp">
      <div class="container register">
        <div class="row">
          
          <div class="col-md-9 register-right">
          
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Login Here</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                 
                   
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email *"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password *"
                        value=""
                      />
                    </div>
                    
                 
                  </div>
                  <div class="col-md-6">
               
                 
                    

                    <input type="submit" class="btnRegister" value="CONTINUE" />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middleuserlogin;
