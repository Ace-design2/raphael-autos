import type { NextConfig } from "next";
import path from "path";
import os from "os";

// Dynamically discover all local IPv4 network interfaces so Next.js 16 allowedDevOrigins
// never blocks client hydration or HMR across LAN when your DHCP IP changes.
const getLocalIpOrigins = (): string[] => {
  const origins: string[] = [
    "localhost:3000",
    "localhost:3001",
    "127.0.0.1:3000",
    "127.0.0.1:3001",
    "0.0.0.0:3000",
  ];

  try {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === "IPv4" && !iface.internal) {
          // Add exact IP with standard dev ports and standalone IP
          origins.push(`${iface.address}:3000`);
          origins.push(`${iface.address}:3001`);
          origins.push(iface.address);
        }
      }
    }
  } catch (err) {
    console.error("Could not read network interfaces:", err);
  }

  // Ensure current known IPs are also explicitly listed
  return Array.from(
    new Set([
      ...origins,
      "172.16.0.103:3000",
      "172.16.0.103",
      "172.16.0.44:3000",
      "172.16.0.44",
    ])
  );
};

const nextConfig: NextConfig = {
  allowedDevOrigins: getLocalIpOrigins(),
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;


