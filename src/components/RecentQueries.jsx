import Querie from "./Querie";

export default function RecentQueries() {
  return (
    <div className="py-20 max-w-6xl mx-auto px-3">
      <div>
        <h1 className="text-center text-3xl font-semibold">Recent Queries</h1>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-20">
        <Querie />
        <Querie />
        <Querie />
        <Querie />
        <Querie />
        <Querie />
        <Querie />
        <Querie />
      </div>
    </div>
  );
}
