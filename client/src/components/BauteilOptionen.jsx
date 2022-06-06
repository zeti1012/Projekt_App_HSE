import React, { useContext } from 'react';
import PathFinder from '../apis/PartFinder';
import { useParams } from 'react-router-dom';
import { BauteilContext } from '../context/BauteilContext';

const BauteilOptionen = () => {
  const {id} = useParams();

  const {historie, setHistorie} = useContext(BauteilContext)

  const getHistorie = async () =>{
   
    try {
      const response = await PathFinder.get(`/${id}/historie`)
      const historie = response.data.data.historie
      
      let newHistorie = historie.map((aufgabe)=>{
        let datumauspostgres = new Date(aufgabe.aufgabe_abschlussdatum)
        let abschlussdatum = [datumauspostgres.getDate(), datumauspostgres.getMonth()+1, datumauspostgres.getFullYear()].join('.')
        aufgabe.aufgabe_abschlussdatum =  abschlussdatum
        return aufgabe
      })
      
      setHistorie(newHistorie)
      
      

    } catch (err) {
      console.error(err.message)
    }
  }

  return (
      <div className='border border-primary mt-1 p-3'>
        <div className='d-grid gap-2 d-md-block '>
          <p>
            <button className="btn btn-secondary mb-4 mr-2 collapsed" type="submit"  data-bs-toggle="collapse" 
            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={getHistorie } > Historie</button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <table>
                <thead>
                  <tr className='big-primary'>
                    <th scope="col">Typ</th>
                    <th scope="col">Beschreibung</th>
                    <th scope="col">Fertigstellungsdatum</th>
                  </tr>
                </thead>
                <tbody>
                  {historie && historie.map((aufgabe) => {
                    return (
                      <tr key={aufgabe.id}>
                        <td>
                          {aufgabe.aufgabe_typ}
                        </td>
                        <td>
                          {aufgabe.aufgabe_beschreibung}
                        </td>
                        <td>
                          {aufgabe.aufgabe_abschlussdatum}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default BauteilOptionen