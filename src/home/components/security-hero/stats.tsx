import {clsx} from "clsx";
import SecurityBackground from "@/assets/images/security.webp";
import {Globe, Shield, TrendingUp, Users} from "lucide-react";

export type StatsProps = {
  heroAnimated: boolean;
}

const stats = [
  { icon: Shield, title: "Punto a Punto", description: "Encriptación" },
  { icon: Globe, title: "99.9%", description: "Uptime" },
  { icon: Users, title: "2M+", description: "Usuarios" },
  { icon: TrendingUp, title: "$50B+", description: "Procesado" }
];

export const Stats = ({ heroAnimated }: StatsProps) => <div className={clsx('relative p-6 rounded-2xl backdrop-blur-md border border-secondary-400/30 transition-all duration-300',
  'bg-gradient-to-br from-secondary-600/20 to-secondary-800/20',
  { 'translate-y-0 opacity-100 scale-100': heroAnimated, 'translate-y-8 opacity-0 scale-95': !heroAnimated }
)}>
  <img src={SecurityBackground} alt="Security Background" className={"absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 blur-xs"} />
  <div className={"grid grid-cols-2 gap-6"}>
    {stats.map((stat, index) => (
      <div key={index} className={"text-center"}>
        <div className={"flex justify-center mb-3"}>
          <div className={"bg-secondary-500/30 p-3 rounded-xl"}>
            <stat.icon className={"w-10 h-10 text-secondary-300"} />
          </div>
        </div>
        <div className={"font-bold text-lg text-txt-0 mb-1"}>{stat.title}</div>
        <div className={"text-sm text-txt-300"}>{stat.description}</div>
      </div>
    ))}
  </div>
</div>