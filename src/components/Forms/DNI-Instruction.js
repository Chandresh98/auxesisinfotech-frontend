import React from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import axios from "axios";

const DNI = ({ setActiveStep }) => {
  const initialValues = { id: "", dob: "" };
  const [dniValues, setDniValues] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [country, setCountry] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    setSelectedFile2(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleRemoveFile2 = () => {
    setSelectedFile2(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDniValues({ ...dniValues, [name]: value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Upload Image 1
      let image1FormData = new FormData();
      image1FormData.append("files", selectedFile);

        const uploadImage1Response = await axios.post('http://localhost:1337/api/upload/', image1FormData);
        
        const image1Id = uploadImage1Response.data[0].id;
console.log({image1Id})
      // Step 2: Upload Image 2
      const image2FormData = new FormData();
      image2FormData.append("files", selectedFile2);
      const uploadImage2Response = await axios.post(
        "http://localhost:1337/api/upload/",
        image2FormData
      );
      const image2Id = uploadImage2Response.data[0].id;

      // Step 3: Update contact with image IDs
      const contactId = localStorage.getItem("contactId");
      console.log({contactId})
      const updateContactResponse = await axios.put(
        `http://localhost:1337/api/contacts/${contactId}?populate=*`,
        {
          data: {
            DNI_ID: dniValues.id,
            DOB: dniValues.dob,
            Image_1: image1Id,
            Image_2: image2Id,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!updateContactResponse.data) {
        throw new Error("Failed to update contact");
      }

      console.log("Contact updated successfully:", updateContactResponse.data);
      setActiveStep(5);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("selectedFile:", selectedFile);
  console.log("selectedFile2:", selectedFile2);

  console.log(country);

  const { t } = useTranslation();

  return (
    <>
      <div className="dni-instructions">
        <a onClick={() => setActiveStep(3)} href="#" className="back-btn mb-5">
          <i className="fa-solid fa-chevron-left"></i>
          {t("Back_Button")}
        </a>
        <h2 className="main-heading2 mb-2">{t("DNI_Instructions")}</h2>
        <div className="form-box">
          <form className="address-form" onSubmit={formSubmitHandler}>
            <p>{t("DNI_Instructions_Text")} </p>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="number">{t("Id")}</label>
                <input
                  type="number"
                  id="number"
                  name="id"
                  required
                  placeholder={t("Id Placeholder")}
                  value={dniValues.id}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="number">{t("Date of Birth")}</label>
                <input
                  type="date"
                  id="number"
                  name="dob"
                  required
                  value={dniValues.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="Nationality">{t("Nationality")}</label>
                <CountryDropdown
                  id="country-select1"
                  className="country-dropdown"
                  preferredCountries={["gb", "us"]}
                  value={country}
                  onChange={(value) => {
                    setCountry(value);
                  }}
                ></CountryDropdown>
              </div>
              <div className="col-lg-6 col-md-6">
                <label htmlFor="firstname">{t("ID Photo 1")}</label>
                <div className="file-field image-file">
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={handleFileChange}
                  />
                  <label>{t("Upload_Image")}</label>
                  {selectedFile && (
                    <div className="image-name">
                      <p className="mb-0">{selectedFile.name}</p>
                      <button className="btn" onClick={handleRemoveFile}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <label htmlFor="lastname">{t("ID Photo 2")}</label>
                <div className="file-field image-file">
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={handleFileChange2}
                  />
                  <label>{t("Upload_Image")}</label>
                  {selectedFile2 && (
                    <div className="image-name">
                      <p className="mb-0">{selectedFile2.name}</p>
                      <button className="btn" onClick={handleRemoveFile2}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button className="common-button1 mt-5 mx-auto justify-content-center">
              <span>{t("Next")}</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DNI;
