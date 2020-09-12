import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import Button from "../Button";
import Stats from "../Stats";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, isLoading, error, loadImages, imageStats } = this.props;
    console.log(imageStats);

    return (
      <div className="content">
        <section className="grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <Stats stats={imageStats[image.id]} />
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        {!error && (
          <Button
            onClick={() => !isLoading && loadImages()}
            loading={isLoading}
          >
            Load more
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ images, isLoading, error, imageStats }) => ({
  images,
  isLoading,
  error,
  imageStats,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
