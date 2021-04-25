import { firestore } from "./firebase";

const createUser = async (user) => {
  const ref = await firestore.collection("users").add(user);

  const newUser = {
    id: ref.id,
    ...user,
  };

  console.log(newUser);
  return newUser;
};

const readUsers = async () => {
  const snapshot = await firestore.collection("users").get();

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(users);
  return users;
};

const readUser = async (id) => {
  const doc = await firestore.collection("users").doc(id).get();

  const user = {
    id: doc.id,
    ...doc.data(),
  };

  console.log(user);
  return user;
};

const readUserByName = async (name) => {
  const snapshot = await firestore
    .collection("users")
    .limit(1)
    .where("name", "==", name)
    .get();

  const doc = snapshot.docs[0];

  const user = {
    id: doc.id,
    ...doc.data(),
  };

  console.log(user);
  return user;
};

const updateUser = async (id, updates) => {
  await firestore.collection("users").doc(id).update(updates);
  const doc = await firestore.collection("users").doc(id).get();

  const user = {
    id: doc.id,
    ...doc.data(),
  };

  console.log(user);
  return user;
};

const deleteUser = async (id) => {
  await firestore.collection("users").doc(id).delete();

  console.log(id);
  return id;
};

const deleteUserByName = async (name) => {
  const snapshot = await firestore
    .collection("users")
    .limit(1)
    .where("name", "==", name)
    .get();

  const doc = snapshot.docs[0];
  doc.ref.delete();

  console.log(doc.id);
  return doc.id;
};

export {
  createUser,
  readUsers,
  readUser,
  readUserByName,
  updateUser,
  deleteUser,
  deleteUserByName,
};
