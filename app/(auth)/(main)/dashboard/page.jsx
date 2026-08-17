import { Suspense } from "react";
import { BarLoader } from "react-spinners";

const DashboardPage = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold gradient-title mb-5">
        Dashboard
      </h1>

      <Suspense
        fallback={
          <BarLoader
            className="mt-4"
            width="100%"
            color="#9333ea"
          />
        }
      >
        <div>
          Your dashboard content will go here.
        </div>
      </Suspense>
    </div>
  );
};

export default DashboardPage;