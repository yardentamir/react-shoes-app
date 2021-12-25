import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartForm from "./Pages/StartForm";
import AddShowForm from "./Pages/addShoeForm";
import EditShoeForm from "./Pages/editShoeForm";
import Api from "./api";

export default class App extends Component {
  state = { addShoe: {}, data: [], currentEdit: {} };

  componentDidMount = async () => {
    const data = await Api.getItems();
    this.setState({ data });
    console.log(data);
  };

  handleChangeAdd = async (event) => {
    const { name, value, id } = event.target;
    console.log(name, value, id);
    this.setState((prevState) => ({
      [id]: { ...prevState[id], [name]: value },
    }));
  };

  handleClickDelete = async (ItemId) => {
    await Api.deleteItem(ItemId);
    const data = await Api.getItems();
    this.setState({ data });
  };

  handleClickEditCard = (item) => {
    console.log(item);
    this.setState({ currentEdit: item });
  };

  handleClickEdit = async (item) => {
    await Api.editItem(item.id, this.state.currentEdit);
    const data = await Api.getItems();
    this.setState({ data });
  };

  handleSubmitAdd = async (event) => {
    await Api.addItem(this.state.addShoe);
    const data = await Api.getItems();
    this.setState({ data });
    this.setState({ addShoe: {} });
    event.preventDefault();
  };

  render() {
    return (
      <div className="container ui">
        <BrowserRouter>
          <div className="ui fixed menu">
            <div className="ui container center">
              <h2>Shoe manager</h2>
            </div>
          </div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <StartForm
                  data={this.state.data}
                  handleClickDelete={this.handleClickDelete}
                  handleClickEdit={this.handleClickEditCard}
                />
              }
            />
            <Route
              path="/addItem"
              exact
              element={
                <AddShowForm
                  handleChangeAdd={this.handleChangeAdd}
                  handleSubmitAdd={this.handleSubmitAdd}
                />
              }
            />
            <Route
              path="/editItem/:id"
              exact
              element={
                <EditShoeForm
                  handleChangeAdd={this.handleChangeAdd}
                  handleClickEdit={this.handleClickEdit}
                  item={this.state.currentEdit}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
