import React from "react";
import { Link } from "react-router-dom";


const dashboard = () =>{

    return(
        <div className="container" style={{width:'100%'}}>
            <div align="right"><Link to="/create" className="btn btn-success btn-sm">Create New + </Link></div>
            <br />
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div className="card-header">
                            Stanzatek Solutions
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div className="card-header">
                            Stanzatek Solutions
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div className="card-header">
                            Stanzatek Solutions
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>
             <br />
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div className="card-header">
                            Stanzatek Solutions
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default dashboard;