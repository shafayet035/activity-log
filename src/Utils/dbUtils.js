import { db } from "../Firebase";

const insertActivity = async (data, uid) => {
  try {
    const res = await db
      .collection("users")
      .doc(uid)
      .collection("activities")
      .add(data);

    if (res) {
      return "Activity Added Successfully";
    }
  } catch (error) {
    return "Please Try Again";
  }
};

const getActivities = async (uid) => {
  let data = [];
  await db
    .collection("users")
    .doc(uid)
    .collection("activities")
    .orderBy("timestamp", "desc")
    .limit(1000)
    .get()
    .then((res) => (data = res.docs.map((doc) => doc.data())));

  return data;
};

export { insertActivity, getActivities };
