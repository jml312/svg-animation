import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Test() {
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const COLOR = "#0f2042";

  const startrAnimation = async () => {
    if (!isAnimating) {
      setIsAnimating(true);
      controls.set({
        pathLength: 0,
        fillOpacity: 0,
      });
      await controls.start({
        pathLength: 1,
        transition: {
          duration: 1.25,
          delay: 0.1,
          ease: "easeInOut",
          type: "tween",
        },
      });
      await controls.start({
        fillOpacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeInOut",
          type: "tween",
        },
      });
      setIsAnimating(false);
    }
  };

  return (
    <motion.svg
      viewBox="0 0 1168 1536"
      width={256}
      height={256}
      onViewportEnter={startrAnimation}
      onHoverStart={startrAnimation}
      onTap={startrAnimation}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        transform="translate(303,330)"
        d="m0 0h372l19 1 22 3 19 5 30 13 27 14 13 9 12 10 10 8 14 14 9 11 9 12 9 15 12 26 12 28 4 15 1 9 1 24v19l-1 60-1 17-4 16-6 16-16 34-5 10-12 17-10 13-9 10-14 13-17 13-16 10-5 4-12 5-12 7-17 6-26 6-3 2-2 5v8l9 10 12 17 9 16 13 24 8 13 15 29 10 17 12 23 12 21 12 23 12 22 14 26 16 28 8 16 12 22 10 16 13 27 12 21 1 8-10 10-11 7-4 2h-7l-10-4-6-7-9-16-17-25-5-13-19-32-6-10-5-14-1-3-3-1-12-22-10-19-11-18-11-20-8-16-9-16-6-10-8-18-3-7-5-8-9-14-4-8-10-22-5-8-10-18-9-22-10-18-9-10-7-6-8-1-22-1h-99l-45 1-18 1-5 2-3 5-1 6v10l1 13v206l-1 15-3 8-11 17-13 14-12 9-15 15-8 6-15 13-9 9-8 6-9 8-11 8-9 10-8 8-12 8-9 7-9 2v-2h-2v2l-7 1-6-7-2-6v-64l-16-2 2-3h2l-1-63-1-182v-111l1-118 1-321 3-11 9-11 8-7zm10 49-1 1v408h77l4-2 3-5 1-310 3-4v-68l-4-16-2-1h-73l-6-3zm156 0-1 1v9l3 7 7 7 1 2h2l2 4 6 10 8 18 9 12 12 26 24 44 13 24 12 22 11 21 12 20 8 16 9 17 13 23 15 29 13 23 8 16 10 17 8 16 11 20 4 2 7-1h7l24-7 21-9 14-8 17-12 15-14 11-12 13-18 11-18 8-16 5-13 1-4 1-21v-84l-1-32-2-13-3-7-6-11-12-21-7-10-8-11-5-6-1 3-2-3-5-5-7-8-8-7-13-8-22-14-8-4-7-4-29-4-23-2-166-1-27-1zm-20 84-1 1v284l2 1v19l2 12 4 8h164l5-2 2-4v-13l-7-11-10-15-9-14-9-17-10-16-10-19-4-10-6-10-8-11-5-11-7-18-10-17-7-11-11-23-12-20-10-16-8-16-13-21-8-15-3-14-2-1zm-105 368-19 1-6 5-1 3v31l1 23v185l-1 24-3 21-2 10v13l5 5 7 2 8-7v-2l4-2 5-4 7-8 7-7 4-5 8-7 27-27 1-6v-240l-3-8z"
        style={{ stroke: "#152C4A", fill: "#152C4A" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(303,330)"
        d="m0 0h372l19 1 22 3 19 5 30 13 27 14 13 9 12 10 10 8 14 14 9 11 9 12 9 15 12 26 12 28 4 15 1 9 1 24v19l-1 60-1 17-4 16-6 16-16 34-5 10-12 17-10 13-9 10-14 13-17 13-1-4 5-1 2-4h2l1-3 4-3 3-5 5-1v-2h3v-2h2l1-4 3-3 3-1 1-2h2l1-5 4-6 6-7h2l2-5 3-6 3-2 4-7 6-13 5-15 3-6 2-9 2-3 2-9 3-9 4-10 2-13v-73l-2-23-6-16-3-12-8-24-5-13-4-11-12-16-1-3-3-1-3-4v-3l-4-2-2-6-5-5-1-3-5-1-4-6-4-3v-2l-4-2-4-6-11-6-20-15-1-2-6-3-12-5-7-3-8-4-15-4-5-2-15-4-7-5-15-2-61-1h-352l-4 17-1 6v38l-1 54v89l-1 44 1 134-1 53v68l1 95-1 44-1 25v29l1 38v87l1 5-16-2 2-3h2l-1-63-1-182v-111l1-118 1-321 3-11 9-11 8-7z"
        style={{ stroke: "#5C6063", fill: "#5C6063" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(322,372)"
        d="m0 0h19l51 1 7 2 4 6 3 19v73l1 162v61l-1 70-2 22-3 2-7 1h-84l-2-1-1-7-1-114v-28l1-49-1-29 1-168 1-12 3-4 1 1v408l77-1 3-1 3-5 1-310 3-4v-68l-3-10v-6h-75l-9-5 1-3z"
        style={{ stroke: "#585E62", fill: "#585E62" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(490,372)"
        d="m0 0 21 1 118-1h21l31 1 9 3 9 2 9 4 12 2 10 2 7 3 10 4 10 5 6 5 2 4 2 1v2l5 1 10 3 1 4 4 2 5 5 2 5 11 9 4 3v2l5 2 4 9v2h2l1 5 6 4 5 9 3 5 3 7 5 11 2 14 4 10 4 13 3 17v54l-2 21-5 12-2 3-5 23-2 9-3 4-4 7-3 6-8 11h-2l-2 5-5 7-2 5-5 5-3 1-1 3h-2l2-4 14-18 6-10 8-13 9-20 3-10 1-21v-84l-1-32-2-13-3-7-6-11-12-21-7-10-4-6-2-2-6-8-1 3-8-9-6-7-8-7-13-8-22-14-8-4-7-4-29-4-23-2-166-1-27-1h-13v9l3 7 7 7v2h2l7 10 5 10 4 10 11 16 11 24 24 44 13 24 12 22 11 21 12 20 8 16 9 17 13 23 15 29 13 23 8 16 10 17 8 16 11 20 3 1 7-1h7l24-7 12-5 3 1-9 6-21 6-12 4-8 1-9-2-5-7-7-14-4-4-6-12-2-5-5-7-3-10-6-11-4-5v-2h-2l-6-11-7-14-3-8-6-9-1-3-2-1-2-4-4-6-3-5v-3h-2l-10-24-7-9-4-8-3-4v-3h-2l-5-12-4-11-8-10-3-7-2-1-4-8-6-10-1-6-3-8-2-5-4-2-2-5h-2l-4-9-2-5-6-9-6-17-8-8v-3h-2l-4-8-2-5-6-11-3-11-2-5-3-1-6-10-2-1-6-11-3-5-1-4v-12l1-3 6-2z"
        style={{ stroke: "#616464", fill: "#616464" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(321,827)"
        d="m0 0h63l16 2 3 4 2 10 1 22v207l-1 10-5 6-10 7-1 2h-2l-2 4-8 7h-2l-2 4-5 2v-3l26-26 1-6v-240l-2-5v-3l-49 1-19 1-5 4-1 3v31l1 23v185l-1 24-3 21-2 10v13l4 4 7 2 5-3v5l-3 2-7 1-6-3-4-5-2-4v-40l-1-24v-92l-1-33v-68l1-55 4-5z"
        style={{ stroke: "#5A5F62", fill: "#5A5F62" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(269,342)"
        d="m0 0h1v5l-2 1-1 21 1 433v40l-1 130-1 22-1 85v38l-1 33 2 7 2 2-12-1 2-3h2l-1-63-1-182v-111l1-118 1-321 3-11z"
        style={{ stroke: "#A89579", fill: "#A89579" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(445,458)"
        d="m0 0 12 1 7 4 5 21 7 8 5 6 4 8 5 7 6 16 3 6v3h3l5 7 4 8 6 11 3 9 6 12 7 8 7 14 5 8 2 10 6 8 7 10 5 10 6 8 4 10 2 9 6 7 3 3 5 10 3 7 5 6 5 17 3 4v2l4 2 4 5 3 12-3-3-12-18-7-12-5-10-10-16-10-19-4-10-6-10-8-11-5-11-7-18-10-17-7-11-11-23-12-20-10-16-8-16-13-21-8-15-2-7v-7h-11l-1 284 3 1v19l2 12 3 7h164l5-2 1-3 1-12h1l2 16-2 3-4 1-14 1-153-1-10-1-3-3-2-12v-105l1-3-1-7v-168l-1-23 2-9z"
        style={{ stroke: "#5C6163", fill: "#5C6163" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(278,332)"
        d="m0 0h90v1l-90 1-4 17-1 6v38l-1 54v89l-1 44 1 134-1 53v68l1 95-1 44-1 25v29l1 38v87l1 5-6-2-3-9 1-42v-44l1-69 1-22 1-153v-45l-1-406 1-20 3-1v-6l7-8z"
        style={{ stroke: "#585E62", fill: "#585E62" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(456,828)"
        d="m0 0h24l-3 2-18 1-5 2-3 5-1 6v10l1 13v206l-1 15-3 8-7 11h-1l1-7 2-11-1-36-1-213 2-5 2-4 5-2z"
        style={{ stroke: "#595E62", fill: "#595E62" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(709,838)"
        d="m0 0 5 5 9 10 10 15 17 32 11 18 15 29 10 17 12 23 12 21 12 23 12 22 14 26 16 28 8 16 12 22 10 16 13 27 12 21 1 8-10 10-5 3v-3h2l1-4 1-2v-12l-5-12-6-11-6-16-2-4-3-3-3-5-6-9-5-9-4-8-3-10-5-8-7-9-3-4-4-10-4-6-4-13v-3h-2l-3-6-2-1v-2l-4-2-4-8-3-7-4-6-5-12-3-7-9-13-7-14-3-5-6-13-6-10v-2l-3-1-11-21-6-16v-2h-2l-2-5-7-7-7-14-5-9-6-16-6-8-4-6v-2h-2l-2-7-3-1v-2l-4-2z"
        style={{ stroke: "#636564", fill: "#636564" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(682,874)"
        d="m0 0 3 4 3 6 5 5 10 18 4 7 5 14 3 3v2l3 1 2 3v4h2l2 4v3h2l3 6 6 10 2 9 1 4 4 2 6 9v5h2l5 8v3l3 1 3 7 2 5 3 12 6 4 7 11 1 8 3 1 4 6 4 13 3 9 4 3v2h2v2l3 1 4 9-1 2 4 1 2 6 5 11 3 9 6 10 5 5 5 10 2 1 2 6 4 8 1 7 2 4h2l4 7 9 15 3 3 4 9v5l-3-3-20-30-5-13-19-32-6-10-5-14-1-3-3-1-12-22-10-19-11-18-11-20-8-16-9-16-6-10-8-18-3-7-5-8-9-14-4-8-10-22-5-8-10-18-4-10z"
        style={{ stroke: "#616464", fill: "#616464" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(843,512)"
        d="m0 0h2l4 10 4 13 3 17v54l-2 21-5 12-2 3-5 23-2 9-3 4-4 7-3 6-8 11h-2l-2 5-5 7-2 5-5 5-3 1-1 3h-2l2-4 14-18 6-10 8-13 9-20 3-10 1-21z"
        style={{ stroke: "#585E62", fill: "#585E62" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(322,832)"
        d="m0 0 3 1-5 4-1 3v31l1 23v185l-1 24-1 10h-1l-1-45v-28l-1-39-2-30-1-92v-26l1-12 4-6z"
        style={{ stroke: "#A89579", fill: "#A89579" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(461,466)"
        d="m0 0 5 5 4 15 10 10 5 10 5 7 6 16 3 6v3h3l5 7 4 8 6 11 3 9 6 12 7 8 7 14 5 8 2 10 6 8 7 10 5 10 6 8 4 10 2 9 6 7 3 3 5 10 3 7 5 6 5 17 3 4v2l4 2 4 5 3 12-3-3-12-18-7-12-5-10-10-16-10-19-4-10-6-10-8-11-5-11-7-18-10-17-7-11-11-23-12-20-10-16-8-16-13-21-8-15-2-10z"
        style={{ stroke: "#626564", fill: "#626564" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(398,468)"
        d="m0 0 2 4 1 5v286l-1 21-3 3-1-3v-313z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(393,831)"
        d="m0 0 5 5 3 8v226l-1 10-5 5v-246l-2-5z"
        style={{ stroke: "#A79578", fill: "#A79578" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(303,330)"
        d="m0 0h372l19 1 8 1v1h-334l-88-1v-1z"
        style={{ stroke: "#B1A087", fill: "#B1A087" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(720,386)"
        d="m0 0h10l7 3 10 4 10 5 6 5 2 4 2 1v2l5 1 10 3 1 4 4 2 5 5 2 5 11 9 4 3v2l5 2 4 9v2h2l1 5 6 4 5 9 3 5 3 7 5 11 1 14-2 4-2-13-3-7-6-11-12-21-7-10-4-6-2-2-6-8-1 3-8-9-6-7-8-7-13-8-22-14-8-4-7-4-7-1z"
        style={{ stroke: "#676865", fill: "#676865" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(545,624)"
        d="m0 0 5 5 10 14 5 10 6 8 4 10 2 9 6 7 3 3 5 10 3 7 5 6 5 17 3 4v2l4 2 4 5 3 12-3-3-12-18-7-12-5-10-10-16-10-19-4-10-6-10-8-11-5-11-3-8z"
        style={{ stroke: "#646665", fill: "#646665" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(448,846)"
        d="m0 0h1l2 21v206l-1 15-2-4z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(786,364)"
        d="m0 0 6 2 13 9 12 10 10 8 14 14 9 11 9 12 9 15 12 26 12 28 4 15 1 9v19h-1l-1-16-3-16-3-7-4-12-3-6-3-9-8-16-6-16-8-8-4-6-1-3-3-1-9-14-8-7-8-10-4-3v-2l-5-2-10-7-12-10-7-6z"
        style={{ stroke: "#A69477", fill: "#A69477" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(843,520)"
        d="m0 0h1l3 22 2 8 1 25v13l-2 26-2 15-2 1-1-82z"
        style={{ stroke: "#A79477", fill: "#A79477" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(627,770)"
        d="m0 0h1l2 16-2 3-4 1-14 1-132-1 1-2 21-1h120l5-2 1-3z"
        style={{ stroke: "#696A66", fill: "#696A66" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(843,632)"
        d="m0 0 2 1-1 24-4 17-3 4-4 7-3 6-8 11h-2l-2 5-5 7-2 5-5 5-3 1-1 3h-2l2-4 14-18 6-10 8-13 9-20 3-10z"
        style={{ stroke: "#696966", fill: "#696966" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(320,380)"
        d="m0 0h35l41 1 4 5 1 2v8h-3l-2-7v-6h-75z"
        style={{ stroke: "#AA987D", fill: "#AA987D" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(720,386)"
        d="m0 0h10l7 3 10 4 10 5 6 5 2 4 2 1-1 3-20-12-7-4-9-6-10-2z"
        style={{ stroke: "#656765", fill: "#656765" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(844,1174)"
        d="m0 0 3 2v2h2l4 7 9 15 3 3 4 9v5l-3-3-20-30-2-6z"
        style={{ stroke: "#5F6364", fill: "#5F6364" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(472,397)"
        d="m0 0 7 6v2h2l7 10 5 10 4 10 11 16 6 14-1 2-5-7-8-16-5-7-5-12-5-10-11-13z"
        style={{ stroke: "#A9967A", fill: "#A9967A" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(716,335)"
        d="m0 0 9 1 12 4 28 12 14 7-4 1-12-4-4-4-19-8-10-4-14-4z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(643,829)"
        d="m0 0h9l5 3 2 4h2l4 5 5 5 4 7 4 8 4 10-2 1-8-16-8-13-11-11-10-2z"
        style={{ stroke: "#616464", fill: "#616464" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(431,1114)"
        d="m0 0 3 1-11 12-11 8-1-4 5-5 11-10z"
        style={{ stroke: "#5F6363", fill: "#5F6363" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(873,1226)"
        d="m0 0 5 1 5 2v2l5 1h8l8-2-3 3-6 3h-7l-10-4z"
        style={{ stroke: "#5F6363", fill: "#5F6363" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(399,1141)"
        d="m0 0h6l-6 7-11 9-4 3v-3h2l1-4 3-1 2-4h2l1-4z"
        style={{ stroke: "#656665", fill: "#656665" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(472,397)"
        d="m0 0 7 6v2h2l7 10 5 10 3 10-4-4-5-13-11-14-4-5z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(448,748)"
        d="m0 0 3 1v19l2 12 1 4-4-2-1-2-1-24z"
        style={{ stroke: "#AA987C", fill: "#AA987C" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(274,1166)"
        d="m0 0 2 3v20l-1 7-2-4v-22z"
        style={{ stroke: "#585E62", fill: "#585E62" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(547,528)"
        d="m0 0 3 4 14 25-1 2-5-6-5-9-4-7z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(739,771)"
        d="m0 0 3 1-9 6-15 4-4-1 4-2 19-7z"
        style={{ stroke: "#656665", fill: "#656665" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(788,792)"
        d="m0 0 2 1-8 6-12 5-10 5 2-4 8-4 9-4 7-4z"
        style={{ stroke: "#656765", fill: "#656765", fill: "#656765" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(520,479)"
        d="m0 0 4 5 12 22-1 2-6-9-1-5-3-1-5-11z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(911,1197)"
        d="m0 0 3 3 6 12v5h-3l-3-10-3-7z"
        style={{ stroke: "#A9967A", fill: "#A9967A" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(576,582)"
        d="m0 0 4 5 11 19-1 2-5-7-1-3-4-4-4-8z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(394,381)"
        d="m0 0 4 2 3 5v8h-3l-2-7v-6h-2z"
        style={{ stroke: "#AD9C82", fill: "#AD9C82" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(604,634)"
        d="m0 0 3 3 10 18-1 2-4-5-6-11v-3h-2z"
        style={{ stroke: "#A79578", fill: "#A79578" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(750 1e3)"
        d="m0 0 3 1 5 9 2 5-1 3-9-16z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(461,466)"
        d="m0 0 3 4 2 10-1 4-4-9-1-7z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(371,1169)"
        d="m0 0 2 1-9 9-4 2v-4l3-2 5-5z"
        style={{ stroke: "#606364", fill: "#606364" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(643,829)"
        d="m0 0h9l5 3 2 4h2l2 5-7-6-5-4-8-1z"
        style={{ stroke: "#737069", fill: "#737069" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(272,1212)"
        d="m0 0h1l1 7 2 6v6l-2-1-2-6z"
        style={{ stroke: "#5E6263", fill: "#5E6263" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(449,770)"
        d="m0 0h2l2 10 1 4-4-2-1-2z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(899,1174)"
        d="m0 0 3 4 7 14-4-2-3-6-3-7z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(778,1058)"
        d="m0 0 3 1 4 4 3 10-3-3z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(817,1023)"
        d="m0 0 3 4 6 11-1 2-5-7-3-7z"
        style={{ stroke: "#A9967A", fill: "#A9967A" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(872,1125)"
        d="m0 0 3 4 4 7v2l-3-1-4-7z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(763,758)"
        d="m0 0 2 1-3 4-10 3 3-3z"
        style={{ stroke: "#646665", fill: "#646665" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(462,487)"
        d="m0 0 2 1 2 9-3-3z"
        style={{ stroke: "#FEFEFE", fill: "#FEFEFE" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(518,584)"
        d="m0 0 3 2-1 3z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(315,1142)"
        d="m0 0h3l-1 3z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(477,512)"
        d="m0 0 3 2-1 2z"
        style={{ stroke: "#EFECE7", fill: "#EFECE7" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(321,1146)"
        d="m0 0h3v2l-3-1z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(480,516)"
        d="m0 0 2 1-1 2z"
        style={{ stroke: "#E8E3DC", fill: "#E8E3DC" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(802,443)"
        d="m0 0 2 1-1 2z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      <motion.path
        transform="translate(689,778)"
        d="m0 0h2l-1 2z"
        style={{ stroke: "#A69376", fill: "#A69376" }}
        animate={controls}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        strokeWidth="0.75"
      />
      {/* <motion.path transform="translate(590,715)" d="m0 0" style={{stroke:"#FEFEFE" />
      <motion.path transform="translate(563,665)" d="m0 0" style={{stroke:"#A69376" />
      <motion.path transform="translate(562,663)" d="m0 0" style={{stroke:"#A69376" />
      <motion.path transform="translate(505,560)" d="m0 0" style={{stroke:"#D2C8BA" />
      <motion.path transform="translate(504,558)" d="m0 0" style={{stroke:"#A69376" />
      <motion.path transform="translate(741,764)" d="m0 0" style={{stroke:"#A69376" />
      <motion.path transform="translate(591,717)" d="m0 0" style={{stroke:"#FEFEFE" />
      <motion.path transform="translate(559,658)" d="m0 0" style={{stroke:"#FEFEFE" />
      <motion.path transform="translate(509,567)" d="m0 0" style={{stroke:"#FEFEFE" />
      <motion.path transform="translate(508,566)" d="m0 0" style={{stroke:"#FEFEFE" />
      <motion.path transform="translate(506,562)" d="m0 0" style={{stroke:"#A69376" />
      <motion.path transform="translate(503,557)" d="m0 0" style={{stroke:"#A69376" />
      <motion.path transform="translate(474,506)" d="m0 0" style={{stroke:"#FEFEFE" />
      <motion.path transform="translate(742,398)" d="m0 0" style={{stroke:"#A69376" /> */}
    </motion.svg>
  );
}
