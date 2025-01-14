import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // With the additon of mdx filetypes, we need to add the pageExtensions config here
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  //Add additional config here...
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
// If we add any additional plugins above, they will need to be combined with the nextConfig before exporting
export default withMDX(nextConfig)

//Default
// export default nextConfig;
