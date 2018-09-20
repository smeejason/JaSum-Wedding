import axios from 'axios';
import * as React from 'react';
import '../App.css';

export interface IRSVPProps {
    showPlusone: boolean;
}

export interface IRSVPState { 
    email: string;
    firstName:string; 
    lastName:string; 
    plusOne: boolean; 
    plusOneName: string; 
    cantMakeIt: boolean;
    comments: string;
    formSubmitted: boolean;
    formWaiting: boolean;
}

export default class RSVP extends React.Component<IRSVPProps, IRSVPState> {
   
    public constructor(props:IRSVPProps) {
        super(props);
        this.state = {
            cantMakeIt: false,
            comments: '',
            email: '',
            firstName: '',
            formSubmitted: false,
            formWaiting: false,
            lastName: '',
            plusOne: false,
            plusOneName: '',
        };
   }
    
    public onPlusOne = ()=> {
        this.setState({
            plusOne: !this.state.plusOne,
        });
    }

    public cantMakeIt = ()=> {
        this.setState({
            cantMakeIt: !this.state.cantMakeIt,
        });
    }

    public updateFieldState = (ctl: any)=> {
        const newState = {};
        newState[ctl.target.name] = ctl.target.value;
        this.setState(newState);
    }

    public onSubmit = (ctl: any)=> {
        // ctl.target.disabled = false;
        this.setState({
            formWaiting: true,
        });
        axios.post('https://jasonsumwedding.azurewebsites.net/api/UserRegistration?code=5rrf8ISbSyHBqlTUADUvmoSLc0hFQsmZxnJtftaFkjZLGNhhgdxTZw==', 
        // axios.post('http://localhost:7071/api/UserRegistration',
            { 
                cantmakeit: this.state.cantMakeIt,
                comments: this.state.comments,
                email: this.state.email, 
                lastname: this.state.lastName, 
                name: this.state.firstName, 
                plusone:this.state.plusOne, 
                plusonename:this.state.plusOneName
            })
          .then((response)=> {
            this.setState({
                formSubmitted: true,
            });
          })
          .catch((error)=> {
            alert(error);
          });
   
    }
  
    public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">    
            <div className="row bg-box">
                <h3><span className="glyphicon glyphicon-log-in" /><u> RSVP</u></h3>
                <p>Our wedding is going to be a small backyard wedding, where you are the lucky few that have been selected. Suits are not required, but come smart and make our photos look amazing!</p>
                <p>We cant wait to see you all, but understand it may not be possible to make it. It would be helpful if you let us know below. If your situation does change, please let us know.</p>
            </div>
            {!this.state.formSubmitted &&
            <div className="row bg-box rsvp-cont" >
                <br /><br />
                <form className="form-horizontal" action="{{route('user.api.profile')}}">
                    <div className="form-group">
                        <label className="control-label col-sm-2" >First Name:</label>
                        <div className="col-sm-10"> 
                        <input type="text" name="firstName" className="form-control" onChange={this.updateFieldState} id="firstName" placeholder="Enter first name" value={this.state.firstName} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Last Name:</label>
                        <div className="col-sm-10"> 
                        <input type="text" name="lastName" className="form-control" onChange={this.updateFieldState} id="lastName" placeholder="Enter last name" value={this.state.lastName} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" name="email" className="form-control" onChange={this.updateFieldState} id="email" placeholder="Enter email" value={this.state.email} />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label><input type="checkbox" name="cantMakeIt" onClick={this.cantMakeIt} /> Cant make it anymore...</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label><input type="checkbox" onClick={this.onPlusOne} /> Plus One?</label>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.plusOne ? 'form-fadein form-heightfade form-group' : 'form-heightfade form-group'}>
                        <label className="control-label col-sm-2" htmlFor="plusOneName">Plus one name:</label>
                        <div className="col-sm-10">
                            <input type="text" name="plusOneName" className="form-control"  onChange={this.updateFieldState} id="plusOneName" placeholder="Plus one name" value={this.state.plusOneName} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Comments:</label>
                        <div className="col-sm-10"> 
                            <textarea rows={5} name="comments" className="form-control" onChange={this.updateFieldState} id="comments" placeholder="Comments" value={this.state.comments} />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
                {this.state.formWaiting && 
                    <div id='submit-spinner-container'>
                        <div id='submit-spinner'>&nbsp;</div>
                    </div>
                }
            </div>
            }
            {this.state.formSubmitted &&
                 <div className="row bg-box">
                    <h3><u>Registration complete!</u></h3>
                    <p>Thanks for registering, we will see you there!</p>
                </div>
            }
        </div>
        <br /><br />
      </React.Fragment>
    );
  }
}

