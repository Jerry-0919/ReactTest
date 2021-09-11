import React, {Component} from 'react';

export default class Threeview extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

        }
      </div>
      <div className="col-md-6">
        
      </div>
    </div>)
  }

}
