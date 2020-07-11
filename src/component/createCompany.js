import React , { Component } from "react";
import axios from "axios";

class createCompany extends Component {

    constructor(props){
        super(props);
        
       
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangecompanyname = this.onChangecompanyname.bind(this);
        this.onChangecontactperson = this.onChangecontactperson.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email : '',
            companyname : '',
            contactperson : '',
            address : '',
            didRedirect: false
        }
    }

    onChangeemail(e){
        this.setState({
            email : e.target.value
        });
    }
    onChangecompanyname(e){
        this.setState({
            companyname : e.target.value
        });
    }

    onChangecontactperson(e){
        this.setState({
            contactperson : e.target.value
        });
    }
    onChangeaddress(e){
        this.setState({
            address : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
           
            email : this.state.email,
            companyname : this.state.companyname,
            contactperson : this.state.contactperson,
            address : this.state.address
        }
       

       axios.post('http://localhost:5000/users/createcompany',user)
        .then(res =>{
            console.log(res['data'])
        });
       
    }

    render() {
    return (
        <div className="container" style={{width:'50%'}}>
           <h3>Create Company</h3>
            <br />
            <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" 
                        name="companyname"
                        value={this.state.companyname} onChange={this.onChangecompanyname}/>
                    </div>
                     <div className="form-group">
                        <label>Contact Person name</label>
                        <input type="text" className="form-control" placeholder="Enter Contact Name" 
                        name="contactperson"
                        value={this.state.contactperson} onChange={this.onChangecontactperson}/>
                    </div>

                    <div className="form-group">
                        <label>Contact Person Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" 
                        name="email"
                        value={this.state.email} onChange={this.onChangeemail}/>
                    </div>

                    <div className="form-group">
                        <label>Company Address</label>
                        <textarea type="text" className="form-control" placeholder="Enter Address of your Company"
                         name="address" value={this.state.address} onChange={this.onChangeaddress}>
                         </textarea>
                    </div>

                  
                    <span className="forgot-password text-left" id="success" style={{color:'#00FF00',fontSize:'25'}}>
                   
                </span>
                    <button type="submit" className="btn btn-primary btn-block" name ="submit">Submit</button>
                </form>
        </div>

    );
    }
}

export default createCompany;