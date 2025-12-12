export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  provider: "Google" | "firebase";
}
