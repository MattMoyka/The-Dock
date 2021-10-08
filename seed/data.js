import db from "../db/connection.js";
import Item from "../models/item.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "bruno",
    email: "root@super.gmail.com",
    phoneNumber: "1234567899",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "bianca",
    email: "b.anca@super.gmail.com",
    phoneNumber: "1234567899",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "enzo",
    email: "n.zo@super.gmail.com",
    phoneNumber: "1234567899",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "kumi",
    email: "kumi@super.gmail.com",
    phoneNumber: "1234567899",
    password_digest: await bcrypt.hash("L0v32!p4int", 11),
  });
  await user4.save();

  const items = [
    {
      title: "bike",
      imgURL: "https://picsum.photos/200/300",
      description: "great bike for rent, has 1 wheel tho",
      price: "101",
      location: "12345",
      category: "sports",
    },
    {
      title: "bike2",
      imgURL: "https://picsum.photos/200/300",
      description: "great bike for rent, has 1 wheel tho",
      price: "102",
      location: "12345",
      category: "sports",
    },
    {
      title: "bike3",
      imgURL: "https://picsum.photos/200/300",
      description: "great bike for rent, has 1 wheel tho",
      price: "103",
      location: "12345",
      category: "sports",
    },
  ];

  await Item.insertMany(items);
  console.log("Created users & items!");

  db.close();
};

insertData();
