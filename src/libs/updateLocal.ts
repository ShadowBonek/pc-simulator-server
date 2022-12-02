import { Response, Request, NextFunction } from "express";
import sharp from "sharp";
import config from "../config";
// import S3 from "aws-sdk/clients/s3";
import { randomBytes } from "crypto";
import path from "path";
import fs from "fs";

export const updateLocal = async (req: any, res: Response, next: NextFunction) => {
  //   console.log(req.body);
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
  // !Accion si existe file
  if (req.files.length > 0) {
    // !Delete previous image
    console.log(req.body.imageM);
    const imageM = req.body.imageM.replace(/"/g, "");
    const imageS = req.body.imageS.replace(/"/g, "");

    if (fs.existsSync(`${pathSave}${imageM}`) && imageM !== "") {
      fs.unlinkSync(`${pathSave}${imageM}`);
      console.log("ImageM deleted!");
    }
    if (fs.existsSync(`${pathSave}${imageS}`) && imageS !== "") {
      fs.unlinkSync(`${pathSave}${imageS}`);
      console.log("ImageS deleted!");
    }
    // !Resize whit sharp
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
    req.body.specifications = JSON.parse(req.body.specifications);
    next();
  } else {
    req.body.imageM = JSON.parse(req.body.imageM);
    req.body.imageS = JSON.parse(req.body.imageS);
    req.body.specifications = JSON.parse(req.body.specifications);
    next();
  }
};
