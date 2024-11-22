"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }: any) => {
  const [pickedImage, setPickedImage] = useState<string>();
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage("");
      return;
    }

    const fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result instanceof ArrayBuffer) {
        console.error("Failed to read file as data URL.");
        return;
      }
      const resultAsDataURL: string | null = fileReader.result as string;
      if (resultAsDataURL) {
        setPickedImage(resultAsDataURL);
      } else {
        console.error("Failed to read file as data URL.");
      }
    };
    fileReader.readAsDataURL(file as Blob);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p> No Image Picked Yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
