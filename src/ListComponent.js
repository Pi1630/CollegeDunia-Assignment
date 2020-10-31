


class ListComponent extends React.Component {

  render() {
    const item = this.props.item;
    return (
      <div>
        <img src={require("./college2.jpeg")} alt="logo" />
        <div className="title">{item.college_name}</div>;
      </div>
    );
  }
};
