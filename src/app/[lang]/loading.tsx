import { Spinner } from "@/components/Spinner/component";

export default async function RootLoader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner className="border-red-900" />
    </div>
  );
}
