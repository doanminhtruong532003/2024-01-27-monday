import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { chooseCrust } from '../../../../../Redux/reducer/rootSlice';

interface RootState {
  crust: string;
}

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated to useNavigate
  const crust = useSelector((state: RootState) => state.crust); // Updated for RootState
  const { register, handleSubmit } = useForm({defaultValues: {crust}});

  const onSubmit = (data: { crust: string }) => { // Added TypeScript type
    dispatch(chooseCrust(data.crust));
    navigate("/step1"); // Updated method to navigate
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="crust">Pick crust:</label>
        <select id="crust" {...register("crust")}> {/* Updated for react-hook-form v7 */}
          <option value="classic_thin">Classic Thin</option>
          <option value="deep_pan">Deep Pan</option>
          <option value="filled_crust">Filled Crust</option>
        </select>
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default CreateAccount;