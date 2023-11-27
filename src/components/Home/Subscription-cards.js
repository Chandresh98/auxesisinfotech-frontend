import React from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect, useState } from "react";

const Card = (props) => {

    const [lastActiveIndex, setLastActiveIndex] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const subscriptionElements = $(".single-subscription");
        const viewportHeight = window.innerHeight;
        const headerMargin = 90; // Set your desired margin
  
        subscriptionElements.each(function (index) {
          const boundingBox = this.getBoundingClientRect();
  
          // Check if the element is in the viewport
          if (boundingBox.top >= headerMargin && boundingBox.bottom <= viewportHeight + headerMargin) {
            if (index !== lastActiveIndex) {
              // Remove "active" class from the last active element
              subscriptionElements.eq(lastActiveIndex).removeClass("active");
  
              // Add "active" class to the current element
              $(this).addClass("active");
  
              // Update the last active index
              setLastActiveIndex(index);
            }
          }
        });
      };
  
      const isMobile = window.innerWidth <= 991;
  
      if (isMobile) {
        // Initial check on mount
        handleScroll();
  
        // Attach scroll event listener
        $(window).on("scroll", handleScroll);
  
        // Clean up event listener on component unmount
        return () => {
          $(window).off("scroll", handleScroll);
        };
      }
    }, [lastActiveIndex]);

    useEffect(() => {
        const handleHover = function() {
          $(".col-lg-4:nth-child(2) .single-subscription").addClass("active");
        };
    
        if (window.innerWidth > 991) {
          handleHover();
    
          $(".col-lg-4:first-child .single-subscription").mouseenter(function() {
            $(".col-lg-4:nth-child(2) .single-subscription").removeClass("active");
            $(this).addClass("active");
          });
    
          $(".col-lg-4:last-child .single-subscription").mouseenter(function() {
            $(".col-lg-4:nth-child(2) .single-subscription").removeClass("active");
            $(this).addClass("active");
          });
    
          $(".col-lg-4:first-child .single-subscription").mouseover(function() {
            $(".col-lg-4:nth-child(2) .single-subscription").removeClass("active");
          });
    
          $(".col-lg-4:first-child .single-subscription").mouseleave(function() {
            $(".col-lg-4:nth-child(2) .single-subscription").addClass("active");
            $(this).removeClass("active");
          });
    
          $(".col-lg-4:last-child .single-subscription").mouseleave(function() {
            $(".col-lg-4:nth-child(2) .single-subscription").addClass("active");
            $(this).removeClass("active");
          });
        }
    
        // Clean up event listeners on component unmount
        return () => {
          $(".col-lg-4:first-child .single-subscription, .col-lg-4:last-child .single-subscription").off("mouseenter mouseover mouseleave");
        };
      }, []); // Empty dependency array ensures the effect runs once after the initial render


      

    return (
        <>
            <div className="col-lg-4">
                <div className="single-subscription h-100">
                    <div className="subscription-img">
                        <img src={props.image} alt="" loading="lazy"></img>
                    </div>
                    <div>
                        <h5><strong>{props.title_front} |</strong> {props.title_back}</h5>
                        <div className="subscription-span"><span>{props.span}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;