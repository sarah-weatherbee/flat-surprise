import React from 'react';
import scatData from '../../helpers/data/scats';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: 'monkeybutt',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(err => console.error('could not find single scat', err));
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

formSubmit = (e) => {
  e.preventDefault();
  const saveMe = { ...this.state.newScat };
  const scatId = this.props.match.params.id;
  scatData.putScat(saveMe, scatId)
    .then(() => this.props.history.push('/home'))
    .catch(err => console.error('cannot save', err));
}


render() {
  const { newScat } = this.state;
  return (
      <div className="EditScat">
        <h1>edit scat</h1>
      <form onSubmit={this.formSubmit}>
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
      <button type="submit" className="btn btn-primary">Update scat</button>
    </form>
    </div>
  );
}
}

export default EditScat;
