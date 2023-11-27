import React, { useEffect } from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

const Card = (props) => {

   useEffect(()=>{
         $(document).ready(function(){
            $('.single-question:first-child button.btn').removeClass('collapsed');
         });
   }, []);


    return (
        <>
            <div className="card single-question">
                <div className="card-header p-0" id={props.aria_label_id}>
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={props.data_target_id} aria-expanded="true" aria-controls="collapseOne">
                            {props.question} <i className="fa-solid fa-plus"></i> <i className="fa-solid fa-minus"></i>
                        </button>
                    </h5>
                </div>

                <div id={props.id} className="collapse" aria-labelledby={props.aria_label_id} data-parent="#accordion">
                    <div className="card-body">
                        {props.answer}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;