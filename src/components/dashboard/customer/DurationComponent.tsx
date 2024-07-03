import {Task} from "@/interfaces/Task";
import dayjs from "@/lib/dayjs";
import {useEffect, useState} from "react";

interface DurationComponentProps {
  task: Task;
}

function calculateDuration(row: Task) {
  if (row.startTime){
    if (row.finishTime){
      return dayjs.duration(dayjs(row.finishTime).diff(dayjs(row.startTime), "millisecond")).format("DD:HH:mm:ss")
    } else {
      return dayjs.duration(dayjs(row.finishTime).diff(dayjs(row.startTime), "millisecond")).format("DD:HH:mm:ss")
    }
  } else {
    return "-"
  }
}

export function DurationComponent({task}: DurationComponentProps) {
  const [duration, setDuration] = useState(calculateDuration(task));

  // Third Attempts
  useEffect(() => {
    if (task.startTime && !task.finishTime) {
      const timer = setInterval(() => setDuration(calculateDuration(task)), 1000);
      return () => clearInterval(timer);
    }
  }, [duration]);
  return (
      <>
        {duration}
      </>
  );
}