import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseSauce  } from '../../../../../Redux/reducer/rootSlice';

interface RootState {
  sauce: string;
}
const InvitationStep2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated to useNavigate
  const sauce = useSelector((state: RootState) => state.sauce); // Updated for RootState
  const { register, handleSubmit } = useForm({defaultValues: {sauce}});

  const onSubmit = (data: { sauce: string }) => { // Added TypeScript type
    dispatch(chooseSauce(data.sauce));
    navigate("/result"); // Updated method to navigate
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="sauce">Pick Sauce:</label>
      <select id="sauce" {...register("sauce")}> {/* Updated for react-hook-form v7 */}
        <option value="no_sauce">No Sauce</option>
        <option value="tomato">Tomato</option>
        <option value="spicy_tomato">Spicy Tomato</option>
      </select>
    </div>
    <button type="submit">Complete</button>
  </form>
  );
};

export default InvitationStep2;