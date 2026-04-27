// import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
// import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  // smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  /*
  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );
  */

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  /*
  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );
  */

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  /*
  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
  */

  // Simple loop animation for the roles without SplitText
  LoopText(".landing-h2-info", ".landing-h2-info-1");
  LoopText(".landing-h2-1", ".landing-h2-2");
}

function LoopText(class1: string, class2: string) {
  const tl = gsap.timeline({ repeat: -1 });
  const duration = 1.2;
  const pause = 2;

  gsap.set(class2, { opacity: 0, y: 20 });

  tl.to(class1, {
    opacity: 0,
    y: -20,
    duration: duration,
    ease: "power3.inOut",
    delay: pause,
  })
    .fromTo(
      class2,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: duration, ease: "power3.inOut" },
      "-=0.5"
    )
    .to(class2, {
      opacity: 0,
      y: -20,
      duration: duration,
      ease: "power3.inOut",
      delay: pause,
    })
    .to(
      class1,
      { opacity: 1, y: 0, duration: duration, ease: "power3.inOut" },
      "-=0.5"
    );
}
