import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePostPasi extends Component {

    constructor(props){
        super(props);

        this.state={
          Bus_plate_number:"",
          Bus_owners_name:"",
          Bus_owners_phoneno:"",
          Number_of_seats:"",
          Condition:"",
          Date:""
        }
    }

    //handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
    
    
    handleChange=(e)=>{

        const {name,value}=e.target;

        let nam = e.target.name;
        let val = e.target.value;



        if(nam==="Bus_owners_phoneno"){

            if(!Number(val)){
                alert("Cannot contain letters");
            }
        }

        if(nam==="Bus_owners_phoneno"){
            if(val.length > 10){
                alert("Invalid length!!");
            }
        }
        if (nam=== "Bus_owners_name") {
        
            if (Number(val)) {
              alert("Name must be in letters");
            }
          }
    
    
        this.setState({
            ...this.state,
            [name]:value
        })
    }


    

    onSubmit=(e)=>{
        e.preventDefault();

        const {Bus_plate_number,Bus_owners_name,Bus_owners_phoneno,Number_of_seats,Condition,Date} = this.state;

        const data={
            Bus_plate_number:Bus_plate_number,
            Bus_owners_name:Bus_owners_name,
            Bus_owners_phoneno:Bus_owners_phoneno,
            Number_of_seats:Number_of_seats,
            Condition:Condition,
            Date:Date
        }

        console.log(data)

        axios.post('/postPasi/save', data).then((res)=>{
            if(res.data.success){
                alert("data Added!")
                this.setState(
                    {
                      Bus_plate_number:"",
                      Bus_owners_name:"",
                      Bus_owners_phoneno:"",
                      Number_of_seats:"",
                      Condition:"",
                      Date:""
                    }
                )
            }
        })
    }


    render() {

        return (
<div className=''><div style={{backgroundColor:"#ECECEC"}}>
      <div>
      <br></br> 
    <h2><center>Add new bus to the system </center></h2> <br></br> 
  
      </div></div><center></center>
      <br></br> <br></br>
      <div className='container'> 
          
          <div class="container">

         <form class="form-horizontal" >
     <div class="form-group row">
      <label class="control-label col-sm-2" for="Bus plate number">Bus plate number :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="NB-1234" name="Bus_plate_number" value={this.state.Bus_plate_number} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>

          <div class="form-group row">
      <label class="control-label col-sm-2" for="Bus owners name">Owner of the bus :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="Kamal Perera" name="Bus_owners_name" list="owner" value={this.state.Bus_owners_name} onChange={this.handleChange} required/>
         <datalist id="owner">
                        <option value="Company"></option>
                        <option value="Person"></option>
                        
        </datalist>
          </div>
          </div>
          <br></br>
          <div class="form-group row">
      <label class="control-label col-sm-2" for="Bus owners phoneno">Bus owners phoneno :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="0771234567" name="Bus_owners_phoneno" value={this.state.Bus_owners_phoneno} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>

          <div class="form-group row">
      <label class="control-label col-sm-2" for="Number_of_seats">Number of seats :</label>
         <div class="col-sm-10">
         <input type="number" class="form-control"  placeholder="52" name="Number_of_seats" value={this.state.Number_of_seats} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>
          <div class="form-group row">
      <label class="control-label col-sm-2" for="Condition">Condition :</label>
         <div class="col-sm-10">
         <input type="text" class="form-control"  placeholder="Brand new" list="busbrand"  name="Condition" value={this.state.Condition} onChange={this.handleChange} required/>
         <datalist id="busbrand">
                        <option value="Brand New"></option>
                        <option value="Old"></option>
                        
        </datalist>
          
          </div>
          </div>

          <br></br>
          <div class="form-group row">
      <label class="control-label col-sm-2" for="Date">Date :</label>
         <div class="col-sm-10">
         <input type="date" class="form-control"  placeholder="02-02-2021" name="Date" value={this.state.Date} onChange={this.handleChange} required/>
          </div>
          </div>
          <br></br>

          <div>
          <br/><hr/><br/> 
                 <button className="btn btn-success" onClick={this.onSubmit}>Add New Bus &nbsp;<i className ="fas fa-book"></i></button>
             </div>
             <br></br><br></br>
  </form>
 </div></div>
 

 <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"40px",height:"170px"}}>

<div>

    <div class="row" style={{marginLeft:"700px",height:"100px"}}>

    <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

        <a class="fb-ic" style={{paddingLeft:"10px"}}>
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="tw-ic"  style={{paddingLeft:"20px"}}>
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="gplus-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="li-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
    
        <a class="ins-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="pin-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
        </a>
        </div>
    </div>

    </div>

</div>

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2021 Copyright:
    <a href="https://mdbootstrap.com/"> Travelling Express</a>
</div>

</footer>
 
 </div>   
            
        )
    }
}

