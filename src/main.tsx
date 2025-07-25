import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "@/home/home.tsx";
import Layout from "@/components/layout.tsx";
import './index.css'
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>,
)
