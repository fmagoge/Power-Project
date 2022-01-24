// App.js
import React from 'react';
import {useEffect, useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


function App() {
  const [plants, setPlants] = useState(null)

  useEffect(()=>{
    console.log("Hey, I have loaded up")

    if(!plants)
    fetch('http://localhost:8080/get-plants')
    .then((response)=>response.json())
    .then(data =>{
      console.log("Plant items lists: ",data)
      setPlants(data)
    })
  }, [plants])


  const columns2 = [
    { dataField: 'seqgen19', text: 'Sequence Number' , sort: true},
    { dataField: 'pname', text: 'Plant Name', sort: true },
    { dataField: 'pstatabb', text: 'Location', sort: true },
    { dataField: 'genntan', text: 'Annual Net Generation' , sort: true},
    { dataField: 'genid', text: 'Annual Net Generation' , sort: true},
    { dataField: 'genstat', text: 'Annual Net Generation' , sort: true},
    { dataField: 'year', text: 'Year' , sort: true}
  ];

  const defaultSorted2 = [{
    dataField: 'seqgen19',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  return (
    <div className="App">
      <h1>POWER GENERATION PROJECT</h1>

      {plants ? (
         <BootstrapTable bootstrap4 keyField='id' data={plants} columns={columns2} defaultSorted={defaultSorted2} pagination={pagination} />
      ): 'Loading data...'}

    </div>
  );
}

export default App;