import React, {Component} from 'react'
import axios from 'axios'
import './azmie.css'
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state={
      locations:[]
    };

  }


  componentDidMount(){
    this.retrieveLocations();
  }

retrieveLocations(){
  axios.get("/locations").then(res =>{
    if(res.data.success){
      this.setState({
        locations:res.data.existinglocations
      });

      console.log(this.state.locations)
    }
  });
}


onDelete = (id) =>{

  axios.delete(`/locations/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveLocations();
  })
}


filterData(locations,searchkey){
  
  const result = locations.filter((location) =>
  location.EndDestination.toLowerCase().includes(searchkey)
 
  )
  this.setState({locations:result})
}

handleSearchArea = (e) =>{

  const searchkey= e.currentTarget.value;

  axios.get("/locations").then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existinglocations,searchkey)
    }  
  })
}

  render(){
    return (
      
      <div className="container">
        <br/> <br/> <br/> <br/>
        <div className="row">
          <div className="col-lg-4 mt-2 mb-2">
            <h2>Enter your Destination :</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="From"
            name="SearchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        
      </div>
            
        <table id="azmietable" className="table table-light ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bus No.</th>
              <th scope="col">Starting Location</th>
              <th scope="col">First Destination</th>
              <th scope="col">Second Destination</th>
              <th scope="col">Third Destination</th>
              <th scope="col">End Destination</th>
           
            </tr>
          </thead>
          <tbody>
            {this.state.locations.map((locations,index) =>(
              <tr Key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/locations/${locations._id}`} style={{textDecoration:'none'}}>
                    {locations.BusNo}
                    </a>
                </td>
                <td>{locations.StartingLocation}</td>
                <td>{locations.FirstDestination}</td>
                <td>{locations.SecondDestination}</td>
                <td>{locations.ThirdDestination}</td>
                <td>{locations.EndDestination}</td>
           

              </tr>

            ))}
          </tbody>
       </table>
       <div>
              <ReactHTMLTableToExcel
                className="btn btn-outline-success"
                table="azmietable"
                filename="Tracking details Excel"
                sheet="Sheet"
                buttonText="Download the bus schedule"
              />
            </div>
      </div>
    )
  }
}