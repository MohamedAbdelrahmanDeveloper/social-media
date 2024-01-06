"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export default function BackLink({ title }: Props){
  const router = useRouter();
  return (
    <div className="flex space-x-2 items-center">
        <button onClick={() => router.back()} >
            <ArrowLeftIcon className='w-6'/>
        </button>
        <span>{title}</span>
    </div>
  );
};
