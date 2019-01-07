import axios from 'axios';
import * as React from 'react';
import '../App.css';

export interface IRegisteredState { 
  formLoading: boolean;
  responseData: any;
}

export interface IRegisteredProps {
  showData: boolean;
}

class Registered extends React.Component<IRegisteredProps, IRegisteredState> {
  
    public constructor(props:IRegisteredProps) {
    super(props);
    this.state = {
        formLoading: true,
        responseData: null,
    };

    this.LoadRegisteredPeople();
}

public LoadRegisteredPeople = ()=> {
    axios.post('https://jasonsumwedding.azurewebsites.net/api/GetAllRegisteredUsers?code=f0f7N9aE1D55UxhmNr27Thvf0J7vaow/FjcH3dui5TBxxST7LAa6mA==', 
        {})
      .then((response)=> {
        this.setState({
            formLoading: false,
            responseData: response.data,
        });
      })
      .catch((error)=> {
        alert(error);
      });   
}
    
  public render() {
      let peopleCount: number =0;
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">
          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-map-marker" /><u> Registered people</u></h3>
            <p>Below is a list of all the people registered for this event.</p>
          </div>
          <div className="row bg-box rsvp-cont">
                <h3><u>People currently Confirmed!</u></h3>
                <p>The following people are currently confirmed and coming.</p>
                {!this.state.formLoading &&
                    this.state.responseData.map((personItem:any) =>
                        <React.Fragment key={personItem.FirstName && peopleCount ++}>
                            <li>{personItem.FirstName} {personItem.LastName}</li>
                            {
                                personItem.PlusOne && peopleCount ++ &&
                                <li>{personItem.PlusOneName}</li>
                            }
                        </React.Fragment>
                    )
                }
                {this.state.formLoading &&
                   <React.Fragment>
                    <br /><br /><br />
                        <div id='submit-spinner-container'>
                            <div id='submit-spinner'>&nbsp;</div>
                        </div>
                    </React.Fragment>
                }
                <br />
                <p>People Currently Registered: {peopleCount}</p>
            </div>
        </div><br />
       <br /><br />
      </React.Fragment>
    );
  }
}

export default Registered;
