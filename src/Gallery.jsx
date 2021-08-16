import React from "react";
import RPhG from "react-photo-gallery";

const photos = new Array(5).fill(undefined).map((item, index) => ({
  src: `https://picsum.photos/600/800?random=${index}`,
  height: 3,
  width: 4
}));

export default function Gallery() {
  return (
    <div data-testid="gallery">
      <RPhG photos={photos} />
    </div>
  );
}
