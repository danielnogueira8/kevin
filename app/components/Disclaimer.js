import { DISCLAIMER } from "../../lib/site";

export default function Disclaimer({ className = "" }) {
  return <p className={`site-disclaimer ${className}`.trim()}>{DISCLAIMER}</p>;
}
