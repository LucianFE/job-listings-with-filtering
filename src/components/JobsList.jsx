import { useGlobalContext } from "../context/GlobalContext";
import JobItem from "./JobItem";

function JobsList() {
  const { allJobs } = useGlobalContext();
  return (
    <section className=" w-11/12 max-w-[1440px] mx-auto grid gap-6 mt-28 lg:mt-20 text-[.9375rem] lg:text-[1rem]">
      {allJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </section>
  );
}

export default JobsList;
