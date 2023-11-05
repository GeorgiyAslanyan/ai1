"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code }) => {
  return (
    <div className="w-[400px] h-[400px] hover:scale-105 duration-150 ease-linear transition-all rounded-xl overflow-hidden bg-[#1F1E1F] pt-7 relative">
      <div className="absolute top-2 right-2 flex gap-3">
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <div className="w-4 h-4 rounded-full bg-red-500"></div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden w-full h-full">
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
