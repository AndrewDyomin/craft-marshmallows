"use client";

import React, { useEffect } from "react";

export const View = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="cloudimage-360"
      data-folder="/view/"
      data-filename="support_{index}.jpg"
      data-amount="56"
      data-disable-zoom="true"
      data-draggable="true"
      data-drag-speed="100"
      data-autoplay="true"
    />
  );
};
