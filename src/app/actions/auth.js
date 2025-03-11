import { SignupFormSchema } from "../../lib/definitions";
// import clientPromise from "../../lib/mongo/index";

let client;
let db;
let users;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("marshmallow");
    users = await db.collection("users");
  } catch (error) {
    throw new Error("Failed to stablish connection to database");
  }
}

export async function signup(state, formData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...

  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    if (!users) await init();
    const result = await users
      .insertOne(user)

      console.log(result)
    // return { users: result };
  } catch (error) {
    return { error: "Failed to fetch users" };
  }
}
