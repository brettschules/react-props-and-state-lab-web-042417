import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }



  isAdopted = () => {
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.adoptAPet}>Adopt pet</button>
    }
  }



  render() {
    return (
      <div className="card">
        <div className="content">
        <a className="header">
          Pet name: {this.props.pet.name}
          (gender: {this.props.pet.gender === 'male' ? '♂' : '♀'})
        </a>
        <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isAdopted()}
        </div>
      </div>
    );
  }
}


export default Pet;
