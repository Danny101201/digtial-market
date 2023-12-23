// @ts-check
import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'] // add this
}

export default withPlaiceholder(nextConfig);
