import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseCheese } from '../../../../../Redux/reducer/rootSlice';

interface RootState {
  cheese: string;
}
const InvitationStep1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated to useNavigate
  const cheese = useSelector((state: RootState) => state.cheese); // Updated for RootState
  const { register, handleSubmit } = useForm({ defaultValues: { cheese } });

  const onSubmit = (data: { cheese: string }) => { // Added TypeScript type
    dispatch(chooseCheese(data.cheese));
    navigate("/step2"); // Updated method to navigate
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cheese">Pick cheese:</label>
        <select id="cheese" {...register("cheese")}> {/* Updated for react-hook-form v7 */}
          <option value="no_cheese">No Cheese</option>
          <option value="mozarella">Mozarella</option>
          <option value="parmigiano">Parmigiano</option>
        </select>
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default InvitationStep1;