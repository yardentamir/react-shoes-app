import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {

  render() {
    return (
      <div className="ui card">
        <span className="image" href="#">
          <img src={this.props.item.img} alt="" />
        </span>
        <div className="content">
          <span className="header" href="#">{this.props.item.title}</span>
          <div className="meta">
            <span>${this.props.item.price}</span>
          </div>
          <Link to={`/editItem/${this.props.item.id}`} className="item"><input id="fromCardClick" type="button" value="Edit" className="ui button" onClick={() => this.props.editCallBack(this.props.item)} /></Link>

          <button className="ui button" onClick={() => this.props.deleteCallBack(this.props.item.id)}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}