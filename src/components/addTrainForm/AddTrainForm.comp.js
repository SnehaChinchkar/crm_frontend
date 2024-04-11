import React, { useState } from 'react'
import TrainForm from './trainform.comp';
export const AddTrainForm = () => {
    const [trains, setTrains] = useState([]);

  const handleAddTrain = (newTrain) => {
    setTrains([...trains, newTrain]);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center">Add New Train</h2>
            </div>
            <div className="card-body">
              <TrainForm handleAddTrain={handleAddTrain} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
