import React from 'react';
import { Link } from 'react-router-dom';

export default class addShowForm extends React.Component {

  render() {
    return (
      <form className="ui form" >
        <h3>Add Shoe</h3>
        <div className="field">
          <label>Title</label>
          <input id="addShoe" type="text" name="title" placeholder="Nike Shoe 45" onChange={this.props.handleChangeAdd} />
        </div>
        <div className="field">
          <label>Image Url</label>
          <input id="addShoe" type="text" name="imageUrl" placeholder="ImageUrl.png" onChange={this.props.handleChangeAdd} />
        </div>
        <div className="field">
          <label>Price</label>
          <input id="addShoe" type="text" name="price" placeholder="$100" onChange={this.props.handleChangeAdd} />
        </div>
        <Link to="/" className="item"><input className="ui button" value="Add" type="submit" onClick={this.props.handleSubmitAdd} /></Link>
      </form>
    )
  }
}