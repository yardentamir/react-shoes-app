import React from 'react';
import { Link } from 'react-router-dom';

export default class EditShow extends React.Component {


  render() {
    return (
      <form className="ui form" >
        <h3>Edit Shoe</h3>
        <div className="field">
          <label>Title</label>
          <input id="currentEdit" type="text" name="title" defaultValue={this.props.item.title} onChange={this.props.handleChangeAdd} />
        </div>
        <div className="field">
          <label>Image Url</label>
          <input id="currentEdit" type="text" name="imageUrl" defaultValue={this.props.item.img} onChange={this.props.handleChangeAdd} />
        </div>
        <div className="field">
          <label>Price</label>
          <input id="currentEdit" type="text" name="price" defaultValue={this.props.item.price} onChange={this.props.handleChangeAdd} />
        </div>
        <Link to="/" className="item"><input className="ui button" value="EDIT" type="submit" onClick={() => this.props.handleClickEdit(this.props.item)} /></Link>
      </form>
    )
  }
}