import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { chooseBase } from '../../../../../Redux/reducer/rootSlice';

interface RootState {
  base: string;
}

const SignUpNew = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // use useNavigate hook
  const base = useSelector((state: RootState) => state.base); // use the RootState type for useSelector
  const { register, handleSubmit } = useForm({ defaultValues: { base } });

  const onSubmit = (data: { base: string }) => { // define the type of data
    dispatch(chooseBase(data.base));
    navigate("/create-account"); // use navigate function with the route as an argument
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="base">Pick base:</label>
        <select id="base" {...register("base")}> {/* use the register function as intended in v7 */}
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <button type="submit">Next</button> {/* Specify button type */}
    </form>
  );
};

export default SignUpNew;