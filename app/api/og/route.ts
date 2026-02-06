import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";
export const alt = "Ryan Tido – Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://ryantido.vercel.app";

  const containerStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    display: "flex",
    background: "#0b0f1a",
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(16,185,129,0.25), transparent 35%)",
    color: "white",
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji",
  };

  const innerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 64,
    width: "100%",
  };

  const titleStyle: React.CSSProperties = { fontSize: 56, fontWeight: 900 };
  const nameStyle: React.CSSProperties = { fontSize: 40, fontWeight: 800 };
  const subStyle: React.CSSProperties = { fontSize: 24, color: "#93adc8" };

  const tree = React.createElement(
    "div",
    { style: containerStyle },
    React.createElement(
      "div",
      { style: innerStyle },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 16 } },
        React.createElement("img", {
          src: `${site}/ryan.jpg`,
          alt: "Ryan Tido portrait",
          width: 96,
          height: 96,
          style: { borderRadius: 12, objectFit: "cover", border: "2px solid #1f2937" },
        }),
        React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column" } },
          React.createElement("span", { style: nameStyle }, "Ryan Tido"),
          React.createElement("span", { style: subStyle }, "Full Stack Developer")
        )
      ),
      React.createElement(
        "div",
        { style: { marginTop: 48 } },
        React.createElement(
          "span",
          { style: titleStyle },
          "Building digital experiences that matter."
        )
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
          },
        },
        React.createElement(
          "span",
          { style: subStyle },
          `${new Date().getFullYear()} · Next.js · TypeScript`
        ),
        React.createElement("span", { style: subStyle }, "ryantido.vercel.app")
      )
    )
  );

  return new ImageResponse(tree, { ...size });
}
