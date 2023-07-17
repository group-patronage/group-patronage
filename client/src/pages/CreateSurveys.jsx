import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import {
  CustomButton,
  Sidebar,
  Navbar,
  FormField,
  Loader,
} from "../components";
import { checkIfImage } from "../utils";

const CreateSurveys = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    tag: "",
    title: "",
    description: "",
    deadline: "",
    image: "",
  });

  const [error, seterror] = useState("");

  const handleFormFieldChange = (fieldtitle, e) => {
    setForm({ ...form, [fieldtitle]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("called");
    e.preventDefault();

    if (form.title === "") {
      seterror("*Survey Title is Required!");
    } else if (form.description === "") {
      seterror("*Description is Required!");
    } else if (form.deadline === "") {
      seterror("*End Date is Required!");
    } else if (form.image === "") {
      seterror("*Image URL is Required!");
    } else {
      seterror("");
      checkIfImage(form.image, async (exists) => {
        if (exists) {
          setIsLoading(true);
          await createCampaign({
            ...form,
            target: ethers.utils.parseUnits(form.target, 18),
          });
          setIsLoading(false);
          navigate("/home");

          setForm({ ...form, title: "" });
          setForm({ ...form, description: "" });
          setForm({ ...form, target: "" });
          setForm({ ...form, deadline: "" });
          setForm({ ...form, image: "" });
        } else {
          alert("Provide valid image URL");
          setForm({ ...form, image: "" });
        }
      });

      //setForm({ ...form, name: ''});
    }
  };

  return (
    <>
      <div className=" mr-10 hidden sm:block md:block lg:block xl:block">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <div className="flex w-[300px] max-sm:w-full sm:w-[470px] md:w-[610px] lg:w-[1260px] bg-[#1c1c24]  justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
          {isLoading && <Loader />}

          <div>
            <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-[#4acd8d]">
              Create a Survey
            </h1>
          </div>

          <form
            className="w-full mt-[65px] flex flex-col gap-[30px]"
            aria-label="Create Campaign Form"
          >
            <div className="flex flex-wrap gap-[40px] w-full">
              <div style={{ width: 33 + "rem" }}>
                <FormField
                  labelName="Title *"
                  placeholder="E.g. Education"
                  inputType="text"
                  value={form.title}
                  handleChange={(e) => handleFormFieldChange("title", e)}
                  style={`${
                    error === "*title is Required!" && "border-red-600"
                  }`}
                  ariaLabel="name"
                />
                {error === "*Title is Required!" && (
                  <small
                    className="text-red-600 text-lg"
                    role="alert"
                    id="name-error"
                  >
                    *Title is Required
                  </small>
                )}
              </div>

              <div style={{ width: 33 + "rem" }}>
                <FormField
                  labelName="Survey Tag *"
                  placeholder="Give a tag"
                  inputType="text"
                  value={form.tag}
                  handleChange={(e) => handleFormFieldChange("tag", e)}
                  style={`${
                    error === "*Campaign Tag is Required!" && "border-red-600"
                  }`}
                  ariaLabel="tag"
                />

                {error === "*Survey Tag is Required!" && (
                  <small
                    className="text-red-600 text-lg"
                    role="alert"
                    id="title-error"
                  >
                    *Survey Tag is Required!
                  </small>
                )}
              </div>
            </div>

            <FormField
              labelName="Description *"
              placeholder="Give Some Description"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
              style={`${
                error === "*Description is Required!" && "border-red-600"
              }`}
              ariaLabel="description"
            />

            {error === "*Description is Required!" && (
              <small
                className="text-red-600 text-lg"
                style={{ marginTop: "-30px" }}
                role="alert"
                id="description-error"
              >
                *Description is Required!
              </small>
            )}

            {/* <div style={{width: 33 + 'rem'}}>
          <FormField 
            labelName="Goal *"
            placeholder="0.01"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
            style={`${error === '*Goal is Required!' && 'border-red-600'}`}
            ariaLabel="goal"
          />
           {
                error === '*Goal is Required!' && (
                  <small className='text-red-600 text-lg' role="alert" id="goal-error">*Goal is Required!</small>
                ) 
              }
          </div>
           */}
            {/* <div style={{width: 33 + 'rem'}}>  */}
            <FormField
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChange("deadline", e)}
              style={`${
                error === "*End Date is Required!" && "border-red-600"
              }`}
              ariaLabel="end-date"
            />

            {error === "*End Date is Required!" && (
              <small
                className="text-red-600 text-lg"
                role="alert"
                id="end-date-error"
              >
                *End Date is Required!
              </small>
            )}
            {/* </div> */}

            <FormField
              labelName="Survey image *"
              placeholder="Place image URL of your Survey"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange("image", e)}
              style={`${
                error === "*Image URL is Required!" && "border-red-600"
              }`}
              ariaLabel="image"
            />

            {error === "*Image URL is Required!" && (
              <small
                className="text-red-600 text-lg"
                style={{ marginTop: "-30px" }}
                role="alert"
                id="image-error"
              >
                *Image URL is Required!
              </small>
            )}
            <div className="flex justify-center items-center mt-[40px]">
              <CustomButton
                btnType="submit"
                title="Submit new Survey"
                styles="bg-[#1dc071] hover:bg-[#313549] hover:transition-all duration-700 hover:shadow-gray-400 shadow-md"
                handleClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSurveys;
