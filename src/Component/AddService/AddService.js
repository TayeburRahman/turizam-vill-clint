import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
  const { reset, register, handleSubmit } = useForm();

  const onSubmit = (data) => { 
    fetch('https://shrieking-labyrinth-61643.herokuapp.com/addService',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Your Order Successfully Send');
                reset();
            } 
        })
        console.log(data)
  }

  return (
    <div className="">
      <div className="addService row mt-5 pb-5">
      <h1 className="addService-text p-3 d-flex">Please Add a Serves</h1> 
        <div className="col-md-6 mt-4  margin-left">
          <form className="text-left ms-2 d-grid" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />{" "}
       
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
            />{" "}
     
            <input
              type="text"
              {...register("members")}
              placeholder="Members"
            />{" "}
      
            <input
              type="date"
              className="dateColor"
              {...register("day")}
              placeholder=""
            />{" "}
 
            <input {...register("img")} placeholder="Image url" /> 
            <textarea
              className="text-from description"
              {...register("description")}
              placeholder="Description"
            />{" "}
            <br /> 
            <input className="submit-from buttons" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
