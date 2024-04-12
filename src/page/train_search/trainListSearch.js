import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/pageBreadcrumb/PageBreadcrumb.comp';
// import { SearchForm } from '../../components/search-form/searchForm.comp';
import TrainSearchComp from './trainSearch.comp';
// import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import { TrainTable } from '../Home/trainTable';
// import tickets from '../../assets/data/dummy-tickets.json';
import trains from '../../assets/data/dummy-trains.json';
import {Link} from 'react-router-dom';
export const TrainList= () => {
    const [str,setStr]=useState('');
    const [str2,setStr2]=useState('');
    const [dispTrain,setDispTrain]=useState(trains);
    const [dispTrain2,setDispTrain2]=useState(trains);
    useEffect(()=>{},[str,dispTrain]);


    const handleOnChange =e=>{
        const {value}=e.target;
        // console.log(value);
        setStr(value);
        
        searchTrain(value);
        if(value===''){
            setDispTrain(trains);
        }
    }
    const searchTrain= strr=>{
        if (strr.trim() === '') {
            setDispTrain(trains);
            return;
        } 
        // const departureStation = ;
         const displayTrains=trains.filter(row=>row.Departure_station_id.toString().includes(strr))
        
        setDispTrain(displayTrains);
       
    }
    const handleOnChange2 =e=>{
        const {value}=e.target;
        // console.log(value);
        setStr2(value);
        
        searchTrain2(value);
        if(value===''){
            setDispTrain(dispTrain);
        }
    }

    const searchTrain2= strr2=>{
        if (strr2.trim() === '') {
            setDispTrain2(dispTrain2);
            return;
        } 
        // const departureStation = ;
        const displayTrains2=dispTrain.filter(row=>row.Arrival_station_id.toString().includes(strr2))
        
        setDispTrain2(displayTrains2);
       
    }
    const combinedTrains = dispTrain.filter(train => dispTrain2.some(train2 => train.id === train2.id));
    
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb pagename={"Train List"}/>
            </Col>
        </Row>
        <Row className='mt-4'>
            
            <Col className='text-right'>
                <TrainSearchComp handleOnChange={handleOnChange}  str={str} handleOnChange2={handleOnChange2} str2={str2} />
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                //table (Link to remove from Train list)
                <TrainTable trains={combinedTrains}/>
            </Col>
        </Row>
    </Container>
  )
}
