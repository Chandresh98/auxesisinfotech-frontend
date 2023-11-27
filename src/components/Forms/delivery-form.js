import React, { useState, useEffect } from "react";
import Delivery_Address2 from "./Delivery-Address2";
import DNI from "./DNI-Instruction";
import Confirmation from "./Confirmation";
import Progress_Bar from "./Progress-Bar";
import Summary from "../Cart/Summary";
import Product_data from "../Cart/Product-Data";
import Email from "./Email-Step";
import Email_Register from "./Email-Register";
import Unregister_User from "./Unregister-User";
import Personal_details from "./Personal-Details";
import Delivery_Address1 from "./Delivery-Address";
import Billing from "./Payment"

const Form = () => {
    const [activeStep, setActiveStep] = useState(() => {
        const storedStep = localStorage.getItem("activeStep");
        return storedStep ? parseInt(0, 10) : 0;  
      });
    
      // Update localStorage whenever the active step changes
      useEffect(() => {
        localStorage.setItem("activeStep", activeStep.toString());
      }, [activeStep]);

  console.log("Current activeStep:", activeStep);

    return (
        <>
           <div className='body-inner pt'>
                <div className="form-section">
                    <div className="container">
                        <div>
                            <div className="pro-responsive">
                                <Progress_Bar activeStep={activeStep} /> 
                            </div>
                        </div>
                        <div className="form-outer">
                            <div className="row col-outer">
                                <div className="col-lg-6 pl-0">
                                    <div className="form-left">
                                        <div>
                                            {activeStep == 0 && <DNI setActiveStep={setActiveStep} />}
                                            {/* {activeStep == 0 && <Email setActiveStep={setActiveStep} />} */}
                                            {activeStep == 1 && <Email_Register setActiveStep={setActiveStep} />}
                                            {activeStep == 2 && <Unregister_User setActiveStep={setActiveStep} />}
                                            {activeStep == 3 && <Personal_details setActiveStep={setActiveStep} />}
                                            {activeStep == 5 && <Delivery_Address1 setActiveStep={setActiveStep} />}
                                            {activeStep == 6 && <Delivery_Address2 setActiveStep={setActiveStep} />}
                                            {activeStep == 7 && <Billing setActiveStep={setActiveStep} />}
                                            {activeStep == 8 && <Confirmation setActiveStep={setActiveStep} />}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pr-0">
                                    <div className="form-right">
                                        <div className="pro-desktop">
                                          <Progress_Bar activeStep={activeStep} /> 
                                        </div>
                                        <Product_data/>
                                        {activeStep === 9 && <Summary activeStep={activeStep}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;