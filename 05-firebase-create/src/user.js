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

export { createUser };
