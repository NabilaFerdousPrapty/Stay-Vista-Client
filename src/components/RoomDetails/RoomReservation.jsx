import PropTypes from 'prop-types'
import Button from '../Shared/Button/Button'
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';
// import LoadingSpinner from '../Shared/LoadingSpinner';

const RoomReservation = ({room}) => {
  // const { id } = useParams();
  // console.log('Room ID:', id);
  // const axiosSecure=useAxiosSecure();

  //  const {data:room={},isLoading}=useQuery({
  //   queryKey:['room',id],
  //   queryFn:async()=>{
  //     const {data}=await axiosSecure.get(`/room/${id}`)
  //     // console.log(data);
  //     return data;
  //   }
  //  }

  //  );
  //  if (isLoading) return <LoadingSpinner />
  //  console.log(room);
  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {room.price}</div>
       
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>{/* Calender */}</div>
      <hr />
      <div className='p-4'>
        <Button label={'Reserve'} />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>${room?.price}</div>
      </div>
    </div>
  )
}

RoomReservation.propTypes = {
  room: PropTypes.object,
}

export default RoomReservation
