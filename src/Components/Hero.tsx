import RetroGrid from "./magicui/retro-grid";
import WordRotate from "./magicui/word-rotate";
import {
  ArrowDown01Icon
} from "./icons";
import { LinkedInIcon } from "./icons";
import { useCallback } from "react";
import { Url } from "@/helpers/constant";
export default function Hero() {
  const scrollDown = useCallback(() => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight - 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="relative mx-auto flex h-screen flex-col items-center justify-center top-10">
        <div className="z-10 text-center">
          <div

            className="mb-5 text-xl capitalize md:text-2xl"
          >
            HELLO 👋, I'M
          </div>
          <h1 className="py-3 text-6xl font-bold text-white md:text-7xl lg:text-8xl">
            Prem Kumar
          </h1>
          <WordRotate
            className="my-5 text-2xl font-bold md:text-4xl"
            words={[
              "I'm Front-End Developer",
              "I'm Programmer",
              "I'm Tech Enthusiast",
            ]}
            style={{
              background:
                "linear-gradient(131deg, rgb(156, 131, 255) 42%, rgba(224, 240, 16, 0.94) 70%, rgb(255, 144, 81) 75%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "rgba(156, 131, 255, 0.25) 0px 1px 3px",
              position: "relative",
              cursor: "default",
              transition: "text-shadow 0.3s, transform 0.2s",
              transform: "translateY(0px)",
              display: "inline-block",
            }}
          />
          <div className="mt-4 flex justify-center gap-2 sm:gap-3">
            <p
              style={{
                textAlign: "center",
                tabSize: 4,
                fontFeatureSettings: "normal",
                fontVariationSettings: "normal",
                WebkitTapHighlightColor: "transparent",
                textSizeAdjust: "100%",
                borderWidth: 0,
                borderStyle: "solid",
                borderColor: "#e5e7eb",
                color: "#fff",
                padding: 0,
                WebkitFontSmoothing: "antialiased",
                boxSizing: "inherit",
                margin: "0px 0px 32px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                maxWidth: "600px",
                lineHeight: 1.6,
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              Hey there! I'm Prem Kumar, a versatile Full-Stack Developer and
              Software Intern at Tap Academy. I specialize in building scalable,
              user-centric applications using both the MERN stack and Java Full
              Stack technologies.
              <br />
              <br />
              With a strong drive for problem-solving, I’ve tackled over 700
              programming questions, refining my logic and coding efficiency. I
              enjoy applying these skills to real-world projects—ranging from
              AI-driven Sign Language Translators to secure document verification
              systems. I thrive on overcoming technical hurdles and am constantly
              exploring the intersection of web development and emerging
              technologies.
            </p>

          </div>
          <a
            href="#contact"
            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-1c6f82k"
            tabIndex={0}
            id=":ri:"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              appearance: "none",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 500,
              lineHeight: 1.75,
              textTransform: "uppercase",
              minWidth: "64px",
              backgroundColor: "rgb(0, 0, 0)",
              color: "rgb(255, 255, 255)",
              outline: "0px",
              margin: "10px",
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
              overflow: "hidden",
              borderRadius: "112px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgb(88, 88, 88)",
              padding: "12px 48px",
              fontSize: "1rem",
              textDecoration: "none",
              transform: "translateY(-2px)",
              boxShadow: "rgba(255, 255, 255, 0.15) 0px 6px 20px",

            }}
          >
            Contact Me<span className="MuiTouchRipple-root css-4mb1j7"></span>
          </a>
          <br />

          <div className="absolute bottom-0 left-1/2 mt-8 -translate-x-1/2">

          </div>
        </div>

        <RetroGrid />
      </section>
    </>
  );
}
