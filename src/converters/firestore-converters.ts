import type {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import type { Category } from "../types/category-type";
import type { User } from "../types/user-type";

export const categoryConverter = {
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options);
    return {
      id: data.id,
      displayName: data.displayName,
      name: data.name,
      imageUrl: data.imageUrl,
      products: data.products,
    };
  },
  toFirestore(category: Category): DocumentData {
    return { ...category };
  },
};

export const userConverter = {
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      lastname: data.lastname,
      provider: data.provider,
    };
  },
  toFirestore(user: User): DocumentData {
    return { ...user };
  },
};
