import { Image } from "@imagekit/react";

export default function ImageComponent({ src, alt, className, w, h }) {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      width={w}
      height={h}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[{ height: h, width: w }]}
    />
  );
}
