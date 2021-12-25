import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../Components/Card"
import { v4 as uuidv4 } from "uuid"; // makes random IDs


export default class App extends React.Component {

  render() {
    return (
      <>
        <div className="ui container">
          <div className="main">
            <div className="ui clearing segment">
              <Link to="/addItem" className="item"><div className="ui right floated button">ADD NEW SHOE</div></Link>
            </div>
          </div>
        </div>
        <div className="ui container">
          <div className="ui special cards">
            {this.props.data.map((item) => {
              return <Card key={uuidv4()} item={item} deleteCallBack={(id) => this.props.handleClickDelete(id)} editCallBack={(id) => this.props.handleClickEdit(id)} />
            })}
          </div>
        </div>
      </>
    )
  }
}


