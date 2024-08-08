import React from "react";

class ButtonSmile extends React.Component {
  render() {
    const { counts, clickCount } = this.props;
    const smileys = ["😊", "😂", "😍", "😎", "🤩"];

    return (
      <div className="buttons-group">
        {smileys.map((smiley, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <button onClick={() => clickCount(index)}>
              {smiley}
            </button>
            <span style={{ marginLeft: '10px' }}>
              {counts[index]}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default ButtonSmile;
