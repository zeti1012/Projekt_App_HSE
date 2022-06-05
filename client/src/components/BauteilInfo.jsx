import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PathFinder from '../apis/PartFinder';
import {BauteilContext} from '../context/BauteilContext';

const BauteilInfo = (props) => {
  const {id} = useParams();
  console.log(id)
  const {bauteil,setBauteil} = useContext(BauteilContext);

    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
              const response = await PathFinder.get(`/${id}`)
              setBauteil(response.data.data.bauteil[0])
              console.log(response.data.data.bauteil[0])
            } catch (err) {
              console.error(err.message);
            }
        }
        fetchData();
    },[])

  return (
    <div className='container-md border border-primary pt-2 mt-5'>
      <div className='row mb-3'>
        {/* Div Bauteilname */}
        <div className='border-bottom border-primary text-center'>
          {bauteil.bauteil_name}
          
        </div>
        <div className='row'>
            {/* Div Beschreibung */}
            <div className="col ">
              {bauteil.bauteil_beschreibung}
            </div>
            {/* Div Bild */}
            <div className='col text-center'>
                {bauteil.bauteil_bild}
            </div>
        </div>
      </div>
    </div>
  )
};

export default BauteilInfo