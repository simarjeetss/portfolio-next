"use client";

import { Github, Linkedin, TwitterIcon, Mail } from "lucide-react";

import { Dock, DockIcon } from "@/components/ui/footer/dock";

export function DockDemo() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock direction="middle">
        <DockIcon aria-label="GitHub">
            <a href="https://github.com/simarjeetss" target="_blank" rel="noopener noreferrer">
                <Github className="size-6 " />
            </a>
        </DockIcon>
        <DockIcon aria-label="LinkedIn">
          <a href="https://www.linkedin.com/in/simarjeetss529/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="size-6" />
          </a>
        </DockIcon>
        <DockIcon aria-label="Twitter">
          <a href="https://twitter.com/simarjeetss529" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="size-6" />
          </a>
        </DockIcon>
        <DockIcon aria-label="Gmail">
            <a href="mailto:simarjeetss529@gmail.com">
                <Mail className="size-6" />
            </a>
        </DockIcon>
      </Dock>
    </div>
  );
}
