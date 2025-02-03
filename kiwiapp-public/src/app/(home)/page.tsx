// import { Button } from "@headlessui/react";
import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=' flex flex-col gap-10'>
      <span>Home</span>
      <Button type='fill'>
        <Link href='/enrollment'>Enrollment</Link>
      </Button>
    </div>
  );
}
