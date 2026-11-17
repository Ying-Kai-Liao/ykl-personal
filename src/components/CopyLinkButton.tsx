import { useState } from "react";
import { IoCheckmark, IoLinkOutline } from "react-icons/io5";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy link"
      title={copied ? "Copied!" : "Copy link"}
      className="inline-flex items-center justify-center"
    >
      {copied ? <IoCheckmark className="text-primary" /> : <IoLinkOutline />}
    </button>
  );
}
