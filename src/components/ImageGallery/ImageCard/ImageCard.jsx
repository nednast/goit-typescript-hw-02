const ImageCard = ({ image, onSelect }) => {
  return (
    <div>
      <img
        src="{image.urls.small}"
        alt="{image.alt_description}"
        onClick={() =>
          onSelect(true, {
            src: image.urls.regular,
            description: image.alt_description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
