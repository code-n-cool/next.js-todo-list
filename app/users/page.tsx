import { Suspense } from "react";
import UsersPage from "./UserPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersPage />
    </Suspense>
  );
}
