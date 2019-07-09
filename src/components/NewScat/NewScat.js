import React from 'react';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: 'monkeybutt',
  animal: '',
};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  animalChange = e => this.formFieldStringState('animal', e);

  locationChange = e => this.formFieldStringState('location', e);

  // sampleNameChange = (e) => {
  //   const tempScat = {...this.state.newScat };
  //   tempScat['sampleName'] = e.target.value;
  //   this.setState({ newScat: tempScat });
  // }

  // colorChange = (e) => {
  //   const tempScat = {...this.state.newScat };
  //   tempScat['color'] = e.target.value;
  //   this.setState({ newScat: tempScat });
  // }

  render() {
    const {newScat } = this.state;
    return (
      <div className="NewScat">
        <h1>new scat</h1>
      <form>
      <div className="form-group">
        <label htmlFor="sampleName">Sample name</label>
        <input
         type="text"
          className="form-control"
           id="sampleName"
           placeholder="Sample 12"
           value={newScat.sampleName}
           onChange={this.sampleNameChange}
           />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input
         type="text"
          className="form-control"
           id="color"
           placeholder="brown"
           value={newScat.color}
           onChange={this.colorChange}
           />
      </div>
      <div className="form-group">
        <label htmlFor="weight">weight</label>
        <input
         type="text"
          className="form-control"
           id="color"
           placeholder="12g"
           value={newScat.weight}
           onChange={this.weightChange}
           />
      </div>
      <div className="form-group">
        <label htmlFor="animal">animal</label>
        <input
         type="text"
          className="form-control"
           id="color"
           placeholder="bear"
           value={newScat.animal}
           onChange={this.animalChange}
           />
      </div>
      <div className="form-group">
        <label htmlFor="location">location</label>
        <input
         type="text"
          className="form-control"
           id="color"
           placeholder="home"
           value={newScat.location}
           onChange={this.locationChange}
           />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    );
  }
}

export default NewScat;
