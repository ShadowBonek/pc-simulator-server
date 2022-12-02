import { Response, Request, NextFunction } from "express";
import sharp from "sharp";
import path from "path";
import { randomBytes } from "crypto";
import fs from "fs";
export const uploadLocal = async (req: any, res: Response, next: NextFunction) => {
  function removeNonAplhaNumeric(str: string) {
    return str.replace(/[\W_]/g, "").toLowerCase();
  }
  // !Name
  let model = removeNonAplhaNumeric(`${req.body.model}`);
  let random = randomBytes(6).toString("hex");
  const pathSave = path.join(__dirname, `../../public/${req.body.type}/`);
  // !Create directory
  fs.access(pathSave, (error) => {
    // To check if the given directory
    // already exists or not
    if (error) {
      // If current directory does not exist
      // then create it
      fs.mkdir(pathSave, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("New Directory created successfully !!");
        }
      });
    } else {
      console.log("Given Directory already exists !!");
    }
  });
  if (req.files.length > 0) {
    await sharp(req.files?.[0].buffer)
      .resize(250)
      .webp()
      .toFile(`${pathSave}${model}-${250}px-${random}.webp`)
      .then(() => {
        req.body.imageS = `${model}-${250}px-${random}.webp`;
        console.log("Img S complete!!");
      });

    await sharp(req.files?.[0].buffer)
      .resize(800)
      .webp()
      .toFile(`${pathSave}${model}-${800}px-${random}.webp`)
      .then(() => {
        req.body.imageM = `${model}-${800}px-${random}.webp`;
        console.log("Img M complete!!");
      });
    console.log("Sending to controller!");
    next();
  } else {
    req.body.imageM = "";
    req.body.imageS = "";
    next();
  }
};
