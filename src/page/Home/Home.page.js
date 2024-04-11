import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/pageBreadcrumb/PageBreadcrumb.comp';
import { SearchForm } from '../../components/search-form/searchForm.comp';
import { TrainTable } from './trainTable';
import trains from '../../assets/data/dummy-trains.json';
export const Home= () => {
    const [strr,setStrr]=useState('');
    const [dispTrain,setDispTrain]=useState(trains);

    useEffect(()=>{},[strr,dispTrain]);


    const handleOnChange =e=>{
        const {value}=e.target;
        
        setStrr(value);
        searchTrain(value);
        if(value===''){
            setDispTrain(trains);
        }
    }

    const searchTrain= strrr=>{
        if (strrr.trim() === '') {
            setDispTrain(dispTrain);
            return;
        } 

        const displayTrains=trains.filter(row=>row.Train_name.toLowerCase().includes(strrr.toLowerCase()))
        setDispTrain(displayTrains);
       
    }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb pagename={"Train List"}/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Button variant='info'>Add New Train</Button>
            </Col>
            <Col className='text-right'>
                <SearchForm handleOnChange={handleOnChange} strr={strr}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                {/* //table (Instead of ticket table i  will train add schedule) */}
                <TrainTable trains={dispTrain}/>
            </Col>
        </Row>
    </Container>
  )
}
