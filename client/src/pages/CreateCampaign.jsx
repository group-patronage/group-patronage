import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, Sidebar, Navbar, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });

  const [error, seterror] = useState("");


  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {

    console.log("called");
    e.preventDefault();

    if(form.name === '')
    { seterror("*Name is Required!");}
  
    else if(form.title === '')
    { seterror("*Campaign Title is Required!");}

    else if(form.description === '')
    { seterror("*Description is Required!");}

    else if(form.target === '')
    { seterror("*Goal is Required!");}

    else if(form.deadline === '')
    { seterror("*End Date is Required!");}

    else if(form.image === '')
    { seterror("*Image URL is Required!");}

    else
    {
      seterror("");
        checkIfImage(form.image, async (exists) => {
          if(exists) {
            setIsLoading(true)
            await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
            setIsLoading(false);
            navigate('/home');

            setForm({ ...form, name: '' });
            setForm({ ...form, title: '' });
            setForm({ ...form, description: '' });
            setForm({ ...form, target: '' });
            setForm({ ...form, deadline: '' });
            setForm({ ...form, image: '' });
          } else {
            alert('Provide valid image URL')
            setForm({ ...form, image: '' });
          }
        })
  
        //setForm({ ...form, name: ''});
    }
  

  }

  return (
    <>
      <div className=" mr-10 ">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      
      <div className="flex justify-center items-center p-[12px] sm:min-w-[380px] shadow-gray-400 shadow-md rounded-[6px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      <form className="w-full mt-[65px] flex flex-col gap-[30px]">

        <div className="flex flex-wrap gap-[40px] w-full">
          <div style={{width: 33 + 'rem'}}>

            <FormField 
              labelName="Your Name *"
              placeholder="Lakshay"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange('name', e)}
              style={`${error === '*Name is Required!' && 'border-red-600'}`}
            />
            {
                error === '*Name is Required!' && (
                  <small className='text-red-600 text-lg'>*Name is Required</small>
                ) 
              }
          </div>
         
         <div style={{width: 33 + 'rem'}}>
              
            <FormField 
              labelName="Campaign Title *"
              placeholder="Write a title"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange('title', e)}
              style={`${error === '*Campaign Title is Required!' && 'border-red-600'}`}
            />

            {
                error === '*Campaign Title is Required!' && (
                  <small className='text-red-600 text-lg'>*Campaign Title is Required!</small>
                ) 
              }
         </div>

        </div>

        <FormField 
            labelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
            style={`${error === '*Description is Required!' && 'border-red-600'}`}
          />

            {
                error === '*Description is Required!' && (
                  <small className='text-red-600 text-lg' style={{marginTop:'-30px'}}>*Description is Required!</small>
                ) 
              }

        <div className="flex flex-wrap gap-[40px]">
          <div style={{width: 33 + 'rem'}}>
          <FormField 
            labelName="Goal *"
            placeholder="0.01"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
            style={`${error === '*Goal is Required!' && 'border-red-600'}`}
          />
           {
                error === '*Goal is Required!' && (
                  <small className='text-red-600 text-lg'>*Goal is Required!</small>
                ) 
              }
          </div>
          
          <div style={{width: 33 + 'rem'}}> 
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
            style={`${error === '*End Date is Required!' && 'border-red-600'}`}
          />

          {
                error === '*End Date is Required!' && (
                  <small className='text-red-600 text-lg'>*End Date is Required!</small>
                ) 
              }
          </div>

        
        </div>

        <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
            style={`${error === '*Image URL is Required!' && 'border-red-600'}`}
          />

          {
                error === '*Image URL is Required!' && (
                  <small className='text-red-600 text-lg'  style={{marginTop:'-30px'}}>*Image URL is Required!</small>
                ) 
              }
          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071] hover:bg-[#313549] hover:transition-all duration-700 hover:shadow-gray-400 shadow-md"
              handleClick={handleSubmit}  
            />
          </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default CreateCampaign