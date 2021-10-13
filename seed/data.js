import db from "../db/connection.js";
import Item from "../models/item.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "bruno",
    email: "root@super.gmail.com",
    phone: "1234567899",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "bianca",
    email: "b.anca@super.gmail.com",
    phone: "1234567899",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "enzo",
    email: "n.zo@super.gmail.com",
    phone: "1234567899",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "kumi",
    email: "kumi@super.gmail.com",
    phone: "1234567899",
    password_digest: await bcrypt.hash("L0v32!p4int", 11),
  });
  await user4.save();

  const items = [
    {
      title: "Puegeot Bike",
      imgURL: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
      description: "Great bike, fully operational. The tires are filled with air and the chain is well greased.",
      price: "50",
      location: "12345",
      category: "sports",
    },
    {
      title: "Surf Board",
      imgURL: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      description: "Fresh coat of wax. This board is wide so it is great for beginners",
      price: "100",
      location: "12345",
      category: "sports",
    },
    {
      title: "Tennis Raquet",
      imgURL: "https://images.unsplash.com/photo-1574271006921-4280fbc84573?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      description: "Great beginner raquet",
      price: "103",
      location: "12345",
      category: "sports",
    },
    {
      title: "Hockey Skates",
      imgURL: "https://images.unsplash.com/photo-1550865811-cc8872a15d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      description: "Slightly worn in skates, but the edges were just sharpened",
      price: "25",
      location: "12345",
      category: "sports",
    },
    {
      title: "Camping Stove",
      imgURL: "https://images.unsplash.com/photo-1546890948-82b45c9712c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
      description: "Compact camping stove, easy to use, butane not included",
      price: "10",
      location: "12345",
      category: "sports",
    },
    {
      title: "Ryobi Drill",
      imgURL: "https://images.unsplash.com/photo-1622044939413-0b829c342434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      description: "Lightly used drill, great for awound the home DIY projects",
      price: "40",
      location: "12345",
      category: "Tools",
    },
    {
      title: "Stanley Wrench",
      imgURL: "https://images.unsplash.com/photo-1618577462423-3ebbc15a36be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
      description: "13mm or 12mm",
      price: "10",
      location: "12345",
      category: "Tools",
    },
    {
      title: "Wrake and Pitch Fork",
      imgURL: "https://images.unsplash.com/photo-1589051039495-eb77709c8268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      description: "Perfect combo for some garden work",
      price: "20",
      location: "12345",
      category: "Garden",
    },
    {
      title: "Desk Fan",
      imgURL: "https://images.unsplash.com/photo-1612549672719-2f1a3908ae31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      description: "Compact desk fan for those hot days",
      price: "10",
      location: "12345",
      category: "Home",
    },
  ];

  await Item.insertMany(items);
  console.log("Created users & items!");

  db.close();
};

insertData();
