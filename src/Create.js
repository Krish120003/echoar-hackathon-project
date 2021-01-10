import React, { Component } from "react";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      image: null,
      submitting: false,
      done: false,
      marker: "",
      failed: false,
    };
  }

  createView = () => {
    if (this.state.face !== null && this.state.image !== null) {
      let data = new FormData();

      data.append("key", "orange-term-2430");
      data.append("target_type", "0");
      data.append("hologram_type", "1");
      data.append("email", "krish120003@gmail.com");
      data.append("type", "upload");
      data.append("file_image", this.state.face);
      data.append("file_image_hologram", this.state.image);
      this.setState({ submitting: true });
      axios
        .post("https://console.echoAR.xyz/upload", data)
        .then((res) => {
          console.log(res.data);
          if (res.data.id) {
            this.setState({
              marker: res.data.additionalData.arjsMarkerStorageID,
            });
          } else {
            if (res.data.includes("failed")) {
              this.setState({ failed: true });
            }
          }
        })
        .then(() => this.setState({ done: true }))
        .catch((err) => {
          this.setState({ failed: true });
          console.log(err);
        });
    }
  };

  onFaceChangeHandler = (event) => {
    this.setState({ face: event.target.files[0] });
  };

  onImageChangeHandler = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  render() {
    return (
      <div className="create-page">
        <div className="instructions">
          <h1>
            Create Your
            <br />
            <span className="slim">D E P T H</span> View
          </h1>
          <h4>
            To Create Your Own DepthView, just upload your image with a
            portfolio attached.
          </h4>
          {this.state.failed ? (
            <p>
              The chosen face image does not have enough detail, please reload
              the page and try again.
            </p>
          ) : null}
          <form className="form-images">
            <label htmlFor="face">Your Face</label>
            <input
              onChange={this.onFaceChangeHandler}
              type="file"
              name="face"
              className="file-input"
            ></input>
            <label htmlFor="face">Your Portfolio Image</label>
            <input
              onChange={this.onImageChangeHandler}
              type="file"
              name="port"
              className="file-input"
            ></input>
            <div
              className="button"
              onClick={
                this.state.done
                  ? () => {
                      window.location.replace(
                        `https://console.echoar.xyz/query?key=orange-term-2430&file=${this.state.marker}`
                      );
                    }
                  : this.createView
              }
            >
              {this.state.done
                ? "Download Marker"
                : this.state.submitting
                ? "Submitting..."
                : "Submit"}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
