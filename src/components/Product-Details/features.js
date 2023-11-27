import React from "react";
import { useTranslation } from 'react-i18next';

const Features = ({ features }) => {
   const { t } = useTranslation();

   if (!features || !features.length) {
       return null;
   }
   console.log("Features in Features Component:", features);

   return (
       <>
          {features.length > 0 && (
           <div className="features section-padding bg-gray">
               <div className="container">
                   <h2 className="main-heading2">{t('Product_Page_Features_Heading')}</h2>
                   <div className="features-outer">
                       <div className="row">
                           {features.map((feature) => (
                               <div className="col-3 my-3" key={feature.id}>
                                   <div className="features-single">
                                       {feature.Feature_Image?.data && feature.Feature_Image.data[0]?.attributes.url && (
                                           <div className="icon-img">
                                               <img src={process.env.REACT_APP_DEV_URL + feature.Feature_Image.data[0].attributes.url} alt="" loading="lazy"></img>
                                           </div>
                                       )}
                                      
                                       <h5>{feature.Feature_Name}</h5>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
           )}
       </>
   );
}

export default Features;