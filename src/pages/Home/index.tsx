import { ProtectedDashboard } from "@/components/withAuth"
import type { FC } from "react"

export const Home: FC = () => {
  return (
    <div>
      <h1 className="w-screen h-[30px] bg-linear-to-bl from-violet-500 to-fuchsia-500 font-bold flex justify-center items-center text-2xl">
        Home
      </h1>
      <div>
        <ProtectedDashboard user={{name:'John', role:'admin'}}/>
      </div>
    </div>
  )
}