import React , {Component} from "react";

class UpdateCreate extends Component {


    constructor(props){
        super(props);

        this.onChangevendorname = this.onChangevendorname.bind(this); 
        this.onChangeconstitution = this.onChangeconstitution.bind(this);
        this.onChangeserviceentity = this.onChangeserviceentity.bind(this);
        this.onChangenaturescope = this.onChangenaturescope.bind(this);
        this.onChangeserviceprovider = this.onChangeserviceprovider.bind(this);
        this.onChangepurchaseagrement = this.onChangepurchaseagrement.bind(this);
        this.onChangeservicewithemployee = this.onChangeservicewithemployee.bind(this);
        this.onChangeconfidentialinformation = this.onChangeconfidentialinformation.bind(this);
        this.onChangendaparties = this.onChangendaparties.bind(this);
        this.onChangeserverprovider = this.onChangeserverprovider.bind(this);
        this.onChangeapproved = this.onChangeapproved.bind(this);
        this.onChangeitaggrement = this.onChangeitaggrement.bind(this);
        this.onChangeperiodaggrement = this.onChangeperiodaggrement.bind(this);
        this.onChangespecificcondition = this.onChangespecificcondition.bind(this);
        this.onChangelockedperiodagrement = this.onChangelockedperiodagrement.bind(this);
        this.onChangeexceptdate = this.onChangeexceptdate.bind(this);
        this.onChangemouagreement = this.onChangemouagreement.bind(this);
        this.onChangesigningauth = this.onChangesigningauth.bind(this);
        this.onChangesigningcityhead = this.onChangesigningcityhead.bind(this);
        this.onChangeexistingagreement = this.onChangeexistingagreement.bind(this);
        this.onChangeasceptscovered = this.onChangeasceptscovered.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            vendorname: '',constitution : '',serviceentity : '',naturescope : '',specificcondition:"",
            serviceprovider: '',purchaseagrement:"",servicewithemployee:'',confidentialinformation:'',
            ndaparties:"",serverprovider :"",approved:"",itaggrement:"" ,periodaggrement:"",lockedperiodagrement:"",
            specificcondition:"",  exceptdate:"",mouagreement:"",signingauth:"",signingcityhead:"",existingagreement:"",
            asceptscovered:"",formData:""
        }
    }

    onChangevendorname(e){this.setState({vendorname : e.target.value});} 
    onChangeconstitution(e){this.setState({constitution : e.target.value});}
    onChangeserviceentity(e){this.setState({serviceentity : e.target.value});} 
    onChangenaturescope(e){this.setState({naturescope : e.target.value});}
    onChangeserviceprovider(e){this.setState({serviceprovider : e.target.value});}
    onChangepurchaseagrement(e){this.setState({purchaseagrement : e.target.value});}
    onChangeservicewithemployee(e){this.setState({servicewithemployee : e.target.value});}
    onChangeconfidentialinformation(e){this.setState({confidentialinformation : e.target.value});}
    onChangendaparties(e){this.setState({onChangendaparties : e.target.value});}
    onChangeserverprovider(e){this.setState({serverprovider : e.target.value});}
    onChangeapproved(e){this.setState({approved : e.target.value});}
    onChangeitaggrement(e){this.setState({itaggrement : e.target.value});}
    onChangeperiodaggrement(e){this.setState({periodaggrement : e.target.value});}
    onChangelockedperiodagrement(e){this.setState({lockedperiodagrement : e.target.value});}
    onChangeexceptdate(e){this.setState({onChangeexceptdate  : e.target.value});}
    onChangespecificcondition(e){this.setState({onChangespecificcondition  : e.target.value});}
    
    onChangemouagreement(e){this.setState({mouagreement : e.target.value});}
    onChangesigningauth(e){this.setState({signingauth : e.target.value});}
    onChangesigningcityhead(e){this.setState({signingcityhead : e.target.value});}
    onChangeexistingagreement(e){this.setState({existingagreement : e.target.value});}
    onChangeasceptscovered(e){this.setState({asceptscovered : e.target.value});}


    
    onSubmit(e){
         e.preventDefault();

        const user = {
            vendorname: this.state.vendorname ,constitution : this.state.constitution,serviceentity : this.state.serviceentity,naturescope : this.state.naturescope,
            serviceprovider: this.state.serviceprovider,purchaseagrement:this.state.purchaseagrement,servicewithemployee:this.state.servicewithemployee,confidentialinformation:this.state.confidentialinformation,
            ndaparties:this.state.ndaparties,serverprovider :this.state.serverprovider,approved:this.state.approved,itaggrement:this.state.itaggrement ,periodaggrement:this.state.periodaggrement,lockedperiodagrement:this.state.lockedperiodagrement,
            specificcondition:this.state.specificcondition,
            exceptdate:this.state.exceptdate,mouagreement:this.state.mouagreement,signingauth:this.state.signingauth,signingcityhead:this.state.signingcityhead,existingagreement:this.state.existingagreement,
            asceptscovered:this.state.asceptscovered,formData:this.state.formData
        }
        console.log(user);
    }

    render(){
        return (
            <div className="container" style={{width:'50%',marginTop: '1900px'}}>
             <h3>InsurerOnBoard</h3>
            <br />
            <form id="myForm" name="myForm"  onSubmit={this.onSubmit}>
            
                    <div className="form-group">
                        <label>Name of vendor/service provider</label>
                        <input type="text" className="form-control" 
                        name="vendorname"
                        value={this.state.vendorname} onChange={this.onChangevendorname}/>
                    </div>
                    <div className="form-group">
                        <label>Constitution of vendor/service provider</label>
                        <input type="text" className="form-control" 
                        name="constitution"
                        value={this.state.constitution} onChange={this.onChangeconstitution}/>
                    </div>

                    <div className="form-group">
                        <label>Whether vendor/service provider is an Indian entity or foreign entity.</label>
                        <input type="text" className="form-control" 
                        name="serviceentity"
                        value={this.state.serviceentity} onChange={this.onChangeserviceentity}/>
                    </div>
                   
                   
                   <div className="form-group">
                        <label> Nature/scope of services [please provide the full details point wise and including process as to how it is implemented].</label>
                        <input type="text" className="form-control" 
                        name="naturescope"
                        value={this.state.naturescope} onChange={this.onChangenaturescope}/>
                    </div>
                    <div className="form-group">
                        <label>Please specify whether the Service Provider will provide only the services without any licensing of software products/tools or it is only for software products without services or for both.</label>
                        <input type="text" className="form-control" 
                        name="serviceprovider"
                        value={this.state.serviceprovider} onChange={this.onChangeserviceprovider}/>
                    </div>
                    <div className="form-group">
                        <label>If software purchase agreement Whether source code will be got by BAGIC or not.</label>
                        <input type="text" className="form-control" 
                        name="purchaseagrement"
                        value={this.state.purchaseagrement} onChange={this.onChangepurchaseagrement}/>
                    </div>
                    <div className="form-group">
                        <label>Is the Service Provider provides its services with his employees come and work onsite of BAGIC servers or is it off site or both.</label>
                        <input type="text" className="form-control" 
                        name="servicewithemployee"
                        value={this.state.servicewithemployee} onChange={this.onChangeservicewithemployee}/>
                    </div>
                    <div className="form-group">
                        <label>Do BAGIC share any Confidential Information to the Service Provider in the process of availing the Services.</label>
                        <input type="text" className="form-control" 
                        name="confidentialinformation"
                        value={this.state.confidentialinformation} onChange={this.onChangeconfidentialinformation}/>
                    </div>
                    <div className="form-group">
                        <label>If NDA whether both parties are sharing information or only we are sharing or only service provider is sharing the confidential information.</label>
                        <input type="text" className="form-control" 
                        name="ndaparties"
                        value={this.state.ndaparties} onChange={this.onChangendaparties}/>
                    </div>
                    <div className="form-group">
                        <label>If use of the servers of vendor/service provider is involved then whether or not the servicers are in India.</label>
                        <input type="text" className="form-control" 
                        name="serverprovider"
                        value={this.state.serverprovider} onChange={this.onChangeserverprovider}/>
                    </div>
                    <div className="form-group">
                        <label>Commercials approved by competent authority or not and if approved details thereof with relevant mails.</label>
                        <input type="text" className="form-control" 
                        name="approved"
                        value={this.state.approved} onChange={this.onChangeapproved}/>
                    </div>
                    <div className="form-group">
                        <label>If apart from Agreement any SOW to be agreed, whether IT has vetted such SOW and given go ahead or not. If not please vet and give clearance on the SOW.</label>
                        <input type="text" className="form-control" 
                        name="itaggrement"
                        value={this.state.itaggrement} onChange={this.onChangeitaggrement}/>
                    </div>
                    <div className="form-group">
                        <label>The period of the Agreement with vendor/service provider</label>
                        <input type="text" className="form-control" 
                        name="periodaggrement"
                        value={this.state.periodaggrement} onChange={this.onChangeperiodaggrement}/>
                    </div>
                    <div className="form-group">
                        <label>Please inform is the period of the Agreement is locked without any right to terminate? If yes please send the competent authority’s approval. Please note that as per corporate governance guidelines, BAGIC have to have right to terminate the Agreement without any penalty and hence not having termination rights is contrary to IRDAI guidelines.</label>
                        <input type="text" className="form-control" 
                        name="lockedperiodagrement"
                        value={this.state.lockedperiodagrement} onChange={this.onChangelockedperiodagrement}/>
                    </div>
                    <div className="form-group">
                        <label>Is any auto renewal of term of the Agreement is there and whether such auto renewal is agreed by competent authority.</label>
                        <input type="text" className="form-control" 
                        name="renewal"
                        value={this.state.renewal} onChange={this.onChangerenewal}/>
                    </div>
                    <div className="form-group">
                        <label>Are there any other specific conditions agreed with vendor/service provider? If yes please specify.</label>
                        <input type="text" className="form-control" 
                        name="specificcondition"
                        value={this.state.specificcondition} onChange={this.onChangespecificcondition}/>
                    </div>
                    <div className="form-group">
                        <label>Exact date from which MOU will be valid (effective date)</label>
                        <input type="text" className="form-control" 
                        name="exceptdate"
                        value={this.state.exceptdate} onChange={this.onChangeexceptdate}/>
                    </div>
                    <div className="form-group">
                        <label>Agreement/MOU is for what period?</label>
                        <input type="text" className="form-control" 
                        name="mouagreement"
                        value={this.state.mouagreement} onChange={this.onChangemouagreement}/>
                    </div>
                    <div className="form-group">
                        <label>Names of Signing authority to the agreement from tie up partner.</label>
                        <input type="text" className="form-control" 
                        name="signingauth"
                        value={this.state.signingauth} onChange={this.onChangesigningauth}/>
                    </div>
                    <div className="form-group">
                        <label>Names of Signing authority to the agreement (BAGIC) (Not below the role of City Head).</label>
                        <input type="text" className="form-control" 
                        name="signingcityhead"
                        value={this.state.signingcityhead} onChange={this.onChangesigningcityhead}/>
                    </div>
                    <div className="form-group">
                        <label>Do we have any existing agreements with this party and if so copies of the same be provided.</label>
                        <input type="text" className="form-control" 
                        name="existingagreement"
                        value={this.state.existingagreement} onChange={this.onChangeexistingagreement}/>
                    </div>
                    <div className="form-group">
                        <label>Any other aspects not covered above.</label>
                        <input type="text" className="form-control" 
                        name="asceptscovered"
                        value={this.state.asceptscovered} onChange={this.onChangeasceptscovered}/>
                    </div>
                  
                    <button type="submit" className="btn btn-primary btn-block" name ="submit">Submit</button>
                </form>
        </div>
           
        );
    }
}

export default UpdateCreate;