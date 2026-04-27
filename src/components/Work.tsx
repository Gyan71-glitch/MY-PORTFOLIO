import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "LLM-Based Smart Voice Assistant",
              category: "Edge AI & Raspberry Pi",
              tools: "Python, Raspberry Pi, OpenAI, HuggingFace, STT/TTS",
              description: "Built STT -> LLM -> TTS pipeline on Raspberry Pi; real-time keyword extraction + web data retrieval.",
              image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
            },
            {
              name: "Railway Safety Monitoring System",
              category: "AI & Computer Vision",
              tools: "Python, OpenCV, ML, Sensor Fusion (LiDAR/Ultrasonic)",
              description: "Real-time anomaly & obstacle detection using Python, OpenCV, and ML; cloud-based alert dispatch system.",
              image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800"
            },
            {
              name: "Driver Drowsiness Detection",
              category: "Computer Vision",
              tools: "Python, OpenCV, Dlib, Facial-pattern analysis",
              description: "Real-time eye-tracking & facial-pattern analysis using OpenCV; live alert mechanism for road safety.",
              image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
            },
            {
              name: "JARVIS AI Voice Assistant",
              category: "NLP & Automation",
              tools: "Python, Speech Recognition, TTS, NLP",
              description: "Python assistant with speech recognition, TTS, and NLP; automates web search, app control, and system tasks.",
              image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800"
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <a
                href="https://github.com/Gyan71-glitch"
                target="_blank"
                rel="noreferrer"
                className="work-box-link"
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                  <p className="work-description">{project.description}</p>
                </div>
                <WorkImage image={project.image} alt={project.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
