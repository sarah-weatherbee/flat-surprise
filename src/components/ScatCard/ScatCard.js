import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scatshapes from '../../helpers/data/propz/scatShapes';


class ScatCard extends React.Component {
  static propTypes = {
    scat: scatshapes.scatCardShape,
    deleteScat: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { scat, deleteScat } = this.props;
    deleteScat(scat.id);
  }

  render() {
    const { scat } = this.props;
    const singleLink = `/scat/${scat.id}`;
    return (
      <div className="ScatCard col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <Link className="btn btn-success" to={singleLink}>View</Link>
            <p className="card-text">{scat.location}</p>
            <button className ="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;