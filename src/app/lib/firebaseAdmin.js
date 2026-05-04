import admin from "firebase-admin";
import serviceAccount from "../../../firebase-admin.json" assert { type: "json" };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const adminDb = admin.firestore();
