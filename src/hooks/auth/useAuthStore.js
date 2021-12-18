import { useSelector } from "react-redux";

export default function useAuthStore() {
  const store = useSelector((state) => state.auth);

  if (!store) {
    throw Error("useAuthStore must be inside an Redux Provider");
  }

  return store;
}
